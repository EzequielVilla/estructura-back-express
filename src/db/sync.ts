import { sequelize } from "./config";
import "../models";

sequelize
  // .sync({ force: true })
  .sync({ alter: true })
  .then(() => {
    console.log("Sync OK");
  })
  .catch((error) => {
    console.error("Error:", error);
  });
