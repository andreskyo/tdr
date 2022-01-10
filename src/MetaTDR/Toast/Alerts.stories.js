import React from 'react';

import { Alerts } from "./Alerts";


export default {
  title: 'MetaTDR/Toast/Alerts',
  component: Alerts,
 
  argTypes: {
    
     },
};

const Datos=[{
   title:'Successfully applied!',
   label:"Malesuada tellus tincidunt fringilla enim, id mauris. Id etiam nibh suscipit aliquam dolor. Nunc sit nunc aliquet justo, facilisi leo. Nulla a eget tincidunt integer orci.",
   link:"learn more"
}]

const DatosModal=[{
  title:'Sure you want to accept?',
  label:"Are you sure you want to accept this?",
  linkA:<button>hola</button>,
}]


const Template = (args) => <Alerts {...args} />;
export const Alertt = Template.bind({});


const alerrt=()=>{

  return alert('hola')
}
Alertt.args = {
  Datos:Datos, 
  onClick:alerrt,
};


