# Swiggy Clone - Microservices Architecture

## Project Structure
```
swiggy/
├── services/                    # Microservices
│   ├── auth-service/           # Authentication & Authorization Service
│   │   ├── src/
│   │   │   ├── config/        # Service configuration
│   │   │   ├── controllers/   # Request handlers
│   │   │   ├── middleware/    # Custom middleware
│   │   │   ├── models/        # Database models
│   │   │   ├── routes/        # API routes
│   │   │   ├── services/      # Business logic
│   │   │   └── utils/         # Utility functions
│   │   ├── tests/             # Unit and integration tests
│   │   └── package.json
│   │
│   ├── order-service/         # Order Management Service
│   │   ├── src/
│   │   │   ├── config/
│   │   │   ├── controllers/
│   │   │   ├── middleware/
│   │   │   ├── models/
│   │   │   ├── routes/
│   │   │   ├── services/
│   │   │   └── utils/
│   │   ├── tests/
│   │   └── package.json
│   │
│   └── notification-service/   # Notification Service
│       ├── src/
│       │   ├── config/
│       │   ├── controllers/
│       │   ├── middleware/
│       │   ├── models/
│       │   ├── routes/
│       │   ├── services/
│       │   └── utils/
│       ├── tests/
│       └── package.json
│
├── api-gateway/               # API Gateway Service
│   ├── src/
│   │   ├── config/
│   │   ├── middleware/
│   │   ├── routes/
│   │   └── utils/
│   ├── tests/
│   └── package.json
│
├── infrastructure/           # Infrastructure Configuration
│   ├── docker/              # Docker configurations
│   │   ├── auth-service/
│   │   ├── order-service/
│   │   ├── notification-service/
│   │   └── api-gateway/
│   │
│   ├── k8s/                 # Kubernetes configurations
│   │   ├── auth-service/
│   │   ├── order-service/
│   │   ├── notification-service/
│   │   └── api-gateway/
│   │
│   ├── scripts/             # Deployment and utility scripts
│   └── docker-compose.yml   # Local development setup
│
├── shared/                  # Shared code and utilities
│   ├── constants/
│   ├── types/
│   ├── utils/
│   └── package.json
│
├── docs/                    # Documentation
│   ├── api/
│   ├── architecture/
│   └── setup/
│
└── scripts/                 # Project-wide scripts
    ├── setup.sh
    └── deploy.sh
```

## Setup Instructions

1. Install Dependencies:
```bash
# Install project dependencies
npm install

# Install service-specific dependencies
cd services/auth-service && npm install
cd ../order-service && npm install
cd ../notification-service && npm install
cd ../../api-gateway && npm install
```

2. Environment Setup:
```bash
# Copy environment files
cp services/auth-service/.env.example services/auth-service/.env
cp services/order-service/.env.example services/order-service/.env
cp services/notification-service/.env.example services/notification-service/.env
cp api-gateway/.env.example api-gateway/.env
```

3. Start Development Environment:
```bash
# Start all services using Docker Compose
docker-compose up -d
```

4. Run Tests:
```bash
# Run tests for all services
npm run test

# Run tests for specific service
cd services/auth-service && npm run test
```

## Development Guidelines

1. Code Style:
   - Follow ESLint configuration
   - Use Prettier for code formatting
   - Write meaningful commit messages

2. Testing:
   - Write unit tests for all new features
   - Maintain minimum 80% code coverage
   - Run integration tests before deployment

3. Documentation:
   - Update API documentation for new endpoints
   - Document architectural decisions
   - Keep README files up to date

4. Git Workflow:
   - Create feature branches from develop
   - Submit PRs for review
   - Squash commits before merging

## Deployment

1. Build Services:
```bash
./scripts/build.sh
```

2. Deploy to Kubernetes:
```bash
./scripts/deploy.sh
```

## Monitoring and Logging

- Use Prometheus for metrics
- Grafana for visualization
- ELK stack for logging

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request 