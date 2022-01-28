import React from 'react';
import AddIcon from '@mui/icons-material/Add';

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



const alertt=()=>{
return alert('hola mundo')
}



SideBarr.args = {
datos:datos
};