import React from 'react';
import Button from '@material-ui/core/Button';
import { CardNotificaciones } from "./CardNotificaciones";


export default {
  title: 'DropDown/Card/CardNotificaciones',
  component: CardNotificaciones,
 
  argTypes: {
    
     },
};


const Template = (args) => <CardNotificaciones {...args} />;

export const Cardd = Template.bind({});



Cardd.args = {
notificacion:'No hay notificaciónes',
subNotificacion:'Regresa más tarde, no hay alertas por el momento',
buttonCorreo:<Button href="#" disableRipple>Ir bandeja de entrada</Button>
};
