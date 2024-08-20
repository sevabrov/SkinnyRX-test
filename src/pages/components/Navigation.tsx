import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

type NavigationProps = {
  activeStep: number;
  handleBack: () => void;
  handleNext: () => void;
  totalQuestions: number;
};

export default function Navigation({
  activeStep,
  handleBack,
  handleNext,
  totalQuestions,
}: NavigationProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
      <Button
        color='inherit'
        disabled={activeStep === 0}
        onClick={handleBack}
        sx={{ mr: 1 }}
      >
        Back
      </Button>
      <Box sx={{ flex: '1 1 auto' }} />
      <Button onClick={handleNext}>
        {activeStep === totalQuestions - 1 ? 'Finish' : 'Next'}
      </Button>
    </Box>
  );
}
