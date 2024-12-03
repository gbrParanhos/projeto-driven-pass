import jwt from "jsonwebtoken";
import userRepository from "../repositories/userRepository";
import { NextFunction, Request, Response } from "express";
import { unauthorizedError } from "../errors/errors";

export const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");
  if (!token) throw unauthorizedError();

  const decoded = jwt.verify(token, process.env.JWT_SECRET) as { userId: number };
  const user = await userRepository.readUserById(decoded.userId);
  if (!user) throw unauthorizedError();

  res.locals.user = user;
  next();
}