import { Request, Response } from 'express'
import { UpdateUserAvatarUseCase } from './UpdateUserAvatarUseCase'

class UpdateUserAvatarController {
  constructor(private updateUserAvatarUseCase: UpdateUserAvatarUseCase) {}

  async handle(request: Request, response: Response) {
    const { id } = request.user

    const avatar_file = null

    await this.updateUserAvatarUseCase.execute({ user_id: id, avatar_file })

    return response.status(204).send()
  }
}

export default UpdateUserAvatarController
