import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import UsersRepository from '../../repositories/implementations/UsersRepository'
import {AppError} from "../../../../errors/AppError";


interface IRequest {
  email: string
  password: string
}

interface IResponse {
  user: {
    name: string
    email: string
  }
  token: string
}

class AuthenticateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) throw new AppError('Email or password incorrect!')

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) throw new AppError('Email or password incorrect!', 400)

    const token = sign({}, 'aquivaiumtokemaleatório', {
      subject: user.id,
      expiresIn: '1d',
    })

    return {
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    }
  }
}

export default AuthenticateUserUseCase
