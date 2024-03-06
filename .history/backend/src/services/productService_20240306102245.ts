// services/productService.ts
import Product from '../db/models/Product';

class ProductService {
  interface ProductData {
    name: string;
    brand: string;
    model: string;
    price: number;
    color: string;
  }
  
  interface ProductDetails {
    brand: string;
    model: string;
    color: string;
  }
  

    async createProduct(data: any): Promise<any> {
      try {
        if (Array.isArray(data)) {
          // Estrutura 3
          const products = [];
          for (const item of data) {
            const { name, brand, model, data: productData } = item;
            for (const product of productData) {
              const { price, color } = product;
              const newProduct = await Product.create({ name, brand, model, price, color });
              products.push(newProduct);
            }
          }
          return products;
        } else if (data.details) {
          // Estrutura 2
          const { name, details, price } = data;
          const { brand, model, color } = details;
          return await Product.create({ name, brand, model, price, color });
        } else {
          // Estrutura 1
          const { name, brand, model, price, color } = data;
          return await Product.create({ name, brand, model, price, color });
        }
      } catch (error) {
        throw new Error('Could not create product');
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
