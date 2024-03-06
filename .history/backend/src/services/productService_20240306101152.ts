// services/productService.ts
import Product from '../models/product';

class ProductService {
  async create(productData: any) {
    try {
      const product = await Product.create(productData);
      return product;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAll() {
    try {
      const products = await Product.findAll();
      return products;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getById(id: number) {
    try {
      const product = await Product.findByPk(id);
      return product;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id: number, newData: any) {
    try {
      const product = await Product.findByPk(id);
      if (!product) {
        throw new Error('Product not found');
      }
      await product.update(newData);
      return product;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id: number): void {
    try {
      const product = await Product.findByPk(id);
      if (!product) {
        throw new Error('Product not found');
      }
      await product.destroy();
      return true;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new ProductService();
