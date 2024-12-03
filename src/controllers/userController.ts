import { Request, Response } from "express";
import { createJwt, createUser } from "../services/userService";

export const postSignUp = async (req: Request, res: Response) => {
  await createUser(req.body);
  res.sendStatus(201);
}

export const postSignIn = async (req: Request, res: Response) => {
  const token = await createJwt(req.body);
  res.status(200).send(token);
}