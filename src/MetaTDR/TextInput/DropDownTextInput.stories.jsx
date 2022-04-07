import React from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ClearIcon from '@mui/icons-material/Clear';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { DropDownTextInput } from "./DropDownTextInput";


export default {
  title: 'MetaTDR/TextInput/DropDownTextInput',
  component: DropDownTextInput,

  argTypes: {
    //  color: {
    //    options:['','success','warning','error','info'],
    //    control:{type:'radio'}
    //  },
  
  },
};


const Template = (args) => <DropDownTextInput{...args} />;

export const DropDownTextInputt = Template.bind({});
const datos = [
    {
      value: 'usd',
      label: '$',
      regex:/[A-Z]/
    },
    {
      value: 'EUR',
      label: '€',
      regex:/[A-Z]/
    },
    {
      value: 'btc',
      label: '฿',
      regex:/[A-Z]/
    },
    {
      value: 'JPY',
      label: '¥',
      regex:/[A-Z]/
    },
  ];

const regex=datos.map((res,i)=>{
  return res.regex
})


DropDownTextInputt.args = {
regex:/[A-Z]/,
errorMessage: 'This is an ERROR message',
successMessage:'This is a SUCCESS message',
datos:datos,
iconCalendario:<CalendarTodayOutlinedIcon></CalendarTodayOutlinedIcon>,  
iconDelete:<ClearIcon className="iconDelete"></ClearIcon>, 
disabled:false,    
label:'Field Label',
helperText:"Description Area"



};