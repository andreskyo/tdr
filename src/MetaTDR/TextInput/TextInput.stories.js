import React from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ClearIcon from '@mui/icons-material/Clear';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import { TextInput } from "./TextInput";
import Typography from '@mui/material/Typography';


export default {
  title: 'MetaTDR/TextInput/TextInput',
  component: TextInput,

  argTypes: {
  
  
  },
};


const Template = (args) => <TextInput{...args} />;

export const Textiinput = Template.bind({});



Textiinput.args = {
disabled:false,
alert:true,
helperText:true,
regex:/[A-Z]/,
helperTextDescription: <Typography variant="span" style={{marginLeft:"10px"}}>This is the description area</Typography> ,
text:'',
errorMessage: 'This is an ERROR message',
successMessage:'This is a SUCCESS message',
label: 'label' ,
iconAlert:<ErrorOutlinedIcon></ErrorOutlinedIcon>,
iconDelete:<ClearIcon className="iconDelete"></ClearIcon>,
icon:<LocalPhoneIcon className="iconPhone"/>,

};