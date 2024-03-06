// models/product.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

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
