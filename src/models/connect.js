import { Sequelize } from "sequelize";
import dbConfig from "../config/db.config.js";

let { dbHost, dbPort, dbUser, dbPass, dbDialect, dbName } = dbConfig;

const sequelize = new Sequelize(dbName, dbUser, "1234", {
  host: dbHost,
  port: dbPort,
  dialect: dbDialect,
});
export default sequelize;
// npx sequelize-auto -h localhost -d node_food2 -u root -x 1234 -p 3307 --dialect mysql -o src/models -l esm  tạo model sequelize-auto
