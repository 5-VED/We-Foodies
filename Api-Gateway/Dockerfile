# Use Node.js LTS version
FROM node:18-alpine

# Add non-root user for security
# RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Set proper permissions
# RUN chown -R appuser:appgroup /app

# Switch to non-root user
# USER appuser

# Expose port
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=development
ENV PORT=3000

# Start the application with development configuration
CMD ["npm", "run", "start:dev"]