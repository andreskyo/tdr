import React from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ClearIcon from '@mui/icons-material/Clear';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import { TextInput } from "./TextInput";


export default {
  title: 'MetaTDR/TextInput/TextInput',
  component: TextInput,

  argTypes: {
     color: {
       options:['','primary','error','success','warning','info'],
       control:{type:'radio'}
     },
  
  },
};


const Template = (args) => <TextInput{...args} />;

export const Textiinput = Template.bind({});

const datos=[
  {
   msj:"This is a  message",
   description:"This is the description area"
  }
]

Textiinput.args = {

color:'',
label:"label",
disabled:false,
background:false,
margin:true,
description:true,
datos:datos,
iconAlert:<ErrorOutlinedIcon></ErrorOutlinedIcon>,
iconDelete:<ClearIcon className="iconDelete"></ClearIcon>,
icon:<LocalPhoneIcon className="iconPhone"/>,

};