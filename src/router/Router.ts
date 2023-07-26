import {Router} from "express";
import productRouter from "./ProductRouter";
import {userRouter} from "./userRouter";
import blogRouter from "./blogRouter";

const router = Router();
router.use('/products', productRouter);
router.use('', userRouter);
router.use('/blog',blogRouter)
export default router;
