// models/product.js
import { DataTypes, Model } from 'sequelize';
import db from './';


const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  brand: DataTypes.STRING,
  model: DataTypes.STRING,
  price: DataTypes.FLOAT,
  color: DataTypes.STRING
});

module.exports = Product;


import { DataTypes, Model } from 'sequelize';
import db from './';

export interface UserAttributes {
  id?: number;
  username: string;
  email: string;
  password: string;
}

class User extends Model<UserAttributes> {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    underscored: true,
    timestamps: false,
    modelName: 'User',
    tableName: 'users',
  },
);

export default User;
