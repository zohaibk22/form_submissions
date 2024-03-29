export interface IQuestion {
  id: string;
  name: string;
  type: string;
  value: string | number;
}

export interface IFormResponse {
  submissionId: string;
  submissionTime: string;
  lastUpdatedAt: string;
  questions: IQuestion[];
  calculations: [];
  urlParameters: [];
  quiz: {};
  documents: [];
}

export interface IFilterClauseType {
  id: string;
  condition: "equals" | "does_not_equal" | "greater_than" | "less_than";
  value: number | string;
}

export type TFormId = string;

export interface IResponse {
  responses: IFormResponse[];
}
