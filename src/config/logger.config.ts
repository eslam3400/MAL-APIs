import winston from 'winston';

// Configure the Winston logger
const logger = winston.createLogger({
  level: 'error',
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: 'exceptions.log' }),
  ],
});

process.on('uncaughtException', (ex) => {
  logger.error('Uncaught Exception:', ex);
  process.exit(1);
});

export default logger;
