const { Sequelize } = require("sequelize");

export const config = {
  database: "propio",
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "159753",
};

export const sequelize = new Sequelize(config);

export const initDataBase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
