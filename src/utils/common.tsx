import { CustomInput } from 'components/CustomInput';
import { RadioList } from 'components/RadioList';
import { SelectData } from 'components/SelectData';
import { QuestionData, AnswerData } from 'types/common';

export const getComponent = (
  question: QuestionData,
  setAnswers: (data: AnswerData) => void,
  answers?: AnswerData[]
) => {
  const selectedAnswer = answers?.find((element) => element.id === question.id);

  switch (question.type) {
    case 'select-sex':
      return (
        <SelectData
          data={question}
          onChange={setAnswers}
          answer={selectedAnswer}
        />
      );
    case 'single-variant':
      return (
        <RadioList
          data={question}
          onChange={setAnswers}
          answer={selectedAnswer}
        />
      );
    case 'custom-input':
      return (
        <CustomInput
          data={question}
          onChange={setAnswers}
          answer={selectedAnswer}
        />
      );

    default:
      return <div>There is no component type</div>;
  }
};

export const storageValue = 'answers';

export const saveToSessionStorage = (data: AnswerData[]) => {
  sessionStorage.setItem(storageValue, JSON.stringify(data));
};
export const getFromSessionStorage = () => {
  const storageData = sessionStorage.getItem(storageValue);

  return storageData
    ? JSON.parse(sessionStorage.getItem(storageValue) || '')
    : [];
};

export const resetSessionStorage = () => {
  sessionStorage.removeItem(storageValue);
};
