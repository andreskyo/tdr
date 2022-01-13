import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepButton from '@material-ui/core/StepButton'
import Box from '@material-ui/core/Box'




const Boxx=styled(Box)`


`






export const StepperrH = ({ disabled, ...props }) =>  {
  const [activeStep, setActiveStep] = React.useState(0);
  
const handleStep = (step) => () => {
    setActiveStep(step);
  };

  useEffect(() => {
        
    alert(`Step ${activeStep + 1}`)

  },[activeStep])

useEffect(() => {
   
   if(props.activeStep && props.activeStep !== ''){
    setActiveStep(props.activeStep)
   }

 })

  return (
    <Boxx sx={{ width: '100%' }}>
      <Stepper nonLinear disabled={false} activeStep={activeStep} alternativeLabel>
        {props.labelArray.map((label, index) => (
          <Step key={label} >
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label.labell}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      
    </Boxx>
  );
}

