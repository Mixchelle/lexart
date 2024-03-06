"use strict";
exports.__esModule = true;
var config = {
    username: process.env.VERCEL_PG_USER || 'lexart.teste',
    password: process.env.VERCEL_PG_PASSWORD || 'lexart.teste',
    database: process.env.DB_NAME || "lexart_teste_db", // Corrigido o nome do banco de dados
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432, // Corrigida a porta para 5432
    dialect: 'postgres',
    dialectOptions: {
        timezone: 'Z'
    },
    logging: false
};
module.exports = config;
