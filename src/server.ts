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


app.listen(process.env.PORT, () => console.log('listening on port: 3000'));

// Serverless
// const server = serverless(app);
// export { server };