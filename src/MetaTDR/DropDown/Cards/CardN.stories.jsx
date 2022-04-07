import React from 'react';
import Button from '@material-ui/core/Button';
import { CardN } from "./CardN";
import Correo from './Correo.png'

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
buttonCorreo:<Button href="#" disableRipple className='button'>Ir bandeja de entrada</Button>,
imagen:<img src={Correo} alt="..." className="rounded mx-auto d-block imagen"/>
};

















