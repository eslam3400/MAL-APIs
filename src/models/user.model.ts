import mongoose from 'mongoose';

interface IUser {
  id?: string;
  phone?: string;
  otp?: number | null;
  otpExpiresAt?: Date | null;
  tokenVersion?: number;
  isProfileComplete?: boolean;
}

const userSchema = new mongoose.Schema<IUser>({
  phone: { type: String, required: true },
  otp: { type: Number },
  otpExpiresAt: { type: Date },
  tokenVersion: { type: Number, default: 1 },
  isProfileComplete: { type: Boolean, default: false },
});

const UserModel = mongoose.model<IUser>('User', userSchema);

export { UserModel, IUser };
