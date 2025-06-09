const express = require('express');
const app = express();
const cors = require('cors');
const { AUTH_SERVICE_URL, USER_SERVICE_URL } = require('./Config/config');
const axios = require('axios');

// Configure CORS with specific options
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  credentials: true
}));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Configure body parsing middleware
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

switch (true) {
  case !AUTH_SERVICE_URL:
    console.log("AUTH_SERVICE_URL is not defined in the environment variables.");
    break;

  case !USER_SERVICE_URL:
    console.log("USER_SERVICE_URL is not defined in the environment variables.");
    break;
}

/**
 *  Forward to user service using Axios
 */
app.use('/user-service', async (req, res) => {
  try {
    const targetPath = req.url.replace('/user-service', '');
        
    const response = await axios({
      method: req.method,
      url: `${USER_SERVICE_URL}${targetPath}`,      
      data: req.body,      
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else if (error.request) {
      res.status(504).json({
        error: 'Gateway Timeout',
        message: 'No response received from user service'
      });
    } else {
      res.status(500).json({
        error: 'Internal Server Error',
        message: error.message
      });
    }
  }
});

// Root Route
app.get('/health', (req, res) => {
  res.send('API Gateway is up 🚀');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled Error:', err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message
  });
});

module.exports = app;