import { Router } from 'express';
import UserRouter from './UserRouter';
import Product

const router = Router();
 router.use('/user', UserRouter);

export default router;
