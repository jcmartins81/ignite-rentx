import CreateUserUseCase from "./CreateUserUseCase";
import {Request, Response} from "express";


class CreateUserController {

    constructor(private createUserUseCase : CreateUserUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {

        const {name, email, driver_license, password} = req.body
        await this.createUserUseCase.execute({
            name, email, driver_license, password
        })

        return res.status(201).send()

    }
}

export default CreateUserController