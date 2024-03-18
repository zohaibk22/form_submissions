import dotenv from "dotenv";
import { app } from "./src/index";

//App Varaibles
dotenv.config();

const port = process.env.PORT || 3000;

const initServer = async () => {
  app.listen(port, () => {
    console.log(`[Server]: Service is running  at http://localhost:${port}`);
  });
};

initServer();
