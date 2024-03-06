import { Router } from 'express';
import UserRouter from './UserRouter';
import ProductRouter from ''

const router = Router();
 router.use('/user', UserRouter);

export default router;
