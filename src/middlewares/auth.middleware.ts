import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UserModel } from "../models/user.model";
import { APIError } from "../errors/base.error";
import ErrorEnum from "../enums/error.enum";

export async function authenticate(req: Request, res: Response, next: NextFunction) {
  try {
    let token: string | undefined = req.header('Authorization')?.split(' ')[1];
    if (!token) throw new APIError(ErrorEnum.NotAuthorized);
    const payload: any = await verify(token, process.env.JWT_SECRET!)
    if (!payload) throw new APIError(ErrorEnum.NotAuthorized)
    const user = await UserModel.findById(payload.id);
    if (user && user.tokenVersion! == payload.v) {
      req.user = user;
      return next();
    }
    throw new APIError(ErrorEnum.NotAuthorized);
  } catch (error) {
    next(error);
  }
}