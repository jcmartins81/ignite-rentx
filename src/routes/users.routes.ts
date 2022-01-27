import {Router, Request, Response} from "express";
import CreateUserController from "../modules/accounts/useCases/createUser";

const usersRoutes = Router()

usersRoutes.post("/", (req: Request, res: Response) => {
    return CreateUserController().handle(req, res)
})

export default usersRoutes