import React from 'react';
import Button from '@mui/material/Button';

import { Logued } from "./Logued";


export default {
  title: 'DropDown/Card/Logued',
  component: Logued,
 
  argTypes: {
    
  
    
  },
};


const Template = (args) => <Logued {...args} />;

export const loguedd = Template.bind({});

const datos=[{
  boton:<Button onClick={(e)=>{alert("CIDI")}} variant="contained"  disableRipple className="mx-auto mt-3">Ingresar con CIDI</Button>,
  text:<p className="text-center p-2 m-0 ">¿No tenes Ciudadano Digital?</p>,
  link:<a href="#" className="text-center p-2">Crear cuenta</a>     

},{
  boton:<Button onClick={(e)=>{alert("AFIP")}} variant="contained" disableRipple className="mx-auto">Ingresar con AFIP</Button>,
  text:<p className="text-center p-2  m-0">¿No tenes Clave Fiscal? </p>,
  link:<a href="#" className="text-center p-2">Solicitar clave</a>     
  
  }]




loguedd.args = {
  datos:datos
  
  
  
};
