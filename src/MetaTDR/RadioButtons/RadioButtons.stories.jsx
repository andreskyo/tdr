import React from 'react';
import { RadioButtons } from "./RadioButtons";
export default {
  title: 'MetaTDR/RadioButtons/RadioButtons',
  component: RadioButtons,
 
  argTypes: {
     },
};
const Template = (args) => <RadioButtons {...args} />;
export const RbuttonSelected = Template.bind({});


RbuttonSelected.args = {
 
 disableed:false,
 selected:false
  
};


