import { Request } from "express";
import { submissionDataInstance } from "../API/submissionDataInstance";
import { filterSubmissionResponses } from "../Utils/filterSubmissionResponses";
import { IFilterClauseType, TFormId } from "../Utils/interfaces";
import { updateResponseObject } from "../Utils/updateResponseObject";

export const getSubmissionData = async (req: Request) => {
  try {
    const { formId } = req?.params;
    const { filters }: { filters: IFilterClauseType } = req?.body || {};
    const submissionDataFromFillOut: any = await submissionDataInstance.get(
      `/v1/api/forms/${formId}/submissions`,
      { params: req?.query }
    );
    const { data }: { data: any } = submissionDataFromFillOut || {};
    const filteredSubmissions: any = filterSubmissionResponses(
      filters,
      data?.responses
    );

    const updatedResponse: any = updateResponseObject(
      data,
      filteredSubmissions
    );

    return updatedResponse;
  } catch (error: unknown) {
    throw error;
  }
};
