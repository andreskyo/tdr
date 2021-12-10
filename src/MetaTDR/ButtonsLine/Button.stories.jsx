import React from 'react';

import { Button } from "./Button";


export default {
  title: 'ButtonsLine/Button',
  component: Button,
 
  argTypes: {
  
    color:{control:'color'},
    size: {
      options:['Large','Medium','Small'],
      control:{type:'select'}
    },
    line:{control:'boolean'}
 
  
    
  },
};


const Template = (args) => <Button {...args} />;

export const Large = Template.bind({});
export const Medium = Template.bind({});
export const Small = Template.bind({});




Large.args = {
  size: 'Large',
  text:'Large Button',
  line:true
};
Medium.args = {
  size: 'Medium',
  text:'Medium Button',
  line:true
};
Small.args = {
  size: 'Small',
  text:'Small Button',
  line:true
};



