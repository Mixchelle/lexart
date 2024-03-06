import { DataTypes, Model } from 'sequelize';
import db from './';

export interface ProductAttributes {
  id?: number;
  name: string;
  price: number;
  description: string;
}

class Product extends Model<ProductAttributes> {
  public id!: number;
  public name!: string;
  public price!: number;
  public description!: string;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    underscored: true,
    timestamps: false,
    modelName: 'Product',
    tableName: 'products',
  },
);

export default Product;