import Cryptr from "cryptr";
import { conflictError, notFoundError } from "../errors/errors";
import { CredentialRegister } from "../protocols/protocols";
import credentialRepository from "../repositories/credentialsRepository";

const cryptr = new Cryptr(process.env.CRYPTR_SECRET);

export const createCredential = async ({ title, url, username, password, userId }: CredentialRegister & { userId: number }) => {
  const credential = await credentialRepository.readCredentialByTitle(title, userId);
  if (credential) throw conflictError('Credencial');

  const encryptedPassword = cryptr.encrypt(password);

  return credentialRepository.createCredential(title, url, username, encryptedPassword, userId);
}

export const listCredentials = async (userId: number) => {
  const credentials = await credentialRepository.listCredentials(userId);

  return credentials.map(({ user_id, ...credential }) => {
    return { ...credential, password: cryptr.decrypt(credential.password) }
  })
}

export const readCredential = async (id: number, userId: number) => {
  const credential = await credentialRepository.readCredential(id, userId);
  if (!credential) throw notFoundError('Credencial', 'id');
  const { user_id, ...formattedCredential } = credential

  return { ...formattedCredential, password: cryptr.decrypt(formattedCredential.password) }
}

export const updateCredential = async ({ id, title, url, username, password, userId }: CredentialRegister & { id: number, userId: number }) => {
  const credential = await credentialRepository.readCredential(id, userId);
  if (!credential) throw notFoundError('Credencial', 'id');

  const encryptedPassword = cryptr.encrypt(password);

  return credentialRepository.updateCredential(id, title, url, username, encryptedPassword, userId);
}

export const destroyCredential = async ({ id, userId }: { id: number, userId: number }) => {
  const credential = await credentialRepository.readCredential(id, userId);

  if (!credential) throw notFoundError('Credencial', 'id');

  return credentialRepository.deleteCredential(id, userId);
}