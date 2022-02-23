import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import Alert from '@mui/material/Alert';

const Div = styled.div`

`;


const TextFieldd = styled(TextField)`


>div{
    border-radius:8px;
}
>div>div>.iconPhone{
   display: ${({ icono }) => icono ? 'block' : 'none'};
}
>div>div>.iconDelete{
  cursor:pointer;
}

`

const Alertt = styled(Alert)`
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

export const TextInput = ({ icono, ...props }) => {

    const renderMsj = () => {
        let resultado = props.datos.map((res) => {
            return <>
                <Alertt
                    
                    iconMapping={{
                        
                        success: props.iconAlert,
                        error: props.iconAlert,
                        info: props.iconAlert,
                        warning: props.iconAlert
                    }}
                    severity={props.color}

                >
                    {res.msj}


                </Alertt>
                <Alertt
                    className="description"
                    icon={false}
                    severity=''>
                    {res.description}
                </Alertt>
            </>
        })
        return resultado
    }

    const [text, setText] = useState('')
    
    

    const handleInput = (e) => {
        const texto = e.target.value
        
        return setText(texto)
    }

    const handleSet = () => {
        
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
                    
                    icono={icono}
                    
                    onChange={handleInput}
                    InputProps={{
                        startAdornment: <InputAdornment position="start" >{props.icon}</InputAdornment>,
                        endAdornment: <InputAdornment position="start" onClick={handleSet}>{text.length > 0 ? props.iconDelete : null}</InputAdornment>
                    }}
                    variant="outlined" />
              
                {props.color!='primary' ? renderMsj()  : <Alertt
                    className="description"
                    icon={false}
                    severity=''>
                    {props.description}
                </Alertt>}







            </div>
        </Div>
    );
};