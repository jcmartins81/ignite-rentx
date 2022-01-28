import { Router } from 'express'
import authenticateUserController from '../modules/accounts/useCases/authenticateUser'


const authenticateRoutes = Router()

authenticateRoutes.post('/sessions', (req, res) =>
  authenticateUserController().handle(req, res)
)

export default authenticateRoutes
