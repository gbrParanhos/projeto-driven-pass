import { Router } from "express";
import { validateSchema } from "../middlewares/schemaMiddleware";
import { userLoginSchema, userRegisterSchema } from "../schemas/userSchema";
import { deleteUser, postSignIn, postSignUp } from "../controllers/userController";
import { validateToken } from "../middlewares/authMiddleware";

const userRouter = Router();

userRouter.post('/sign-up', validateSchema(userRegisterSchema), postSignUp);
userRouter.post('/sign-in', validateSchema(userLoginSchema), postSignIn);

userRouter.use(validateToken)
userRouter.delete('/erase', deleteUser);

export default userRouter;