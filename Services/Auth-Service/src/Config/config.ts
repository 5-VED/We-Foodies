import dotenv from 'dotenv';
import dotenvParseVariables from 'dotenv-parse-variables';
import path from 'path';

// Load environment variables from the .env file
const envResult = dotenv.config({ path: '.env' });

if (envResult.error) {
  throw new Error("Couldn't load environment variables");
}

// Parse environment variables to their correct types
const parsedEnv = dotenvParseVariables(envResult.parsed || {});

const env = process.env.NODE_ENV || 'development';

export const config	 = {
	env,
	isDevelopment: env === 'development',
	isProduction: env === 'production',
	isTest: env === 'test',
	port: process.env.PORT,
	database: {
		host: process.env.DB_HOST,  
		port: process.env.DB_PORT,
		name: process.env.DB_NAME,
		username: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
	},
	server: {
		memoryUsageTimeOut: (process.env.MEMORY_USAGE_TIMEOUT),
		activateNewRelic: true	
	},
	jwt: {
		secret: process.env.JWT_SECRET,
		expiresIn: process.env.JWT_EXPIRES_IN,
	},
};
