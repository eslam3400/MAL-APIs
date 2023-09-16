import { sign } from "jsonwebtoken";

export default class AuthHelper {
  generateToken(tokenVersion: number, id: string): string {
    return sign({ v: tokenVersion, id }, process.env.JWT_SECRET!, { expiresIn: process.env.JWT_EXPIRATION });
  }
}