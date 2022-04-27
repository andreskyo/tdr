import React from 'react';
import { RadioButtons } from "./RadioButtons";
export default {
  title: 'MetaTDR/RadioButtons/RadioButtons',
  component: RadioButtons,
 
  argTypes: {
     },
};
const Template = (args) => <RadioButtons {...args} />;
export const RadioButton = Template.bind({});


RadioButton.args = {
 selected:false,
 disabled:false,
 value:"radio button",
 onChange:(a)=>{console.log(a)},
 
  
};


