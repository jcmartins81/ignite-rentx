import { Router, Request, Response, request } from 'express'
import CreateUserController from '../modules/accounts/useCases/createUser'
import UpdateUserAvatarController from '../modules/accounts/useCases/updateUserAvatar'
import multer from 'multer'
import uploadConfig from '../config/upload'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const usersRoutes = Router()

const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'))

usersRoutes.post('/', (request: Request, response: Response) => {
  return CreateUserController().handle(request, response)
})

usersRoutes.patch('/avatar', (request: Request, response: Response) => {
  ensureAuthenticated
  uploadAvatar.single('avatar')
  return UpdateUserAvatarController().handle(request, response)
})

export default usersRoutes
