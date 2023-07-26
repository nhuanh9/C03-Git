import {Router} from "express";
import blogController from "../controller/blogController";


const blogRouter= Router();
blogRouter.get('/:id',blogController.findById)
blogRouter.put('/:id',blogController.update)
export default blogRouter;