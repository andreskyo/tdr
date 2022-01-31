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
    borderTopWidth: 2,
    borderRadius: 4,
    width:'254px',
  
    margin:'0px -8px'
  },
}));

const Boxx=styled(Box)`
@media (max-width:320px)  {
  >div>div>span>span>svg>path{
    color:#124596;
} 
  >div>div>span>span>svg>circle:selected{
    color:#124596;
  }
  .css-g5ymu1-MuiSvgIcon-root-MuiStepIcon-root.Mui-active {
    color: #124596;
  }
  
}
@media (min-width:321px)  {
  >div>div>span>span>svg>path{
    color:#124596;
} 
  >div>div>span>span>svg>circle:selected{
    color:#124596;
  }
  .css-g5ymu1-MuiSvgIcon-root-MuiStepIcon-root.Mui-active {
    color: #124596;
  }
}

@media (min-width:415px max-width:834px)  {
  
  >div>div>span{
    
    width:120px;
    margin: 0px 0px;
    
  }
  div>div>.css-1g47i0x-MuiStepConnector-root .MuiStepConnector-line{
    width:112px;
}

>div>div>span>span>svg>path{
  color:#124596;
  
}

>div>div>span>span>svg>circle:selected{
  color:#124596;
}
.css-g5ymu1-MuiSvgIcon-root-MuiStepIcon-root.Mui-active {
  color: #124596;
}
`



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
    <Boxx sx={{ width: '100%' }}>
      <Stepper  activeStep={activeStep} alternativeLabel connector={<QontoConnector />} >
        {props.labelArray.map((label, index) => (
          <Step key={label} >
            <StepLabel id="colorr" onClick={handleStep(index)} >
              {label.labell}
              </StepLabel>
          </Step>
        ))}
      </Stepper>
      
    </Boxx>
  );
}

