import React from 'react';
import AddIcon from '@mui/icons-material/Add';

import { Buttons } from "./Buttons";





export default {
  title: 'Buttons/Butttons/Buttons',
  component: Buttons,
 
  argTypes: {
    size: {
      options:['large','medium','small'],
      control:{type:'radio'}
    },
  
  
    
  },
};


const Template = (args) => <Buttons {...args} />;

export const Buttonss = Template.bind({});




const alertt=()=>{
return alert('hola mundo')
}



Buttonss.args = {
  text:"Large Button",
  size:'large',
  primary:true,
  disabled:false,
  outlined:false,
  addIcon:false,
  alarmIcon:false,
  line:false,
  onClick:alertt,
};











