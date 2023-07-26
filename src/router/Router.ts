import {Router} from "express";
import productRouter from "./ProductRouter";
import {userRouter} from "./userRouter";
import BlogRouter from "./BlogRouter";

const router = Router();
router.use('/products', productRouter);
router.use('', userRouter);
router.use('/blog',BlogRouter)
export default router;
