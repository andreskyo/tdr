import React from 'react';
import Logout from './Logout.png';
import { User } from "./User";
import Button from '@mui/material/Button';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


export default {
  title: 'DropDown/User/User',
  component: User,
 
  argTypes: {
    
     },
};


const Template = (args) => <User {...args} />;

export const UserIcon = Template.bind({});


let menu=[
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

  }
  
]

const datosUsuario=[{
  imagen:<AccountCircleOutlinedIcon sx={{ fontSize: 60 }} />,
  nombre:"¡Hola, Juan Martínez!",
  id:20282516129,
  situacion:`Situacion fiscal Regular`

}]

let cerrar=()=>{
  return alert("cerrar")
}

UserIcon.args = {
  menu:menu,
  datosUsuario:datosUsuario,
  iconCerrar:<img style={{width:"25px"}} src={Logout}/>,
  cerrar:<Button disableRipple style={{textTransform:"none"}} onClick={cerrar}>Cerrar Sesión</Button>,

  
  
};