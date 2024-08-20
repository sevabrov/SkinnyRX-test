export interface QuestionData {
  id: number;
  type: string;
  question: string;
  isPrevAnswer?: string;
}
export interface AnswerData {
  id: number;
  value: string;
}
