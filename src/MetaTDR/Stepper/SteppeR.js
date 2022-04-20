import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import Box from '@material-ui/core/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';


/*-------------------StepHorizontal--------------*/


const StepperHorizontal = styled(Stepper)`

.css-g5ymu1-MuiSvgIcon-root-MuiStepIcon-root.Mui-active {
  color: #124596;
}
.css-g5ymu1-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed{
  color: #124596;
} 
`
const QontoConnectorHorizontal = styled(StepConnector)(({ theme }) => ({
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
    borderTopWidth: 1,
    borderRadius: 1,
  },
}));

/*-----------------StepVertical-----------------------*/

const StepperVertical = styled(Stepper)`

.css-g5ymu1-MuiSvgIcon-root-MuiStepIcon-root.Mui-active {
  color: #124596;
}
.css-g5ymu1-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed{
  color: #124596;
} 

.css-8t49rw-MuiStepConnector-line{
    display: block;
    border-color: #bdbdbd;
    border-left-style: solid;
    border-left-width: 1px;
    min-height: 50px;
    margin-bottom:-8px;
    margin-top:0px;
    
}
 .css-14yr603-MuiStepContent-root{
  margin-top: -8px;
  
}


`
const QontoConnectorVertical = styled(StepConnector)(({ theme }) => ({
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
  
  
}));

export const SteppeR = ({ ...props }) => {

/*----------StepHorizontal----------------------*/
  const [activeStep, setActiveStep] = React.useState(-1);

  const handleStep = (step) => () => {
    if (props.onChange) {
      props.onChange(step)
  }
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
  { props.labelArray == '' ? alert("no hay datos") : '' }

/*-------------StepVertical--------------------------*/

const [activeStepp, setActiveStepp] = React.useState(0);

 const handleStepp = (step) => () => {
  if (props.onChange) {
    props.onChange(step)
}
    setActiveStepp(step);
    
  };





  useEffect(() => {

    if (props.activeStepp && props.activeStepp !== '') {
      setActiveStepp(props.activeStepp)
    }

  })
  { props.labelArray == '' ? alert("no hay datos") : '' }

return (

    <>
     {props.horizontal ?
     <StepperHorizontal
            
            orientation='horizontal'
            activeStep={activeStep}
            alternativeLabel
            connector={<QontoConnectorHorizontal/>}
          >
            {props.labelArray.map((step, index) => (
              <Step
                key={index}
              >
                <StepLabel
                  id="colorr"
                  onClick={handleStep(index)} >
                  {step.label}
                </StepLabel>
              </Step>
            ))}
          </StepperHorizontal>
   :

      <StepperVertical 
      connector={<QontoConnectorVertical />}
      activeStep={activeStepp} 
      orientation="vertical">
        {props.labelArray.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
             onClick={handleStepp(index)}
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
          
            </StepContent>
          </Step>
        ))}
      </StepperVertical>
      
    }
      
    </>

  );
}

