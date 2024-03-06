import { Options } from 'sequelize';

const config: Options = {
  username: process.env.VERCEL_PG_USER || 'lexart_teste',
  password: process.env.VERCEL_PG_PASSWORD || 'lexart_teste',
  database: process.env.DB_NAME || "lexart_teste_db", 
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432, 
  dialect: 'postgres',
  dialectOptions: {
      timezone: 'Z'
  },
  logging: false
}

module.exports = config;