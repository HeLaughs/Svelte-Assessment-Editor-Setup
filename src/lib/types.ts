export type Question = {
    id: number;
    text: string;
    options: any[];
    score: number;
    media: string | null;
  }
  
  export interface Quiz {
    title: string;
    questions: Question[];
    targetScore: number;
    submissionDate: string;
  }