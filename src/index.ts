import cors from "cors";
import express, { Express, Request, Response } from "express";
import helmet from "helmet";
import { errorHandler } from "./Middleware/error";
import { routes } from "./Routes";

//intializing the express app
export const app: Express = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use("/fillOut", routes);

// Error Handler

app.use(errorHandler);
