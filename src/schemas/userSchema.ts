import joi from "joi";
import { UserLogin, UserRegister } from "../protocols/protocols";

export const userRegisterSchema = joi.object<UserRegister>({
  email: joi.string().email().required(),
  name: joi.string().required(),
  password: joi.string().min(6).required(),
  confirmPassword: joi.ref('password')
}).with('password', 'confirmPassword')

export const userLoginSchema = joi.object<UserLogin>({
  email: joi.string().email().required(),
  password: joi.string().required()
})