import React from 'react';

import { MenuInput } from "./MenuInput";


export default {
  title: 'DropDown/MenuInput/MenuInput',
  component: MenuInput,
 
  argTypes: {
    
     },
};


const Template = (args) => <MenuInput {...args} />;

export const Large = Template.bind({});





Large.args = {
  size:'Large',
  
};