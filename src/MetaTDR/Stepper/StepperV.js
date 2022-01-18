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
        borderRadius: 1,
    },
}));

// const StepButtonn = styled(StepButton)`
// >button{margin:150px;}

// `

const StepContentt = styled(StepContent)`
&&{
    border-left:none;
}

`


export const StepperV = ({ disabled, ...props }) => {
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


        <Box sx={{ width: '100%' , ml:20}}>
            <Stepper activeStep={activeStep} orientation='vertical' connector={<QontoConnector />} >
                {props.labelArray.map((label, index) => (
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
                                <Box sx={{ mt: -4 , ml:-28 }}>
                                    {label.date}

                                    
                                </Box>
                            </StepContent>


                        </StepLabel>
                    </Step>
                ))}
            </Stepper>

        </Box>
        // <Box sx={{ ml: 20 }}>
        //     <Stepper nonLinear  activeStep={activeStep}  connector={<QontoConnector/>}>
        //         {props.labelArray.map((label, index) => (

        //             <Step key={label} >

        //                 <StepLabel color="inherit" onClick={handleStep(index)} onClickCheck={()=>props.onClick()}>
        //                     <StepContent>
        //                         <Box sx={{ ml: -4 , mt:0}} >
        //                             <div>
        //                         <Typography> {label.labell} </Typography>

        //                             <Typography>{label.description}</Typography>
        //                             </div>
        //                         </Box>
        //                     </StepContent>
        //                     <StepContent>
        //                         <Box sx={{ mt: -4 , ml:-28 }}>
        //                             {label.date}


        //                         </Box>
        //                     </StepContent>
        //                 </StepLabel>

        //             </Step>
        //         ))}
        //     </Stepper>

        // </Box>
    );
}