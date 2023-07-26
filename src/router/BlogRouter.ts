import {Router} from "express";
import { BlogController } from "../controller/blogContrller";
import router from "./Router";

const BlogRouter = Router();
    BlogRouter.post('/add', BlogController.add)
export default BlogRouter