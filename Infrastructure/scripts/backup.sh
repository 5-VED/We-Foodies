#!/bin/bash

# Set backup directory
BACKUP_DIR="../backups"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

# Create backup directory if it doesn't exist
mkdir -p $BACKUP_DIR

# Backup PostgreSQL database
echo "Backing up PostgreSQL database..."
docker exec postgres pg_dump -U postgres postgres > "$BACKUP_DIR/postgres_$TIMESTAMP.sql"

# Backup Redis data (if needed)
echo "Backing up Redis data..."
docker exec redis redis-cli SAVE
docker cp redis:/data/dump.rdb "$BACKUP_DIR/redis_$TIMESTAMP.rdb"

echo "Backup completed successfully!"
echo "Backup files are stored in: $BACKUP_DIR" 