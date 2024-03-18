export const updateResponseObject = (responseObj: any, filteredData: any) => {
  return {
    ...responseObj,
    responses: filteredData,
    totalResponses: filteredData.length,
  };
};
