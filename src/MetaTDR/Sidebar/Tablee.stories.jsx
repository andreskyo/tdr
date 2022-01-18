import React from 'react';
import AddIcon from '@mui/icons-material/Add';

import { Tablee } from "./Tablee";




export default {
  title: 'MetaTDR/Tablee/Tablee',
  component: Tablee,
 
  argTypes: {
    
  
    
  },
};

const Datos=[{
    id:'0990000',
    description:'Servicios de organizaciones y órganos extraterritoriales.',
    alic:'Alic.: 1.5'
},{
    id:'0990000',
    description:'Servicios de organizaciones y órganos extraterritoriales.',
    alic:'Alic.: 1.5'
},
{
    id:'0990000',
    description:'Servicios de organizaciones y órganos extraterritoriales.',
    alic:'Alic.: 1.5'
}

]




const Template = (args) => <Tablee {...args} />;

export const SideBarr = Template.bind({});



const alertt=()=>{
return alert('hola mundo')
}



SideBarr.args = {

};