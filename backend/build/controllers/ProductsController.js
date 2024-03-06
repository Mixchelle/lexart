"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productService_1 = __importDefault(require("../services/productService"));
class ProductController {
    async create(req, res) {
        try {
            const product = await productService_1.default.createProduct(req.body);
            res.json(product);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async getAll(req, res) {
        try {
            const products = await productService_1.default.getAll();
            console.log(products);
            res.json(products);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async getById(req, res) {
        try {
            const product = await productService_1.default.getById(Number(req.params.id));
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.json(product);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async update(req, res) {
        try {
            const product = await productService_1.default.updateProduct(Number(req.params.id), req.body);
            res.json(product);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async delete(req, res) {
        try {
            await productService_1.default.delete(Number(req.params.id));
            res.sendStatus(204);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
exports.default = new ProductController();
//# sourceMappingURL=ProductsController.js.map