import { User } from '../types/User'

type Error = {
  [key: string]: string
}

export const Validate = (data: User) => {
  const errors: Error = {}

  if (!data.name) {
    errors.name = 'O nome é obrigatório'
  }
  if (!data.email) {
    errors.email = 'Digite seu melhor e-mail'
  }
  if (!data.agree) {
    errors.agree = 'Você precisa concordar com os termos'
  }

  return errors
}
