import { Router } from "express";
import { validateSchema } from "../middlewares/schemaMiddleware";
import { userLoginSchema, userRegisterSchema } from "../schemas/userSchema";
import { postSignIn, postSignUp } from "../controllers/userController";

const userRouter = Router();

userRouter.post('/sign-up', validateSchema(userRegisterSchema), postSignUp);
userRouter.post('/sign-in', validateSchema(userLoginSchema), postSignIn);

export default userRouter;