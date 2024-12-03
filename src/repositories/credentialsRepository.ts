import prisma from "../database/connection"

const readCredentialByTitle = (title: string, userId: number) => {
  return prisma.credential.findFirst({
    where: {
      title,
      user_id: userId
    }
  })
}

const createCredential = (title: string, url: string, username: string, encryptedPassword: string, userId: number) => {
  return prisma.credential.create({
    data: {
      title,
      url,
      username,
      password: encryptedPassword,
      user_id: userId
    }
  })
}

const listCredentials = (userId: number) => {
  return prisma.credential.findMany({
    where: {
      user_id: userId
    }
  })
}

const readCredential = (id: number, userId: number) => {
  return prisma.credential.findFirst({
    where: {
      id,
      user_id: userId
    }
  })
}

const updateCredential = (id: number, title: string, url: string, username: string, encryptedPassword: string, userId: number) => {
  return prisma.credential.update({
    data: {
      title,
      url,
      username,
      password: encryptedPassword,
    },
    where: {
      id,
      user_id: userId
    }
  })
}

const deleteCredential = (id: number, userId: number) => {
  return prisma.credential.delete({
    where: {
      id,
      user_id: userId
    }
  })
}

const credentialRepository = {
  readCredentialByTitle,
  createCredential,
  listCredentials,
  readCredential,
  updateCredential,
  deleteCredential
}

export default credentialRepository