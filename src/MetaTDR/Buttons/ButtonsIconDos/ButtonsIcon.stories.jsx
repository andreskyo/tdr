import React from 'react';

import { ButtonsIcon} from "./ButtonsIcon";


export default {
  title: 'Buttons/ButtonsIconDos/ButtonsIcon',
  component: ButtonsIcon,
 
  argTypes: {
  size: {
    options:['large','medium','small'],
    control:{type:'radio'}
  }
 
  
}  
  
};


const Template = (args) => <ButtonsIcon {...args} />;

export const ButtonIconn = Template.bind({});

const alertt=()=>{
  return alert('hola')
}


ButtonIconn.args = {
  size: 'large',
  text:'Large Button',
  onClick:alertt
};











