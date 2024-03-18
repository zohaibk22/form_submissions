import { NextFunction, Request, Response } from "express";
import { getSubmissionData } from "../Services/getSubmissionData";
require("dotenv").config();
export const submissionData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const submissionData: Promise<void> = await getSubmissionData(req);
    res.status(200).json(submissionData);
  } catch (error: unknown) {
    next(error);
  }
};
