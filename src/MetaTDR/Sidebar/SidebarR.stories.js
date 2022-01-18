import React from 'react';
import AddIcon from '@mui/icons-material/Add';

import { SidebarR } from "./SidebarR";




export default {
  title: 'MetaTDR/SidebarR/SidebarR',
  component: SidebarR,
 
  argTypes: {
    
  
    
  },
};

const Datos=[{
    id:'1',
    description:'Servicios de organizaciones y órganos extraterritoriales.',
    alic:'Alic.: 1.5'
},{
    id:'2',
    description:'Servicios de organizaciones y órganos extraterritoriales.',
    alic:'Alic.: 1.5'
},
{
    id:'3',
    description:'Servicios de organizaciones y órganos extraterritoriales.',
    alic:'Alic.: 1.5'
},
{
    id:'3',
    description:'Servicios de organizaciones y órganos extraterritoriales.',
    alic:'Alic.: 1.5'
},
{
    id:'3',
    description:'Servicios de organizaciones y órganos extraterritoriales.',
    alic:'Alic.: 1.5'
},
{
    id:'3',
    description:'Servicios de organizaciones y órganos extraterritoriales.',
    alic:'Alic.: 1.5'
},
{
    id:'3',
    description:'Servicios de organizaciones y órganos extraterritoriales.',
    alic:'Alic.: 1.5'
},
{
    id:'3',
    description:'Servicios de organizaciones y órganos extraterritoriales.',
    alic:'Alic.: 1.5'
},
{
    id:'3',
    description:'Servicios de organizaciones y órganos extraterritoriales.',
    alic:'Alic.: 1.5'
},

]




const Template = (args) => <SidebarR {...args} />;

export const SideBarr = Template.bind({});



const alertt=()=>{
return alert('hola mundo')
}



SideBarr.args = {
Datos:Datos
};