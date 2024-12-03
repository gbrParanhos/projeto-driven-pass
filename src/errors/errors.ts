import { Error } from "../protocols/protocols"

export const unprocessableError = (message: string[]): Error => {
  return {
    type: 'unprocessable',
    message
  }
}

export const conflictError = (entity: string): Error => {
  return {
    type: 'conflict',
    message: `Já existe esse(s) ${entity} cadastrado(s).`
  }
}

export const notFoundError = (entity: string, propriety: string): Error => {
  return {
    type: 'notFound',
    message: `Não foi encontrado nenhum(a) ${entity} com esse(a) ${propriety}.`
  }
}

export const unauthorizedError = (): Error => {
  return {
    type: 'unauthorized',
    message: 'Acesso negado.'
  }
}