import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import Alert from '@mui/material/Alert';


import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";





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






const Input= styled(TextField)`
.MuiOutlinedInput-root {border-radius: 8px;}
.iconDelete{
  cursor:pointer;
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




/*----------------*/

export const TextInput = ({ ...props }) => {


    const [color, setColor] = useState('')
    const [focus, setFocus] = useState(false)
    const [inputValue,setInputValue]=useState()
    const [text, setText] = useState('')

    const handleInput = (e) => {
        const texto = e.target.value
        setInputValue(texto)
       


        if (texto.length == 0) {
            setColor('error');
            setFocus(true)

        }
        else if (!props.regex.test(texto)) {
            setColor('error');
            setFocus(true)

        } else {
            setColor('success');
            setFocus(true)

        }

        return setText(texto)

    }
    const handleSet = () => {

        setText('')
        setColor('')
        setFocus()

    }



    return (
        <Div
            className="container-fluid m-0">

            <div className="row">

                <Input
                    label={props.label}
                    color={color}
                    focused={focus}
                    disabled={props.disabled}
                    value={text}
                    helperText={props.helperTextDescription ? props.helperTextDescription:null}
                    onChange={handleInput}

                    InputProps={{
                        // className: classse.input, pattern: "[a-z]{1,15}",
                        startAdornment: <InputAdornment position="start" >{props.icon ? props.icon : null}</InputAdornment>,
                        endAdornment: <InputAdornment position="start" onClick={handleSet}>{text.length > 0 ? props.iconDelete : null}</InputAdornment>
                    }}
                    variant="outlined" />
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