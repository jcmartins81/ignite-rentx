import SpecificationsRepository from "../../../repositories/implementations/SpecificationsRepository";
import CreateSpecificationUseCase from "./CreateSpecificationUseCase";
import CreateSpecificationController from "./CreateSpecificationController";

export default (): CreateSpecificationController => {
    const specificationRepository = new SpecificationsRepository()
    const createSpecificationUseCase = new CreateSpecificationUseCase(specificationRepository)
    return new CreateSpecificationController(createSpecificationUseCase)
}





