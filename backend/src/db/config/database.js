"use strict";
exports.__esModule = true;
var config = {
    username: process.env.VERCEL_PG_USER || 'postgres',
    password: process.env.VERCEL_PG_PASSWORD || '123456',
    database: process.env.DB_NAME || "lexart_teste_db", 
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432, 
    dialect: 'postgres',
    dialectOptions: {
        timezone: 'Z'
    },
    logging: false
};
module.exports = config;
