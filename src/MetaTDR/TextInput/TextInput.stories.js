import React from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ClearIcon from '@mui/icons-material/Clear';
import { TextInput } from "./TextInput";


export default {
  title: 'MetaTDR/TextInput/TextInput',
  component: TextInput,

  argTypes: {
     color: {
       options:['error','success','warning','info'],
       control:{type:'radio'}
     },
  
  },
};


const Template = (args) => <TextInput{...args} />;

export const Textiinput = Template.bind({});




Textiinput.args = {
disabled:false,
color:false,
label:"label",
select:true,
icono:true,
iconDelete:<ClearIcon className="iconDelete"></ClearIcon>,
icon:<LocalPhoneIcon className="iconPhone"/>,







};