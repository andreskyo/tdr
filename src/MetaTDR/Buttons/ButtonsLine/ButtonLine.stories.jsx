import React from 'react';

import { ButtonLine } from "./ButtonLine";


export default {
  title: 'Buttons/ButtonsLine/Button',
  component: ButtonLine,
 
  argTypes: {
  
    
    size: {
      options:['large','medium','small'],
      control:{type:'radio'}
    },
    
    
 
  
    
  },
};


const Template = (args) => <ButtonLine {...args} />;

export const ButtonLinee = Template.bind({});

const alertt=()=>{
  return alert('hola mundo')
  }



ButtonLinee.args = {
  size: 'large',
  text:'Large Button',
  disabled:true,
  onClick:alertt
  
};




