import React from 'react';

import { User } from "./User";


export default {
  title: 'DropDown/User/User',
  component: User,
 
  argTypes: {
    
     },
};


const Template = (args) => <User {...args} />;

export const Large = Template.bind({});





Large.args = {
  size:'Large',
  
};