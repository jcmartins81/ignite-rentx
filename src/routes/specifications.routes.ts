import {Router}from "express"
import CreateSpecificationUseCase from "../modules/cars/useCases/specifications/createSpecification/CreateSpecificationUseCase";
import SpecificationsRepository from "../modules/cars/repositories/implementations/SpecificationsRepository";
import {createSpecificationController} from "../modules/cars/useCases/specifications/createSpecification";

const specificationsRoutes = Router()

specificationsRoutes.post("/", (req, res) => {
   return createSpecificationController.handle(req, res)
})

export default specificationsRoutes