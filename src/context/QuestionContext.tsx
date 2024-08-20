import { createContext, useCallback, useState } from 'react';
import { getQuestionsData } from 'services/common';
import { AnswerData, QuestionData } from 'types/common';
import { getFromSessionStorage, saveToSessionStorage } from 'utils/common';

export interface QuestionContextProps {
  fetchQuestionsData: () => any;
  questionsData?: any;
  updateAnswers: (data: any) => void;
  answers?: any;
  resetAnswers: () => void;
}

export const QuestionContext = createContext<QuestionContextProps | null>(null);

export const QuestionContextProvider = (props: any) => {
  const [questionsData, setQuestionsData] = useState<QuestionData[]>([]);
  const [answers, setAnswers] = useState<AnswerData[]>(getFromSessionStorage());

  const fetchQuestionsData = useCallback(async () => {
    const newData = await getQuestionsData();

    setQuestionsData(newData);

    return newData;
  }, []);

  const updateAnswers = (data: AnswerData) => {
    const answerIndex = answers.findIndex((element) => element.id === data.id);

    if (answerIndex === -1) {
      setAnswers((oldData) => {
        saveToSessionStorage([...oldData, data]);
        return [...oldData, data];
      });
    } else {
      setAnswers((oldData) => {
        oldData[answerIndex].value = data.value;
        saveToSessionStorage([...oldData]);
        return [...oldData];
      });
    }
  };

  const resetAnswers = () => {
    setAnswers([]);
  };

  return (
    <QuestionContext.Provider
      value={{
        questionsData,
        fetchQuestionsData,
        answers,
        updateAnswers,
        resetAnswers,
      }}
    >
      {props.children}
    </QuestionContext.Provider>
  );
};
