import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import Alert from '@mui/material/Alert';


const Input = styled(TextField)`
.MuiOutlinedInput-root {border-radius: 8px;}
.iconDelete{
  cursor:pointer;
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
    const [text, setText] = useState(props.text)
    const [color, setColor] = useState('')
    const [focus,setFocus]=useState(false)
    

     const handleInput = (e) => {
        const texto = e.target.value

        if (props.onChange) {
            this.props.onChange(texto)
        }
     

        if (!props.regex.test(texto)) {
            if (texto.length > 0) {
                setFocus(true)
                setColor('error')
                
               
                

            } else {
                setFocus(false)
                setColor('')

                
            }


        } else {
            setColor('success');
            

        }
        return setText(texto)

    }
    const handleSet = () => {
        setText('')
        setColor('')
        setFocus(false)
        
        
       
        
        

    }



    return (
        <>

         

                <Input
                    label={props.label}
                    InputLabelProps={{ shrink: props.label }}
                    fullWidth
                    color={color}
                    
                    focused={focus}
                    disabled={props.disabled}
                    value={text}
                    
                    onChange={handleInput}

                    InputProps={{

                        startAdornment: <InputAdornment position="start" >{props.icon ? props.icon : null}</InputAdornment>,
                        endAdornment: <InputAdornment position="start" onClick={handleSet}>{text.length > 0 ? props.iconDelete : null}</InputAdornment>
                    }}
                    variant="outlined" />
                
                {props.alert ? (color === "error" && props.errorMessage.length > 0) || (color === "success" && props.successMessage.length > 0) ?
                    <AlertMensaje
                        iconMapping={{
                            success: props.iconAlert,
                            error: props.iconAlert,
                            info: props.iconAlert,
                            warning: props.iconAlert
                        }}
                        classname=""
                        severity={color}>

                        {color === "error" && props.errorMessage.length > 0 ? props.errorMessage : color === "success" && props.successMessage.length > 0 ? props.successMessage : null}
                    </AlertMensaje>
                    : null : null}
                    {props.helperText ? props.helperTextDescription : null}


        </>
    );
};