import React from 'react';

import { Button } from "./Button";


export default {
  title: 'Buttons/Button',
  component: Button,
 
  argTypes: {
    backgroundColor: { control: 'color' },
    color:{control:'color'},
    size: {
      options:['Large','Medium','Small'],
      control:{type:'select'}
    },
 
  
    
  },
};


const Template = (args) => <Button {...args} />;

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











