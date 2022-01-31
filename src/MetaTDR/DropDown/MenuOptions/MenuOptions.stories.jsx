import React from 'react';

import { MenuOptions } from "./MenuOptions";


export default {
  title: 'DropDown/MenuOptions/MenuOptions',
  component: MenuOptions,
 
  argTypes: {
    
     },
};


const Template = (args) => <MenuOptions {...args} />;

export const MenuuOptions = Template.bind({});

let datos= [
  {
    text:'Menu Option 1',
    accion:()=>{alert("m1")}
  },
  {
    text:'Menu Option 2',
    accion:()=>{alert("m2")}
  },
  {
    text:'Menu Option 3',
    accion:()=>{alert("m3")}
  }
]

MenuuOptions.args = {
  datos:datos
};



