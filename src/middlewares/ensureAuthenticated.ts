import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import UsersRepository from '../modules/accounts/repositories/implementations/UsersRepository'
import { AppError } from '../errors/AppError'

interface IPayload {
  sub: string
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new AppError('Token missing', 401)
  }

  try {
    const [, token] = authHeader.split(' ')

    const { sub: user_id } = verify(
      token,
      'aquivaiumtokemaleatório'
    ) as IPayload
    const usersRepository = new UsersRepository()
    const user = usersRepository.findById(user_id)

    if (!user) throw new AppError('User does not exists!', 401)

    request.user = {
      id: user_id,
    }

    next()
  } catch {
    throw new AppError('Invalid token!', 401)
  }
}
