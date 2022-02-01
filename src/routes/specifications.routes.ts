import {Router}from "express"
import CreateSpecificationController from "../modules/cars/useCases/specifications/createSpecification";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";

const specificationsRoutes = Router()

specificationsRoutes.use(ensureAuthenticated)

specificationsRoutes.post("/", (req, res) => {
   return CreateSpecificationController().handle(req, res)
})

export default specificationsRoutes