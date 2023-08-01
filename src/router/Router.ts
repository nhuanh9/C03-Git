import {Router} from "express";
import productRouter from "./ProductRouter";
import {userRouter} from "./UserRouter";
import categoryRouter from "./CategoryRouter";

const router = Router();
router.use('/products', productRouter);
router.use('/categories', categoryRouter);
router.use('', userRouter);
export default router;
