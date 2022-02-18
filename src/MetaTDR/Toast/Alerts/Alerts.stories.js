import React from 'react';
import Button from '@mui/material/Button';
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
    button:<Button disableRipple onClick={()=>{alert("learn more")}}>Learn More</Button>
    
  }]


const Template = (args) => <Alerts {...args} />;
export const Alertss = Template.bind({});



Alertss.args = {
    DatosNnotification:DatosNnotification,
    
    
};