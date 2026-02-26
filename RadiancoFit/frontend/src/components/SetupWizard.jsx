import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Box,
  TextField,
} from '@mui/material';

const steps = ['Welcome', 'Your Goals', 'Activities', 'Diet', 'Final Touches'];

function StepContent({ step, formData, setFormData }) {
  switch (step) {
    case 0:
      return (
        <Typography>
          Welcome to RadiancoFit! Let's get to know you a little better.
        </Typography>
      );
    case 1:
      return (
        <>
          <Typography variant="h6">What are your goals?</Typography>
          <TextField
            label="Target Weight (kg)"
            type="number"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Target Body Fat %"
            type="number"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Target Muscle Mass %"
            type="number"
            fullWidth
            margin="normal"
          />
        </>
      );
    case 2:
      return (
        <>
          <Typography variant="h6">What sports do you practice?</Typography>
          <TextField label="Sports" fullWidth margin="normal" />
        </>
      );
    case 3:
      return (
        <>
          <Typography variant="h6">Any dietary restrictions?</Typography>
          <TextField
            label="Dietary Restrictions"
            fullWidth
            multiline
            rows={4}
            margin="normal"
          />
        </>
      );
    case 4:
        return (
            <>
              <Typography variant="h6">Any other comments?</Typography>
              <TextField
                label="Additional Comments"
                fullWidth
                multiline
                rows={4}
                margin="normal"
              />
            </>
          );
    default:
      return <Typography>Unknown step</Typography>;
  }
}

export default function SetupWizard() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 800, margin: 'auto', mt: 4 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ mt: 3, mb: 2, p: 2, border: '1px solid #ddd', borderRadius: 1 }}>
        <StepContent step={activeStep} formData={formData} setFormData={setFormData} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Box sx={{ flex: '1 1 auto' }} />
        <Button onClick={handleNext}>
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </Box>
    </Box>
  );
}
