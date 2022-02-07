import React from 'react';
import Button from '@material-ui/core/Button';
import { CardN } from "./CardN";


export default {
  title: 'DropDown/Card/CardN',
  component: CardN,
 
  argTypes: {
    
     },
};


const Template = (args) => <CardN {...args} />;

export const Cardd = Template.bind({});



Cardd.args = {
notificacion:'No hay notificaciónes',
subNotificacion:'Regresa más tarde, no hay alertas por el momento',
buttonCorreo:<Button href="#" disableRipple>Ir bandeja de entrada</Button>
};

















