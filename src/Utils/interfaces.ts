interface IQuestion {
  id: string;
  name: string;
  type: string;
  value: string | number;
}

interface IResponses {
  submissionId: string;
  submissionTime: string;
  lastUpdatedAt: string;
  questions: [];
  calculations: [];
  urlParameters: [];
  quiz: {};
  documents: [];
}
