import joi from "joi";
import { CredentialRegister } from "../protocols/protocols";

export const createCredentialSchema = joi.object<CredentialRegister>({
  title: joi.string().required(),
  url: joi.string().required(),
  username: joi.string().required(),
  password: joi.string().min(6).required()
})