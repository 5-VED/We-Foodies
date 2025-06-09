const ApiError = require('../Config/ErrorResponse');
const { HTTP_CODES } = require('../Constants/enums');
const message = require('../Constants/response_message');


const errorHandler = (err, req, res, next) => {
    let error = { ...err };
    error.message = err.message;    

    // Default error
    if (!(error instanceof ApiError)) {
        error = new ApiError(
            error.statusCode || HTTP_CODES.INTERNAL_SERVER_ERROR,
            error.message || message.INTERNAL_SERVER_ERROR
        );
    }

    // Send error response
    res.status(error.statusCode).json({
        success: false,
        message: error.message,
        data: null,
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
};

module.exports = errorHandler; 