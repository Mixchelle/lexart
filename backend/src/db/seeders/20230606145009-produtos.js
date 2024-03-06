'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [
      {
        name: 'Produto 1',
        brand: 'Marca 1',
        model: 'Modelo 1',
        price: 10.99,
        color: 'Vermelho',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Produto 2',
        brand: 'Marca 2',
        model: 'Modelo 2',
        price: 20.99,
        color: 'Verde',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Produto 3',
        brand: 'Marca 3',
        model: 'Modelo 3',
        price: 30.99,
        color: 'Azul',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Produto 4',
        brand: 'Marca 4',
        model: 'Modelo 4',
        price: 40.99,
        color: 'Amarelo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Produto 5',
        brand: 'Marca 5',
        model: 'Modelo 5',
        price: 50.99,
        color: 'Roxo',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
