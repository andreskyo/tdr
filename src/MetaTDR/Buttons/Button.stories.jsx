import React from 'react';

import { Button } from "./Button";


export default {
  title: 'Buttons/Button',
  component: Button,
 
  argTypes: {
    
    color:{control:'color'},
    primary:{control:'boolean'},
    disabled:{control:'boolean'},
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
  text:'Large Button',
  primary:true,
  disabled:false
  
};
Medium.args = {
  size: 'Medium',
  text:'Medium Button',
  primary:true,
  disabled:false
  

};
Small.args = {
  size: 'Small',
  text:'Small Button',
  primary:true,
  disabled:false
  
};











