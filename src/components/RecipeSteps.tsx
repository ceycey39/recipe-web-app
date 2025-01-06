import { Paper, Stepper, Step, StepLabel, StepContent, Typography, Box } from '@mui/material';
import { Step as RecipeStep } from '../types/recipe';

interface RecipeStepsProps {
  steps: RecipeStep[];
}

const RecipeSteps = ({ steps }: RecipeStepsProps) => {
  return (
    <Paper elevation={2} sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Hazırlanışı
      </Typography>
      <Stepper orientation="vertical">
        {steps.map((step) => (
          <Step key={step.order} active={true}>
            <StepLabel>
              <Typography variant="subtitle1">
                {step.order}. Adım
              </Typography>
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              {step.image && (
                <Box
                  component="img"
                  sx={{
                    width: '100%',
                    maxWidth: 400,
                    height: 'auto',
                    borderRadius: 1,
                    my: 2
                  }}
                  src={step.image}
                  alt={`Adım ${step.order}`}
                />
              )}
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Paper>
  );
};

export default RecipeSteps;
