import { filterCondition } from "./filterCondition";
import {
  IFilterClauseType,
  IFormResponse,
  IQuestion,
  IResponse,
} from "./interfaces";

export const filterSubmissionResponses = (
  filter: IFilterClauseType[],
  responses: IFormResponse[]
) => {
  const filteredResponses =
    filter && filter.length
      ? responses?.filter((response: IFormResponse) => {
          let count: number = 0;
          response?.questions?.some((question: IQuestion) => {
            filter?.some((filterVal: IFilterClauseType) => {
              if (filterVal?.id === question?.id) {
                const condition = filterCondition(
                  filterVal?.condition,
                  filterVal?.value,
                  question?.value
                );

                if (condition) {
                  count += 1;
                }
                return true;
              }
            });
            return count === filter?.length;
          });
          return count === filter?.length;
        })
      : responses;

  return filteredResponses;
};
