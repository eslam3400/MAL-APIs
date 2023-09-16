import express from 'express';
import dotenv from 'dotenv';
import serverless from 'serverless-http';
import "reflect-metadata";

dotenv.config();

import "./config/mongo.config";
import "./extensions/request.extension";
import router from './routes/router';
import { errorHandler } from './middlewares/error.middleware';

const app = express();
app.use(express.json());

// Use routes
app.use('/api', router);

// Global error handler
app.use(errorHandler);

let server;

if (process.env.NODE_ENV !== 'production') {
  app.listen(3000, () => console.log('listening on port: 3000'));
} else {
  server = serverless(app);
}

export { server };