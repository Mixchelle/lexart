"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    username: process.env.VERCEL_PG_USER || 'lexart.teste',
    password: process.env.VERCEL_PG_PASSWORD || 'lexart.teste',
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
//# sourceMappingURL=database.js.map