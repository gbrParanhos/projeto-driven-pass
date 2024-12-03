import { Request, Response } from "express";
import { createCredential, listCredentials, readCredential, updateCredential, destroyCredential } from "../services/credentialsService";

export const postCredential = async (req: Request, res: Response) => {
  await createCredential({ ...req.body, userId: res.locals.user.id });
  res.sendStatus(201);
}

export const getCredentials = async (req: Request, res: Response) => {
  const result = await listCredentials(res.locals.user.id);
  res.status(200).send(result);
}

export const getCredential = async (req: Request, res: Response) => {
  const result = await readCredential(+req.params.id, res.locals.user.id);
  res.status(200).send(result);
}

export const putCredential = async (req: Request, res: Response) => {
  await updateCredential({ ...req.body, userId: res.locals.user.id, id: +req.params.id });
  res.sendStatus(204);
}

export const deleteCredential = async (req: Request, res: Response) => {
  await destroyCredential({ userId: res.locals.user.id, id: +req.params.id });
  res.sendStatus(204);
}