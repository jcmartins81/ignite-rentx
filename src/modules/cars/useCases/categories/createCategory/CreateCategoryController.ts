import {Request, Response} from "express";
import CreateCategoryUseCase from "./CreateCategoryUseCase";



class CreateCategoryController {

    constructor(private createCategoryUSeCase: CreateCategoryUseCase) {}

    async handle(req: Request, res: Response): Promise<Response>  {
        const {name, description} = req.body

        await this.createCategoryUSeCase.execute({name, description})

        return res.status(201).send()
    }
}

export default CreateCategoryController