import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import StepLabel from '@mui/material/StepLabel';


const QontoConnector = styled(StepConnector)(({ theme }) => ({

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
        borderTopWidth: 4,
        borderRadius: 1,

    },
}));



const StepContentt = styled(StepContent)`
&&{
    border-left:none;
}

`
const Boxx = styled(Box)`
>div>div>span>span>svg>path{
  color:#124596;
  
}
>div>div>span{
    
    min-height: 50px;
    margin: -7px 0px;
  }
  
      
    .css-g5ymu1-MuiSvgIcon-root-MuiStepIcon-root.Mui-active {
        color: #124596;
        
      }
  
`

export const StepperV = ({ disabled,labelArray, ...props }) => {
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


    return (


        <Boxx sx={{ width: '100%', ml: 20 }}>
            <Stepper activeStep={activeStep} orientation='vertical' connector={<QontoConnector />} >
                {labelArray.map((label, index) => (
                    <Step key={label} >
                        <StepLabel onClick={handleStep(index)} >
                            <StepContentt>
                                <Box sx={{ ml: -4, mt: 0 }} >
                                    <div>
                                        <Typography> {label.labell} </Typography>

                                        <Typography>{label.description}</Typography>
                                    </div>
                                </Box>
                            </StepContentt>
                            <StepContent>
                                <Box sx={{ mt: -4, ml: -28 }}>
                                    {label.date}


                                </Box>
                            </StepContent>


                        </StepLabel>
                    </Step>
                ))}
            </Stepper>

        </Boxx>
     
    );
}