import { NextFunction, Request, Response } from "express";
import BaseController from "./base.controller";
import UserService from "../services/user.service";
import { autoInjectable } from "tsyringe";
import { createOtpSchema, verifyOTPSchema } from "../models/dtos/otp.dto";
import AuthHelper from "../helpers/auth.helper";

@autoInjectable()
export default class AuthController extends BaseController {
  constructor(private userService: UserService, private authHelper: AuthHelper) {
    super();
    this.userService = userService;
    this.authHelper = authHelper;
  }

  crateOTP = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { phone } = createOtpSchema.parse(req.body);
      await this.userService.createUserOTP(phone);
      return this.Ok(res);
    } catch (error) {
      next(error)
    }
  }

  verifyOTP = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { phone, otp } = verifyOTPSchema.parse(req.body);
      const token = await this.userService.generateToken(otp, phone);
      if (!token) return this.BadRequest(res, "Invalid OTP");
      return this.Ok(res, { token })
    } catch (error) {
      next(error)
    }
  }

  logout = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { user } = req;
      this.userService.updateTokenVersion(user.id!);
      return this.Ok(res);
    } catch (error) {
      next(error);
    }
  }

  me = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { user } = req;
      return this.Ok(res, user);
    } catch (error) {
      next(error);
    }
  }
}