const express = require('express');
const router = express.Router();
import productController from '../controllers/ProductsController';
const validateToken = from '../midlewares/tokenValidate';

router.use(validateToken);
router.post('/', productController.create);
router.get('/', productController.getAll);
router.get('/:id', productController.getById);
router.put('/:id', productController.update);
router.delete('/:id', productController.delete);

export default router;
