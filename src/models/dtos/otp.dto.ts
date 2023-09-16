// schemas/userSchema.ts
import { z } from 'zod';

interface IOtpDto {
  otp: number;
  phone?: number;
}

const createOtpSchema = z.object({
  phone: z.string().regex(/^\d+$/).min(7).max(15),
});

const verifyOTPSchema = z.object({
  phone: z.string().regex(/^\d+$/).min(7).max(15),
  otp: z.number().int().max(9999).min(1000)
})

export { createOtpSchema, IOtpDto, verifyOTPSchema };