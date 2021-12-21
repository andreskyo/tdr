import React from 'react';

import { RadioButtons } from "./RadioButtons";


export default {
  title: 'DropDown/RadioButtons/RadioButtons',
  component: RadioButtons,
 
  argTypes: {
    
     },
};


const Template = (args) => <RadioButtons {...args} />;

export const RbuttonSelected = Template.bind({});






RbuttonSelected.args = {
 Selecteed:true,
 Disableed:false
  
};

