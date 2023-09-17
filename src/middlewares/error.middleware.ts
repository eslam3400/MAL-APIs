import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { APIError } from '../errors/base.error';
import ErrorEnum from '../enums/error.enum';
import logger from '../config/logger.config';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  let error: any = err.message;
  let statusCode = 500;

  if (err instanceof z.ZodError) {
    error = err.errors;
    statusCode = ErrorEnum.BadRequest
  }
  if (err instanceof APIError) {
    error = err.message;
    statusCode = err.status;
  }

  logger.error(err);
  res.status(statusCode).json({ error });
};
