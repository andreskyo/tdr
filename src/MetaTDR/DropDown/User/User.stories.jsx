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
    accion:()=>{alert("link 1")}
  },
  {
    link:'Respresentados',
    accion:()=>{alert("link 2")}
  },
  {
    link:'Fiscalizaciones',
    accion:()=>{alert("link 3")}
  },
  {
    link:'Corredor',
    accion:()=>{alert("link 4")}
  },
  {
    link:'Procurador',
    accion:()=>{alert("link 5")}

  },
  {
    iconCerrar:Logout,
    cerrar:'cerrar sesion',
    accion:()=>{alert("cerrar")}
  }
]


UserIcon.args = {
  Menu:Menu,
  textNombre:'¡Hola, Juan Martínez!',
  textId:'20282516129',
  textSituacion:'Regular',
  
  
};