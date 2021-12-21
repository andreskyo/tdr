import React from 'react';

import { User } from "./User";


export default {
  title: 'DropDown/User/User',
  component: User,
 
  argTypes: {
    
     },
};


const Template = (args) => <User {...args} />;

export const UserIcon = Template.bind({});





UserIcon.args = {
  textNombre:'¡Hola, Juan Martínez!',
  textId:'20282516129',
  textSituacion:'Regular'
  
};