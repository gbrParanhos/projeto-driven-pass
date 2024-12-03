import prisma from "../database/connection"

const readUserByEmail = (email: string) => {
  return prisma.user.findFirst({
    where: {
      email
    }
  })
}

const readUserById = (id: number) => {
  return prisma.user.findFirst({
    where: {
      id
    }
  })
}

const createUser = (email: string, name: string, hashedPassword: string) => {
  return prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword
    }
  })
}

const userRepository = {
  readUserByEmail,
  readUserById,
  createUser,
}

export default userRepository