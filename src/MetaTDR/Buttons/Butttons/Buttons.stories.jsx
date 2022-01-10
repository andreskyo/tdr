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
    }
  
    
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
  size:'large',
  text:'Large Button',
  primary:true,
  disabled:false,
  buttton:true,
  buttonIconM:true,
  buttonIconR:true,
  buttonBorderr:true,
  buttonLine:true,
  onClick:alertt,
};


// ButtonIconn.args = {
//   primary:true,
//   text:<AddIcon />, 
//   size:'large',
//   disabled:false,
//   onClick:alertt
// };
 

// ButtonIconnDos.args = {
//   size: 'large',
//   text:'Large Button',
//   onClick:alertt
// };









