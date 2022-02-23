import React from 'react';
import Button from '@mui/material/Button';
import { SidebarR } from "./SidebarR";




export default {
  title: 'MetaTDR/SidebarR/SidebarR',
  component: SidebarR,
 
  argTypes: {
    
  
    
  },
};

const datos=[{
    id:'00990000',
    description:'Servicios de organizaciones y órganos extraterritoriales.',
    alic:'Alic.: 1.5'
},{
    id:'153',
    description:'Lavado y limpieza de articulos de tela, cuero y/o de piel, incluso la limpieza en seco.',
    alic:'Alic.: 1.5'
},
{
    id:'268',
    description:'Servicios de hogares privados que contratan servicio domestico',
    alic:'Alic.: 1.5'
},
{
    id:'055',
    description:'Servicios de organizaciones y órganos extraterritoriales',
    alic:'Alic.: 1.5'
},
{
    id:'00990000',
    description:'Servicios de tratamiento de belleza, excepto los de peluqueria.',
    alic:'Alic.: 1.5'
},
{
    id:'00990000',
    description:'Transporte de energía eléctrica.',
    alic:'Alic.: 1.5'
},
{
    id:'00990000',
    description:'Transporte de energía eléctrica.',
    alic:'Alic.: 1.5'
},
{
    id:'00990000',
    description:'Transporte de energía eléctrica.',
    alic:'Alic.: 1.5'
},
{
    id:'00990000',
    description:'Transporte de energía eléctrica.',
    alic:'Alic.: 1.5'
},
{
    id:'00990000',
    description:'Transporte de energía eléctrica.',
    alic:'Alic.: 1.5'
},
{
    id:'1',
    description:'Transporte de energía eléctrica.',
    alic:'Alic.: 1.5'
},
{
    id:'2',
    description:'Transporte de energía eléctrica.',
    alic:'Alic.: 1.5'
},
{
    id:'2',
    description:'Transporte de energía eléctrica.',
    alic:'Alic.: 1.5'
},
{
    id:'2',
    description:'Transporte de energía eléctrica.',
    alic:'Alic.: 1.5'
},
{
    id:'2',
    description:'Transporte de energía eléctrica.',
    alic:'Alic.: 1.5'
},
{
    id:'2',
    description:'Transporte de energía eléctrica.',
    alic:'Alic.: 1.5'
},
{
    id:'2',
    description:'Transporte de energía eléctrica.',
    alic:'Alic.: 1.5'
},
{
    id:'3',
    description:'Transporte de energía eléctrica.',
    alic:'Alic.: 1.5'
},


]




const Template = (args) => <SidebarR {...args} />;

export const SideBarr = Template.bind({});

let actividadButton=()=>{
    return alert("agregar")
}





SideBarr.args = {
    disabled:false,
    datos:datos,
    bActividad:<Button disableRipple  onClick={actividadButton} >Agregar Actividad</Button>,
    
};