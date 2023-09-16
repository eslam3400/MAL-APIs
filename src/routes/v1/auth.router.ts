import express from 'express';
import { container } from "tsyringe";
import AuthController from '../../controllers/auth.controller';
import { authenticate } from '../../middlewares/auth.middleware';

const authRouter = express.Router();
const controller = container.resolve(AuthController);

authRouter.post('/otp', controller.crateOTP);
authRouter.post('/otp/verify', controller.verifyOTP);
authRouter.post('/logout', authenticate, controller.logout);
authRouter.get('/me', authenticate, controller.me);

export default authRouter;
