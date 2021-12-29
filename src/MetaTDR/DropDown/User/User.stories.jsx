import React from 'react';
import Logout from './Logout.png';
import { User } from "./User";


export default {
  title: 'DropDown/User/User',
  component: User,
 
  argTypes: {
    
     },
};


const Template = (args) => <User {...args} />;

export const UserIcon = Template.bind({});


let Menu=[
  {
    link:'Impuestos',
    accion:'link 1'
  },
  {
    link:'Respresentados',
    accion:'link 2'
  },
  {
    link:'Fiscalizaciones',
    accion:'link 3'
  },
  {
    link:'Corredor',
    accion:'link 4'
  },
  {
    link:'Procurador',
    accion:'link 5'

  },
  {
    iconCerrar:Logout,
    cerrar:'cerrar sesion',
    accion:'cerrar'
  }
]


UserIcon.args = {
  Menu:Menu,
  textNombre:'¡Hola, Juan Martínez!',
  textId:'20282516129',
  textSituacion:'Regular',
  
  
};