import {Router} from "express";
import blogController from "../controller/ProductController";
import {auth} from "../middleware/jwt";

const blogRouter = Router();
blogRouter.use(auth)
blogRouter.get('', blogController.findAll);
blogRouter.post('', blogController.add);
blogRouter.put('/:id', blogController.update);
blogRouter.delete('/:id', blogController.delete);
export default blogRouter ;