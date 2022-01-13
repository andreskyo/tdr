import React from 'react';

import {StepperrH} from "./StepperrH";


export default {
  title: 'MetaTDR/Stepper/StepperrH',
  component: StepperrH,
 
  argTypes: {
    
     },
};


const Template = (args) => <StepperrH {...args} />;

export const Stepperrr = Template.bind({});

const labelArray=[
{labell:'Step 1'},
{labell:'Step 2'}, 
{labell:'Step 3'},
{labell:'Step 4'},
{labell:'Step 5'},
{labell:'Step 6'},
]


Stepperrr.args = {
 labelArray:labelArray,
 activeStep:0
 


};