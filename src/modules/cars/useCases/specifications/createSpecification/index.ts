import SpecificationsRepository from "../../../repositories/implementations/SpecificationsRepository";
import CreateSpecificationUseCase from "./CreateSpecificationUseCase";
import CreateSpecificationController from "./CreateSpecificationController";

const specificationRepository = new SpecificationsRepository()

const createSpecificationUseCase = new CreateSpecificationUseCase(specificationRepository)

const createSpecificationController = new CreateSpecificationController(CreateSpecificationController)

export {createSpecificationController}