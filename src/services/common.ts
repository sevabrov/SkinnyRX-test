import { QuestionData } from 'types/common';

export const getQuestionsData = (): QuestionData[] => {
  const mockData = [
    {
      id: 1,
      type: 'select-sex',
      question: 'What is your gender assigned at birth?',
    },
    {
      id: 2,
      question: 'Are you currently pregnant',
      type: 'single-variant',
      isPrevAnswer: 'female',
    },
    {
      id: 3,
      question: 'Do you have any known allergies?',
      type: 'custom-input',
    },
  ];

  return mockData;
};
