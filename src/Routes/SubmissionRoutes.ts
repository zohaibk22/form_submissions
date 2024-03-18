import { Router } from "express";
import { submissionData } from "../Controllers/submissionData";

export const submissionRouter = Router();

submissionRouter.get("/:formId/filteredResponses", submissionData);
