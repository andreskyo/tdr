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
    text:<a className="text-center">Menu Option 1</a>,
    accion:()=>{alert("m1")}
  },
  {
    text:<a className="text-center">Menu Option 2</a>,
    accion:()=>{alert("m2")}
  },
  {
    text:<a className="text-center">Menu Option 3</a>,
    accion:()=>{alert("m3")}
  }
]

MenuuOptions.args = {
  datos:datos
};



