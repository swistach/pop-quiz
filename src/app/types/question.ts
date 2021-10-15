export type QuestionOption = {
  value: string;
}

export interface Question {
  idx: number;
  picture: {
    url: string;
    description: string;
  };
  answer: string;
  options: QuestionOption[];
}
