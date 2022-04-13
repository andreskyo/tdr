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
      label:"aaaaa",
      
      
    },
    {
      label:"aaaaac",
      
      
    },
    {
      label:"ZZZZZ",
      
      
    },
    {
      label:"XXXXXX",
      
      
    },
  ];




DropDownTextInputt.args = {
text:'',    
label:'',
regex:/[A-Z]/,
focus:false,
disabled:false,
alert:true,
helperDescription:false,
helperTextDescription:'Description',
errorMessage: 'This is an ERROR message',
successMessage:'This is a SUCCESS message',
iconCalendario:<CalendarTodayOutlinedIcon></CalendarTodayOutlinedIcon>, 
iconDelete:<ClearIcon className="iconDelete"></ClearIcon>,
datos:datos,

};