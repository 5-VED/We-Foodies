#!/bin/bash

# Wait for PostgreSQL to be ready
echo "Waiting for PostgreSQL to be ready..."
while ! nc -z postgres 5432; do
  sleep 1
done
echo "PostgreSQL is ready!"

# Run database migrations
cd ../Services/Auth-Service
npm run migrate

# Seed initial data if needed
npm run seed

echo "Database initialization complete!"  