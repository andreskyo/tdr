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
    // variant:{
    //   options:['contained','outlined','text'],
    //   control:{type:'radio'}
    // },
    // color:{
    //   options:['primary','success'],
    //   control:{type:'radio'}
    // }
  
    
  },
};


const Template = (args) => <Buttons {...args} />;

export const Buttonss = Template.bind({});
// export const ButtonIconn = Template.bind({});
// export const ButtonIconnDos = Template.bind({});



const alertt=()=>{
return alert('hola mundo')
}



Buttonss.args = {
  text:"large button",
  size:'large',
  primary:true,
  disabled:false,
  outlined:false,
  addIcon:false,
  alarmIcon:false,
  line:false,
  onClick:alertt,
};











