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
    accion:"m 1"
  },
  {
    text:'Menu Option 2',
    accion:"m 2"
  },
  {
    text:'Menu Option 3',
    accion:"m 3"
  }
]

MenuuOptions.args = {
  datos:datos
};



