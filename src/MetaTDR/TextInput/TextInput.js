import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import InputAdornment from '@mui/material/InputAdornment';


const Div = styled.div`

`;
const TextFieldd = styled(TextField)`
>div>div>.iconPhone{
   display: ${({ icono }) => icono ? 'block' : 'none'};
}
>div>div>.iconDelete{
  cursor:pointer;
}

`
export const TextInput = ({ icono, ...props }) => {
    const [text, setText] = useState('')
    


    const handleInput = (e) => {
        const texto = e.target.value
        
        return setText(texto)
    }

const handleSet=()=>{
    
    return setText('')
}    


    return (
        <Div className="container-fluid m-0">


            <div className="row">

            
                <TextFieldd
                    label={props.label}
                    color={props.color}
                    disabled={props.disabled}
                    value={text}
                    focused={props.select}
                    icono={icono}
                    onChange={handleInput}
                    InputProps={{
                    startAdornment: <InputAdornment position="start" >{props.icon}</InputAdornment>,
                    
                    endAdornment:<InputAdornment position="start" onClick={handleSet}>{text.length >0 ? props.iconDelete : null}</InputAdornment>
                    }}
                    variant="outlined" />



            </div>
        </Div>
    );
};