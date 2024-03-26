import { IFormResponse } from "./interfaces";

export const updateResponseObject = (
  responseObj: IFormResponse[],
  filteredData: IFormResponse[]
) => {
  return {
    ...responseObj,
    responses: filteredData,
    totalResponses: filteredData.length,
  };
};
