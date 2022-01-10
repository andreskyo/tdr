import React from 'react';

import { Notifications } from "./Notifications";


export default {
  title: 'MetaTDR/Toast/Notifications',
  component: Notifications,
   argTypes: {
    
     },
};

const DatosNotification=[{
  title:'APP NAME',
  time:'3 MIN AGO',
  subtitle:'Incident - High severity',
  label:"Do ullamco ex velit anim do proident exercitation et anim tempor. Lorem sunt deserunt labore non excepteur veniam enim quis officia magna ani..."
  
}]



const Template = (args) => <Notifications {...args} />;
export const Notificationss = Template.bind({});



Notificationss.args = {
  DatosNotification:DatosNotification
};