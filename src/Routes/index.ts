import express from "express";
import { submissionRouter } from "./SubmissionRoutes";

export const routes = express.Router();

routes.use(submissionRouter);
