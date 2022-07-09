import * as dotenv from "dotenv";
dotenv.config();

export const configFile = {
  development: {
    username: "postgres",
    password: "ARules123@",
    database: "graphbook_dev",
    host: "localhost",
    port: 5432,
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  production: {
    host: process.env.host,
    username: process.env.username,
    password: process.env.password,
    database: process.env.database,
    logging: false,
    dialect: "postgres",
    port: process.env.port,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
