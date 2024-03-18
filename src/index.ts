import cors from "cors";
import express, { Express, Request, Response } from "express";
import helmet from "helmet";
import swaggerUI from "swagger-ui-express";
import { swaggerSpec } from "../swagger";
import { errorHandler } from "./Middleware/error";
import { routes } from "./Routes";

//intializing the express app
export const app: Express = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (_req, res) => {
  res.send("<h1>Welcome to the Fillout Filter Submissions API</h1>");
});

app.use("/fillout", routes);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Error Handler

app.use(errorHandler);
