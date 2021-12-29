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

// const funcion = (e) =>{
//     alert("dato del radio" + e)
// };
RbuttonSelected.args = {
 
 disableed:false,
 
//  onChange:funcion
  
};


