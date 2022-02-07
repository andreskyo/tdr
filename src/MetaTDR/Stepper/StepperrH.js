import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import Box from '@material-ui/core/Box'





const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 12px)',
    right: 'calc(50% + 12px)',
    
 },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#124596',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#124596',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const Boxx = styled(Box)`


>div>div>span>span>svg>circle:selected{
  color:#124596;
}
.css-g5ymu1-MuiSvgIcon-root-MuiStepIcon-root.Mui-active {
  color: #124596;
}
>div>div>span>span>svg>path{
  color:#124596;
} 

`


export const StepperrH = ({ disabled,labelArray, ...props }) => {
  const [activeStep, setActiveStep] = React.useState(-1);

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  useEffect(() => {

    if (activeStep >= 0) {
      alert(`Step ${activeStep + 1}`)
    }
  }, [activeStep])

  useEffect(() => {

    if (props.activeStep && props.activeStep !== '') {
      setActiveStep(props.activeStep)
    }

  })
{labelArray=='' ? alert("no hay datos") : ''}

  return (
    
    <Boxx sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} alternativeLabel connector={<QontoConnector />} >
        {labelArray.map((label, index) => (
          <Step key={index} >
            <StepLabel id="colorr" onClick={handleStep(index)} >
              {label.labell}
            </StepLabel>
          </Step>
        ))}
      </Stepper>

    </Boxx>
  );
}

