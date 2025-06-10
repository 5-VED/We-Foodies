const rateLimit = require('express-rate-limit');
const { HTTP_CODES } = require('../Constants/enums');
const logger = require('../Config/Logger');

// General API limiter
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again after 15 minutes',
    code: HTTP_CODES.TOO_MANY_REQUESTS,
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  handler: (req, res, next, options) => {
    logger.warn('Rate limit exceeded', {
      ip: req.ip,
      path: req.path,
      method: req.method,
    });
    res.status(HTTP_CODES.TOO_MANY_REQUESTS).json(options.message);
  },
});

// // Auth routes limiter (login, signup, etc.)
// const authLimiter = rateLimit({
//     windowMs: 60 * 60 * 1000, // 1 hour
//     max: 5, // Limit each IP to 5 requests per windowMs
//     message: {
//         success: false,
//         message: 'Too many authentication attempts, please try again after an hour',
//         code: HTTP_CODES.TOO_MANY_REQUESTS
//     },
//     standardHeaders: true,
//     legacyHeaders: false,
//     handler: (req, res, next, options) => {
//         logger.warn('Auth rate limit exceeded', {
//             ip: req.ip,
//             path: req.path,
//             method: req.method
//         });
//         res.status(HTTP_CODES.TOO_MANY_REQUESTS).json(options.message);
//     }
// });

// // API routes limiter
// const apiLimiter = rateLimit({
//     windowMs: 15 * 60 * 1000, // 15 minutes
//     max: 1000, // Limit each IP to 1000 requests per windowMs
//     message: {
//         success: false,
//         message: 'Too many API requests, please try again after 15 minutes',
//         code: HTTP_CODES.TOO_MANY_REQUESTS
//     },
//     standardHeaders: true,
//     legacyHeaders: false,
//     handler: (req, res, next, options) => {
//         logger.warn('API rate limit exceeded', {
//             ip: req.ip,
//             path: req.path,
//             method: req.method
//         });
//         res.status(HTTP_CODES.TOO_MANY_REQUESTS).json(options.message);
//     }
// });

// // File upload limiter
// const uploadLimiter = rateLimit({
//     windowMs: 60 * 60 * 1000, // 1 hour
//     max: 10, // Limit each IP to 10 uploads per hour
//     message: {
//         success: false,
//         message: 'Too many file uploads, please try again after an hour',
//         code: HTTP_CODES.TOO_MANY_REQUESTS
//     },
//     standardHeaders: true,
//     legacyHeaders: false,
//     handler: (req, res, next, options) => {
//         logger.warn('Upload rate limit exceeded', {
//             ip: req.ip,
//             path: req.path,
//             method: req.method
//         });
//         res.status(HTTP_CODES.TOO_MANY_REQUESTS).json(options.message);
//     }
// });

// // Socket connection limiter
// const socketLimiter = rateLimit({
//     windowMs: 60 * 1000, // 1 minute
//     max: 30, // Limit each IP to 30 socket connections per minute
//     message: {
//         success: false,
//         message: 'Too many socket connections, please try again after a minute',
//         code: HTTP_CODES.TOO_MANY_REQUESTS
//     },
//     standardHeaders: true,
//     legacyHeaders: false,
//     handler: (req, res, next, options) => {
//         logger.warn('Socket rate limit exceeded', {
//             ip: req.ip,
//             path: req.path,
//             method: req.method
//         });
//         res.status(HTTP_CODES.TOO_MANY_REQUESTS).json(options.message);
//     }
// });

// Export limiters
module.exports = {
  generalLimiter,
  // authLimiter,
  // apiLimiter,
  // uploadLimiter,
  // socketLimiter
};
