import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import Alert from '@mui/material/Alert';




const Div = styled.div`
.label{

font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size:15px;
color: #09101D;
opacity: 0.8;
margin:0px 0px 0px 30px;
line-height: 30px;
}
`;

const AlertMensaje = styled(Alert)`
&&.description{
    color: #09101D;
    opacity: 0.6;
}
&&{
    border-radius: 8px;
    padding: 6px 16px;
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
}


`
const Input = styled(TextField)`

.MuiOutlinedInput-root {border-radius: 8px;}
.iconDelete{
  cursor:pointer;
  left:50px;
  margin:10px;
}
&&.bg-error{
  background-color:#FEEFEF!important;
  border: 1px solid red;
  border-radius:8px;
}

&&.bg-success{
  border-radius:8px;
  background-color:#EDF9F0 !important;
  border: 1px solid green;
}
&&.bg-warning{
border-radius:8px;
  background-color:#FFF4EC !important;
  border: 1px solid #B95000;
}
&&.bg-info{
    border:1px solid #2E5AAC;
    border-radius:8px;
    background-color:#EEF2FA !important;
  
}

`


/*----------------*/

export const DropDownTextInput = ({ ...props }) => {
    const [color, setColor] = useState('')
    const [text, setText] = useState('')

    const handleInput = (e) => {
        const texto = e.target.value
        
      
         if (props.regex.test(texto)) {
            setText(texto)
            setColor('error');
            setFocus(true)

        } else {
            setText(texto)
            setColor('success');
            setFocus(true)

        }

        return setText(texto)

    }

    const handleSet = () => {

        setText('')


    }
   

    return (
        <Div
            className="container-fluid m-0">

            <div className="row">

                <Input
                    select
                    disabled={props.disabled}
                    label={props.label}
                    color={color}
                    value={text}
                    variant="outlined"
                    onChange={handleInput}
                    helperText={props.helperText}
                    focused={focus}
                    InputProps={{

                        startAdornment: <InputAdornment position="start" >{props.iconCalendario ? props.iconCalendario : null}</InputAdornment>,
                        endAdornment: <InputAdornment position="end" onClick={handleSet}>{text.length > 0 ? props.iconDelete : null}</InputAdornment>
                    }} >

                    {props.datos.map((option) => (

                        <MenuItem style={{ "min-width": "1648px" }} key={option.value} value={option.value}>
                            {option.label} {option.value}

                        </MenuItem>

                    ))}

                </Input>
                <AlertMensaje
                    iconMapping={{
                        success: props.iconAlert,
                        error: props.iconAlert,
                        info: props.iconAlert,
                        warning: props.iconAlert
                    }}
                    classname=""
                    severity={color}>
                        
                        {color==="error" ? props.errorMessage: color==="success" ? props.successMessage : null  }
                </AlertMensaje>
            </div>







        </Div>
    );
};