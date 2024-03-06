import { Router } from 'express';
import UserRouter from './UserRouter';
import Pro

const router = Router();
 router.use('/user', UserRouter);

export default router;
