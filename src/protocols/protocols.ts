import { User } from "@prisma/client"

export type Error = {
  type: string,
  message: string | string[]
}

export type UserRegister = Omit<User, 'id'> & {
  confirmPassword: string
}

export type UserLogin = Omit<User, 'id' | 'name'>