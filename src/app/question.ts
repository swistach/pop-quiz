interface Answer {
  value: string;
  correct?: boolean;
}

export interface Question {
  idx: number;
  picture: {
    url: string;
    description: string;
  };
  options: Answer[]
}
