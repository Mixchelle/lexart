const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const validateToken = require('../midlewares/')

router.post('/', productController.create);
router.get('/', productController.getAll);
router.get('/:id', productController.getById);
router.put('/:id', productController.update);
router.delete('/:id', productController.delete);

export default router;
