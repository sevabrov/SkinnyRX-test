import Typography from '@mui/material/Typography';
import { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { FinalComponent } from './components';
import { getComponent, resetSessionStorage } from 'utils/common';
import { QuestionContext, QuestionContextProps } from 'context/QuestionContext';
import Navigation from './components/Navigation';

export default function MainPage() {
  const {
    questionsData,
    fetchQuestionsData,
    answers,
    updateAnswers,
    resetAnswers,
  } = useContext(QuestionContext) as QuestionContextProps;

  useEffect(() => {
    if (!questionsData.length) fetchQuestionsData();
  }, [questionsData, fetchQuestionsData]);

  const progresStepValue = 100 / questionsData.length;
  const [activeStep, setActiveStep] = useState<number>(0);
  const [progressValue, setProgressValue] = useState<number>(
    progresStepValue || 0
  );

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (questionsData.length - 1 !== activeStep) {
      setProgressValue((oldValue) => (oldValue += progresStepValue));
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setProgressValue((oldValue) => (oldValue -= progresStepValue));
  };

  const handleReset = () => {
    setActiveStep(0);
    setProgressValue(progresStepValue || 0);
    resetSessionStorage();
    resetAnswers();
  };

  return (
    <Box sx={{ width: '100%', maxWidth: '400px', m: '0 auto' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          width: '100%',
        }}
      >
        <LinearProgress
          sx={{ flex: 1 }}
          variant='determinate'
          value={progressValue}
        />
        <Typography sx={{ mt: 2, mb: 1 }}>
          {activeStep !== questionsData.length &&
            `${activeStep + 1}/${questionsData.length}`}
        </Typography>
      </Box>
      {activeStep === questionsData.length ? (
        <FinalComponent handleReset={handleReset} />
      ) : (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            {questionsData[activeStep].question}
          </Typography>
          {getComponent(questionsData[activeStep], updateAnswers, answers)}
          <Navigation
            activeStep={activeStep}
            handleBack={handleBack}
            handleNext={handleNext}
            totalQuestions={questionsData.length}
          />
        </>
      )}
    </Box>
  );
}
