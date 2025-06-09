const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./Config/swagger');
const multer = require('multer');
const { generalLimiter } = require("./Middlewares/rateLimiter.middleware");

const errorHandler = require('./Middlewares/Error.middleware');

const app = express();

// Apply rate limiters
app.use(generalLimiter);


// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Swagger Documentation
app.use('/api-docs', swaggerUi.serve);
app.get(
  '/api-docs',
  swaggerUi.setup(swaggerSpec, {
    explorer: true,
    customSiteTitle: 'Flick API Documentation',
    customfavIcon: '/assets/favicon.ico',
  })
);

// API Routes
app.use(`/api/v1`, require('./Router'));

// Error handling middleware
app.use(errorHandler);

module.exports = app;
