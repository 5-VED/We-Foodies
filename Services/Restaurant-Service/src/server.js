const app = require('./app');
const mongoose = require('mongoose');
const { PORT, MONGODB_URI } = require('./Config/config');
const http = require('http');
const server = http.createServer(app);
const logger = require('./Config/Logger');

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  logger.error('Uncaught Exception:', error);
  process.exit(1);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (error) => {
  logger.error('Unhandled Rejection:', error);
  process.exit(1);
});

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => {
    logger.info('Successfully connected to MongoDB', { uri: MONGODB_URI, pid: process.pid });
    server.listen(PORT, () => logger.info(`Service Restaurant is up and running at port ${PORT} `, { port: PORT, pid: process.pid, environment: process.env.NODE_ENV || 'development' }));        
  })
  .catch((error) => {
    logger.error('Failed to connect to MongoDB', error);
    process.exit(1);
  });

// Handle server errors
server.on('error', (error) => {
  logger.error('Server error occurred', { error: error.message, stack: error.stack });
  process.exit(1);
});

// Handle server shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM received. Shutting down gracefully');
  server.close(() => {
    logger.info('Server closed');
    mongoose.connection.close(false, () => {
      logger.info('MongoDB connection closed');
      process.exit(0);
    });
  });
});
