"use strict";
exports.__esModule = true;
var config = {
    username: process.env.VERCEL_PG_USER || 'lexart.teste',
    password: process.env.VERCEL_PG_PASSWORD || 'lexart.teste',
    database: process.env.DB_NAME || "lexart.teste.db",
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3360,
    dialect: 'postgres',
    dialectOptions: {
        timezone: 'Z'
    },
    logging: false
};
module.exports = config;
