// services/productService.ts
import Product from '../';

class ProductService {
  async create(productData: any) {
    try {
      const product = await Product.create(productData);
      return product;
    } catch (error) {
       console.log(error);
    }
  }

  async getAll() {
    try {
      const products = await Product.findAll();
      return products;
    } catch (error) {
       console.log(error);
    }
  }

  async getById(id: number) {
    try {
      const product = await Product.findByPk(id);
      return product;
    } catch (error) {
       console.log(error);
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
       console.log(error);
    }
  }

  async delete(id: number) {
    try {
      const product = await Product.findByPk(id);
      if (!product) {
        throw new Error('Product not found');
      }
      await product.destroy();
      return true;
    } catch (error) {
     console.log(error);
    }
  }
}

export default new ProductService();
