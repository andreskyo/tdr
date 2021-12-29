import React from 'react';

import { ButtonIcon } from "./ButtonIcon";


export default {
  title: 'Buttons/ButtonsIcon/ButtonIcon',
  component: ButtonIcon,
 
  argTypes: {
    size: {
      options:['large','medium','small'],
      control:{type:'radio'}
    }
  
    
  },
};


const Template = (args) => <ButtonIcon {...args} />;

export const ButtonIconn = Template.bind({});


const alertt=()=>{
  return alert('mundo')
}


ButtonIconn.args = {
  
size:'large',
disabled:false,
onClick:alertt
  
};













