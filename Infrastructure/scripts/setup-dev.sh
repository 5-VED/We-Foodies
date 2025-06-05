#!/bin/bash

# Create necessary directories
mkdir -p ../Services/Auth-Service/logs
mkdir -p ../Services/Order-Service/logs
mkdir -p ../Services/Notification-Service/logs

# Set up environment variables
cp ../Services/Auth-Service/.env.example ../Services/Auth-Service/.env
cp ../Services/Order-Service/.env.example ../Services/Order-Service/.env
cp ../Services/Notification-Service/.env.example ../Services/Notification-Service/.env

# Install dependencies
cd ../Services/Auth-Service && npm install
cd ../Order-Service && npm install
cd ../Notification-Service && npm install

# Start development environment
cd ../../infrastructure
docker-compose up -d

echo "Development environment setup complete!" 