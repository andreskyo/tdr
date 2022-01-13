import React from 'react';

import { Notifications } from "./Notifications";


export default {
  title: 'MetaTDR/Toast/Notifications',
  component: Notifications,
 
  argTypes: {
    
     },
};

let dateTime=()=>{
 
     
  let showdate=new Date();
 
  const minutos=((showdate.getMinutes()<10) ? "0":"") + showdate.getMinutes();
  
  return(
       minutos 
  )
  
  }

  const DatosNnotification=[{
    time:`APP NAME • NOW `,
    title:'Jane Doe replied to your post about so and so',
    label:"Non tempor eu ullamco veniam nulla ex. Sunt amet consectetur in pariatur amet incididunt",
    
  }]

const DatosNerror=[{
   time:`APP NAME • ${dateTime()} MIN AGO `,
   title:'Incident - High severity',
   label:"Do ullamco ex velit anim do proident exercitation et anim tempor. Lorem sunt deserunt labore non excepteur veniam enim quis officia magna ani...",
   
}]

const DatosNewnotification=[{
  time:`APP NAME • NOW `,
  title:'New notification',
  label:"Do ullamco ex velit anim do proident exercitation et anim tempor. Lorem sunt deserunt labore non excepteur veniam enim quis officia magna anim...",
    
}]


const Template = (args) => <Notifications {...args} />;
export const Notificationss = Template.bind({});


const alerrt=()=>{

  return alert('hola')
}
Notificationss.args = {
  DatosNnotification:DatosNnotification,
  DatosNerror:DatosNerror, 
  DatosNewnotification:DatosNewnotification,
  onClick:alerrt,
};


