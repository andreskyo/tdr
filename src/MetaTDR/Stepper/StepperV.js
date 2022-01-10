import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';


const StepButtonn = styled(StepButton)`
>button{margin:150px;}

`













export const StepperV = ({ disabled, ...props }) => {
    const [activeStep, setActiveStep] = React.useState(0);

  
    const handleStep = (step) => () => {
        
        setActiveStep(step);
        
    };

    // useEffect(() => {
    //    console.log(props.activeStep)
    //    if(props.activeStep && props.activeStep !== " "){
    //     setActiveStep(props.activeStep)
    //    }

    //  })

    return (
        <Box sx={{ ml: 20 }}>
            <Stepper nonLinear  activeStep={activeStep} orientation="vertical">
                {props.labelArray.map((label, index) => (

                    <Step key={label} >

                        <StepButtonn color="inherit" onClick={handleStep(index)} >
                            <StepContent>
                                <Box sx={{ ml: -4 , mt:0}} >
                                    <div>
                                <Typography> {label.labell} </Typography>

                                    <Typography>{label.description}</Typography>
                                    </div>
                                </Box>
                            </StepContent>
                            <StepContent>
                                <Box sx={{ mt: -4 , ml:-26 }}>
                                    {label.date}

                                    
                                </Box>
                            </StepContent>
                        </StepButtonn>

                    </Step>
                ))}
            </Stepper>

        </Box>
    );
}