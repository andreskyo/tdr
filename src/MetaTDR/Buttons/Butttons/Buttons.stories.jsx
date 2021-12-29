import React from 'react';

import { Buttons } from "./Buttons";


export default {
  title: 'Buttons/Butttons/Buttons',
  component: Buttons,
 
  argTypes: {
    size: {
      options:['large','medium','small'],
      control:{type:'radio'}
    }
  
    
  },
};


const Template = (args) => <Buttons {...args} />;

export const Buttonss = Template.bind({});

const alertt=()=>{
return alert('hola mundo')
}



Buttonss.args = {
  size:'large',
  text:'Large Button',
  primary:true,
  disabled:false,
  onClick:alertt
  
};












