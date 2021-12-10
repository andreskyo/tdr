import React from 'react';

import { Icon } from "./Icon";


export default {
  title: 'Buttons/Icon',
  component: Icon,
 
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      options:['Large','Medium','Small'],
      control:{type:'select'}
    },
    primary:{control:'boolean'}
  
    
  },
};


const Template = (args) => <Icon {...args} />;

export const Large = Template.bind({});
export const Medium = Template.bind({});
export const Small = Template.bind({});




Large.args = {
  size: 'Large',
  primary:true
};
Medium.args = {
  size: 'Medium',
  primary:true
};
Small.args = {
  size: 'Small',
  primary:true
};














