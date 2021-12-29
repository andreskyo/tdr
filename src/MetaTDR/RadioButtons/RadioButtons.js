import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Radio, { RadioProps } from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';






const RadioStyled = styled(Radio)`

&:hover{
background-color: gba(0, 84, 240, 0.1);
border-radius:20px;

 }
  &.Mui-disabled{
  color:red!important;
  }
  
`



export const RadioButtons = ({ Selecteed, disableed , onChange, ...props}) => {
    // const handleChange = (e) =>{
    //         if(onChange){
    //             onChange(e.target.value)
    // onChange={handleChange}
    //         }
    // }
    return (
        <RadioGroup component="fieldset">
            
            
        <FormControlLabel  disabled={disableed} control={<Radio/>} label="" />
        
         
        </RadioGroup>
    );
};