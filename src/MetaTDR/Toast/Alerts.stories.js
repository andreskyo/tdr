import React from 'react';

import { Alerts } from "./Alerts";


export default {
  title: 'MetaTDR/Toast/Alerts',
  component: Alerts,
   argTypes: {
    
     },
};


const DatosNnotification=[{
    
    title:` Successfully applied!`,
    label:"Malesuada tellus tincidunt fringilla enim, id mauris. Id etiam nibh suscipit aliquam dolor. Nunc sit nunc aliquet justo, facilisi leo. Nulla a eget tincidunt integer orci.",
    
    
  }]


const Template = (args) => <Alerts {...args} />;
export const Alertss = Template.bind({});

const noti=()=>{
    return alert('notificaciones')
  }

Alertss.args = {
    DatosNnotification:DatosNnotification,
    button:true,
    onClick:noti
};