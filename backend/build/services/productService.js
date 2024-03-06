"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// services/productService.ts
const Product_1 = __importDefault(require("../db/models/Product"));
class ProductService {
    async createProduct(data) {
        console.log('data', data);
        try {
            if (Array.isArray(data)) {
                // Estrutura 3
                const products = [];
                for (const item of data) {
                    const { name, brand, model, data: productData } = item;
                    for (const product of productData) {
                        const { price, color } = product;
                        const newProduct = await Product_1.default.create({ name, brand, model, price, color });
                        products.push(newProduct);
                    }
                }
                console.log('products 3', products);
                return products;
            }
            else if (data.details) {
                // Estrutura 2
                const { name, details, price } = data;
                const { brand, model, color } = details;
                const product = await Product_1.default.create({ name, brand, model, price, color });
                console.log('product 2', product);
                return product;
            }
            else {
                // Estrutura 1
                const { name, brand, model, price, color } = data;
                const product = await Product_1.default.create({ name, brand, model, price, color });
                console.log('product 1', product);
                return product;
            }
        }
        catch (error) {
            throw new Error('Could not create product');
        }
    }
    async getAll() {
        try {
            const products = await Product_1.default.findAll();
            return products;
        }
        catch (error) {
            console.log(error);
        }
    }
    async getById(id) {
        try {
            const product = await Product_1.default.findByPk(id);
            return product;
        }
        catch (error) {
            console.log(error);
        }
    }
    async updateProduct(id, data) {
        try {
            if (Array.isArray(data)) {
                // Estrutura 3
                const updatedProducts = [];
                for (const item of data) {
                    const { name, brand, model, data: productData } = item;
                    for (const product of productData) {
                        const { price, color } = product;
                        const updatedProduct = await Product_1.default.update({ name, brand, model, price, color }, { where: { id } });
                        updatedProducts.push(updatedProduct);
                    }
                }
                return updatedProducts;
            }
            else if (data.details) {
                // Estrutura 2
                const { name, details, price } = data;
                const { brand, model, color } = details;
                return await Product_1.default.update({ name, brand, model, price, color }, { where: { id } });
            }
            else {
                // Estrutura 1
                const { name, brand, model, price, color } = data;
                return await Product_1.default.update({ name, brand, model, price, color }, { where: { id } });
            }
        }
        catch (error) {
            throw new Error('Could not update product');
        }
    }
    async delete(id) {
        try {
            const product = await Product_1.default.findByPk(id);
            if (!product) {
                throw new Error('Product not found');
            }
            await product.destroy();
            return true;
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.default = new ProductService();
//# sourceMappingURL=productService.js.map