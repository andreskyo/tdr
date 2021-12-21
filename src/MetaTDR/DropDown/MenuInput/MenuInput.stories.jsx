import React from 'react';

import { MenuInput } from "./MenuInput";


export default {
  title: 'DropDown/MenuInput/MenuInput',
  component: MenuInput,
 
  argTypes: {
    
     },
};


const Template = (args) => <MenuInput {...args} />;

export const InputA = Template.bind({});





InputA.args = {
  TextHora:'Hace 3 horas',
  TextMulta:'Tienes una multa próxima a vencer',
  TextVencimiento:'Vence 24/10/2019',
  TextNotificaciones:'Ver todas las notificaciones'
  
};