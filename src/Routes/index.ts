import express from "express";
import { submissionRouter } from "./SubmissionRoutes";

export const routes = express.Router();

/*
 * @swagger
 * /api/resource:
 * get:
 * summary: Get a resource
 * description: Get a specific resource by ID.
 * parameters:
 * — in: path
 * name: id
 * required: true
 * description: ID of the resource to retrieve.
 * schema:
 * type: string
 * responses:
 * 200:
 * description: Successful response
 */
routes.use(submissionRouter);
