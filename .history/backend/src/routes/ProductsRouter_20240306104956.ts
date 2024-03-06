import express from 'express';
import productController from '../controllers/productController';
import { validateToken } from '../middlewares/tokenValidate';

const router = express.Router();

router.use(validateToken);
router.post('/', productController.create);
router.get('/', productController.getAll);
router.get('/:id', productController.getById);
router.put('/:id', productController.update);
router.delete('/:id', productController.delete);

export default router;
