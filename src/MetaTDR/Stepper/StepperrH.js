import React,{useState} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepButton from '@material-ui/core/StepButton'
import Box from '@material-ui/core/Box'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const Boxx=styled(Box)`
position: static;
width: 760px;
height: 376px;
left: 0px;
top: 434px;
border: 1px dashed #7B61FF;
box-sizing: border-box;
border-radius: 5px;
flex: none;
order: 6;
flex-grow: 0;
margin: 16px 0px;

`






export const StepperrH = ({ disabled, ...props }) =>  {
  const [activeStep, setActiveStep] = React.useState(0);
  
const handleStep = (step) => () => {
    setActiveStep(step);
  };

  

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

