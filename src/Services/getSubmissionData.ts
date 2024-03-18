import { Request } from "express";
import { submissionDataInstance } from "../API/submissionDataInstance";
import { filterSubmissionResponses } from "../Utils/filterSubmissionResponses";
import { updateResponseObject } from "../Utils/updateResponseObject";
type FilterClauseType = {
  id: string;
  condition: "equals" | "does_not_equal" | "greater_than" | "less_than";
  value: number | string;
};

export const getSubmissionData = async (req: Request) => {
  try {
    const { formId } = req.params;
    const { filters }: { filters: FilterClauseType } = req?.body || {};
    const submissionDataFromFillOut: any = await submissionDataInstance.get(
      `/v1/api/forms/${formId}/submissions`,
      { params: req.query }
    );
    const { data } = submissionDataFromFillOut || {};
    const filteredSubmissions = filterSubmissionResponses(
      filters,
      data?.responses
    );

    const updatedResponse = updateResponseObject(data, filteredSubmissions);

    return updatedResponse;
  } catch (error: any) {
    throw error;
  }
};
