import dotenv from "dotenv";
dotenv.config();

const dbConfig = {
  dbHost: process.env.DB_HOST,
  dbUser: process.env.DB_USERNAME,
  dbPort: process.env.DB_PORT,
  dbDialect: process.env.DB_DIALECT,
  dbName: process.env.DB_NAME,
};

console.log(dbConfig);
export default dbConfig;
