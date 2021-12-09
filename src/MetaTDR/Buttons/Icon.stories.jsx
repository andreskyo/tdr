import React from 'react';

import { Icon } from "./Icon";


export default {
  title: 'Buttons/Icon',
  component: Icon,
 
  argTypes: {
    backgroundColor: { control: 'color' },
    color:{control:'color'},
    size: {
      options:['Large','Medium','Small'],
      control:{type:'select'}
    },
  
    
  },
};


const Template = (args) => <Icon {...args} />;

export const Large = Template.bind({});
export const Medium = Template.bind({});
export const Small = Template.bind({});




Large.args = {
  size: 'Large',
  text:'Large Button'
};
Medium.args = {
  size: 'Medium',
  text:'Medium Button'
};
Small.args = {
  size: 'Small',
  text:'Small Button'
};














