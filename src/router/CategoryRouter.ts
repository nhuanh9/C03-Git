import {Router} from "express";
import categoryController from "../controller/CategoryController";

const categoryRouter = Router();
categoryRouter.get('', categoryController.findAll);
categoryRouter.post('', categoryController.add);
categoryRouter.put('/:id', categoryController.update);
categoryRouter.delete('/:id', categoryController.delete);
export default categoryRouter;
