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
  {labell:'Step 1',description:'Step 1 Description '},
  {labell:'Step 2',description:'Step 2 Description '},
  {labell:'Step 3',description:'Step 3 Description '},
  {labell:'Step 4',description:'Step 4 Description '}

]


Stepperrr.args = {
 labelArray:labelArray,
 activeStep:0
 


};