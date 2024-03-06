// services/productService.ts
import Product from '../db/models/Product';
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
class ProductService {
    async createProduct(data: any): Promise<any> {
      console.log('data', data)
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
          console.log('products 3', products)
          return products;
        } else if (data.details) {
          // Estrutura 2
          const { name, details, price } = data;
          const { brand, model, color } = details;

          
          const product = await Product.create({ name, brand, model, price, color });
          console.log('product 2', product)

          return product
        } else {
          // Estrutura 1
          const { name, brand, model, price, color } = data;
        const product = await Product.create({ name, brand, model, price, color });
        console.log('product 1', product)
        return product

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

  async updateProduct(id: number, data: any): Promise<any> {
    try {
      if (Array.isArray(data)) {
        // Estrutura 3
        const updatedProducts = [];
        for (const item of data) {
          const { name, brand, model, data: productData } = item;
          for (const product of productData) {
            const { price, color } = product;
            const updatedProduct = await Product.update({ name, brand, model, price, color }, { where: { id } });
            updatedProducts.push(updatedProduct);
          }
        }
        return updatedProducts;
      } else if (data.details) {
        // Estrutura 2
        const { name, details, price } = data;
        const { brand, model, color } = details;
        return await Product.update({ name, brand, model, price, color }, { where: { id } });
      } else {
        // Estrutura 1
        const { name, brand, model, price, color } = data;
        return await Product.update({ name, brand, model, price, color }, { where: { id } });
      }
    } catch (error) {
      throw new Error('Could not update product');
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
