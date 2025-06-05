require('dotenv').config()

module.exports = {
    PORT: process.env.PORT,    
    JWT_SECRET: process.env.JWT_SECRET,    
    AUTH_SERVICE_URL: process.env.AUTH_SERVICE_URL, 
    USER_SERVICE_URL: process.env.USER_SERVICE_URL 
}