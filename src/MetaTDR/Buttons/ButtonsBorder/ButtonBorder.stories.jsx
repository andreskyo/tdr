import React from 'react';

import { ButtonBorder } from "./ButtonBorder";


export default {
  title: 'Buttons/ButtonsBorder/ButtonBorder',
  component: ButtonBorder,
 
  argTypes: {
    
    
    size: {
      options:['large','medium','small'],
      control:{type:'radio'}
    },
    
 
  
    
  },
};


const Template = (args) => <ButtonBorder {...args} />;

export const ButtonBoorder = Template.bind({});


const alerrt=()=>{

  return alert('hola')
}


ButtonBoorder.args = {

  disabled:false,
  size: 'large',
  text:'Large Button',
  onClick:alerrt
  
  
};




