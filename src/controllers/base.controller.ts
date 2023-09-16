import { Response } from "express"
import { Result } from "../models/response.model";

export default class BaseController {
  Ok = (res: Response, data?: any): void => {
    res.status(200).json(data);
  }

  BadRequest = (res: Response, error?: string): void => {
    const result = new Result();
    result.error = error;
    res.status(400).json(result);
  }

  NotFound = (res: Response, error?: string): void => {
    const result = new Result();
    result.error = error;
    res.status(404).json(result);
  }
}