import { Sequelize } from "sequelize";

const sequelize = new Sequelize("node_food2", "root", "1234", {
  host: "localhost",
  port: "3307",
  dialect: "mysql",
});
export default sequelize;
// npx sequelize-auto -h localhost -d node_food2 -u root -x 1234 -p 3307 --dialect mysql -o src/models -l esm  tạo model sequelize-auto
