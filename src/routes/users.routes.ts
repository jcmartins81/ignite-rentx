import {Router} from "express";
import CreateUserController from "../modules/accounts/useCases/createUser/CreateUserController";



const usersRoutes = Router()

usersRoutes.post("/", (req: Request, res: Response) => {
    return CreateUserController.handle(req, res)
})

export default usersRoutes