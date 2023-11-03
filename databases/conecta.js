import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("restaurantes_noite", "root", "", {
  dialect: "mysql",
  host: "127.0.0.1",
  port: 3306,
});
