import { conflictError, notFoundError, unauthorizedError } from "../errors/errors";
import { UserLogin, UserRegister } from "../protocols/protocols";
import userRepository from "../repositories/userRepository";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const createUser = async ({ email, name, password }: UserRegister) => {
  const user = await userRepository.readUserByEmail(email);
  if (user) throw conflictError('usuário');

  const hashedPassword = bcrypt.hashSync(password, 10);

  return userRepository.createUser(email, name, hashedPassword)
}

export const createJwt = async ({ email, password }: UserLogin) => {
  const user = await userRepository.readUserByEmail(email);
  if (!user) throw notFoundError('usuário', 'e-mail');
  if (!bcrypt.compareSync(password, user.password)) throw unauthorizedError();
  console.log(process.env.JWT_SECRET)

  const result = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

  return result
}