import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import Router from "./routes";
import Auth from "./routes/auth";
import { initDataBase } from "./db/config";
const app = express();
app.use(cors());
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/v1", Router);
app.use("/v1/auth", Auth);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
initDataBase();
export { app }; // for testing
