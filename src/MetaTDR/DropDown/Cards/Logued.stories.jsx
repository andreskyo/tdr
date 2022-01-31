import React from 'react';

import { Logued } from "./Logued";


export default {
  title: 'DropDown/Card/Logued',
  component: Logued,
 
  argTypes: {
    
  
    
  },
};


const Template = (args) => <Logued {...args} />;

export const Loguedd = Template.bind({});

const Logueddd=[{
botonText:'Ingresar con CIDI',
divP:'¿No tenes Ciudadano Digital?',
divA:'Crear cuenta'

},{
  botonText:'Ingresar con AFIP',
  divPP:'¿No tenes Clave Fiscal? ',
  divAA:'Solicitar clave'
  
  }]


  const button=(e)=>{
    alert("")
  }

Loguedd.args = {
  Logueddd:Logueddd,
  onClick:button,
  
  
};
