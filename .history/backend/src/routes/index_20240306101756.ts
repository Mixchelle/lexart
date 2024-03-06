import { Router } from 'express';
import UserRouter from './UserRouter';
import ProductRouter from './ProductsRouter';

const router = Router();
 router.use('/user', UserRouter);
 router.use('/product', Pro)

export default router;
