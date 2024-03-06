"use strict";
exports.__esModule = true;
var config = {
    username: process.env.VERCEL_PG_USER || 'root',
    password: process.env.VERCEL_PG_PASSWORD || '123456',
    database: "Produtos-phone",
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    dialect: 'postgres',
    dialectOptions: {
        timezone: 'Z'
    },
    logging: false
};
module.exports = config;
