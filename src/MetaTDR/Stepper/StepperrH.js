import React,{useState,useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import Box from '@material-ui/core/Box'





const QontoConnector = styled(StepConnector)(({ theme }) => ({
 
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: 'blue',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: 'blue',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 4,
    borderRadius: 4,
  },
}));





export const StepperrH = ({ disabled, ...props }) =>  {
  const [activeStep, setActiveStep] = React.useState(-1);
  
const handleStep = (step) => () => {
    setActiveStep(step);
  };

  useEffect(() => {
    if(activeStep>=0){    
    alert(`Step ${activeStep + 1}`)
  }
  },[activeStep])

useEffect(() => {
   
   if(props.activeStep && props.activeStep !== ''){
    setActiveStep(props.activeStep)
   }

 })

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper  activeStep={activeStep} alternativeLabel connector={<QontoConnector />} >
        {props.labelArray.map((label, index) => (
          <Step key={label} >
            <StepLabel onClick={handleStep(index)} >
              {label.labell}
              </StepLabel>
          </Step>
        ))}
      </Stepper>
      
    </Box>
  );
}

