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


const TextFieldA = styled(TextField)`
.MuiOutlinedInput-root {border-radius: 8px;}
.iconDelete{
  cursor:pointer;
}
`


    
const TextFieldB = styled(TextField)`
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

export const TextInput = ({ ...props }) => {

    const renderMsj = () => {
        let resultado = props.datos.map((res) => {
            return <>
                {props.alert ? <Alertt
                    className={props.margin ? 'mt-2' : false}
                    iconMapping={{
                        success: props.iconAlert,
                        error: props.iconAlert,
                        info: props.iconAlert,
                        warning: props.iconAlert
                    }}
                    severity={props.color}>
                    {res.msj}
                </Alertt> : null}


                <Alertt
                    className="description"
                    icon={false}
                    severity=''>
                    {props.description ? res.description : false}

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
        <Div
            className="container-fluid m-0">




            {props.compactSpaced ?
                <div className="row">
                    
                   <p className="label"> {props.label} </p>
                   


                    <TextFieldB
                        label={false}
                        InputLabelProps={{ shrink: false }}
                        className={props.background ? `bg-${props.color}` : null}
                        disabled={props.disabled}
                        value={text}
                        onChange={handleInput}
                        InputProps={{

                            startAdornment: <InputAdornment position="start" >{props.icon ? props.icon : null}</InputAdornment>,
                            endAdornment: <InputAdornment position="start" onClick={handleSet}>{text.length > 0 ? props.iconDelete : null}</InputAdornment>
                        }}
                        variant="outlined" />
                    {renderMsj()}
                </div>
                :
                <div className="row">
                    <TextFieldA
                        label={props.label}
                        color={props.color}
                        disabled={props.disabled}
                        value={text}
                        onChange={handleInput}
                        InputProps={{

                            startAdornment: <InputAdornment position="start" >{props.icon ? props.icon : null}</InputAdornment>,
                            endAdornment: <InputAdornment position="start" onClick={handleSet}>{text.length > 0 ? props.iconDelete : null}</InputAdornment>
                        }}
                        variant="outlined" />
                    {renderMsj()}
                </div>
            }






        </Div>
    );
};