import { autoInjectable } from "tsyringe";
import { UserModel } from "../models/user.model";
import AuthHelper from "../helpers/auth.helper";

@autoInjectable()
export default class UserService {

  constructor(
    private authHelper: AuthHelper,
  ) {
    this.authHelper = authHelper;
  }

  generateOTP(): string {
    const otpLength = +process.env.OTP_LENGTH!;
    let otp = '';

    for (let i = 0; i < otpLength; i++) {
      const randomDigit = Math.floor(Math.random() * 10);
      otp += randomDigit.toString();
    }

    return otp;
  }

  async createUserOTP(phone: string) {
    const otp = +this.generateOTP();
    const user = await UserModel.findOne({ phone });
    user?.save()
    if (user) {
      user.otp = otp;
      return;
    }
    await UserModel.create({ phone, otp });
  }

  async generateToken(otp: number, phone: string): Promise<string | null> {
    const user = await UserModel.findOne({ phone });
    if (!user) return null;
    if (process.env.NODE_ENV === 'development' && otp === 1234) {
      return this.authHelper.generateToken(user.tokenVersion!, user.id);
    }
    user.otp = null;
    user.otpExpiresAt = null;
    user.save();
    return this.authHelper.generateToken(user.tokenVersion!, user.id!);
  }

  async updateTokenVersion(id: string) {
    const user = await UserModel.findById(id);
    if (!user) return null;
    user.tokenVersion!++;
    await user.save()
  }
}