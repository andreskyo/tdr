import React from 'react';

import { MenuOptions } from "./MenuOptions";


export default {
  title: 'DropDown/MenuOptions/MenuOptions',
  component: MenuOptions,
 
  argTypes: {
    
     },
};


const Template = (args) => <MenuOptions {...args} />;

export const Large = Template.bind({});





Large.args = {
  size:'Large'
};



