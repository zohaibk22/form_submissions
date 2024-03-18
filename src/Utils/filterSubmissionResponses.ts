import { filterCondition } from "./filterCondition";

export const filterSubmissionResponses = (filter: any, responses: any) => {
  const filteredResponses =
    filter && filter.length
      ? responses?.filter((response: any) => {
          let count: number = 0;
          response?.questions?.forEach((question: any) => {
            filter?.forEach((filterVal: any) => {
              if (filterVal?.id === question?.id) {
                const condition = filterCondition(
                  filterVal?.condition,
                  filterVal?.value,
                  question?.value
                );

                if (condition) {
                  count += 1;
                }
              }
            });
          });
          return count === filter?.length;
        })
      : responses;

  return filteredResponses;
};
