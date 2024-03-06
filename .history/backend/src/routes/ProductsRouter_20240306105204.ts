import { Router } from 'express';
import productController from '../controllers/ProductsController';
import {authenticateToken} from '../midlewares/tokenValidate';

const router = Router();

router.use(authenticateToken);
router.post('/', productController.create);
router.get('/', productController.getAll);
router.get('/:id', productController.getById);
router.put('/:id', productController.update);
router.delete('/:id', productController.delete);

export default router;
