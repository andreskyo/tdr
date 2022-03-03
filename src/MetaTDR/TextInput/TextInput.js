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

`;


const TextFieldd = styled(TextField)`


>div{
    border-radius:8px;
}
&&.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input{
    border:0px;
}
&&.bg-primary{
  border-radius:10px;
  background: rgba(0.0, 0.0, 0.0, 0.0)
}
&&.bg-error{
  border-radius:10px;
  
}
&&.bg-success{
  border-radius:10px;
  
}
&&.bg-warning{
  border-radius:10px;
  
}
&&.bg-info{
  border-radius:10px;
  
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
const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: 30
    },
    "& .MuiInputBase-input": {
      borderRadius: 4,
      
      backgroundColor: "transparent",
      border: "1px solid #ced4da",
     
      padding: "10px 12px",
  
      "&:focus": {
        boxShadow: 'transparent',
        borderColor: "blue"
      }
    }
  }));

/*----------------*/

export const TextInput = ({ icono, ...props }) => {
    const renderMsj = () => {
        let resultado = props.datos.map((res) => {
            return <>
                <Alertt
                    className={props.margin ? 'mt-2' : false}
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
        <Div className="container-fluid m-0">


            <div className="row">

                <TextFieldd

                    label={props.label ? props.label : null}
                    color={props.color}
                    disabled={props.disabled}
                    value={text}
                    className={props.background ? `bg-${props.color}` : null}
                    onChange={handleInput}
                    InputProps={{

                        startAdornment: <InputAdornment position="start" >{props.icon ? props.icon : null}</InputAdornment>,
                        endAdornment: <InputAdornment position="start" onClick={handleSet}>{text.length > 0 ? props.iconDelete : null}</InputAdornment>
                    }}
                    variant="outlined" />

                {props.color != '' ? renderMsj() : <Alertt
                    className="description"
                    icon={false}
                    severity=''>
                    {props.description}
                </Alertt>}



                <FormControl variant="standard">
                    <InputLabel shrink>Bootstrap</InputLabel>
                    <BootstrapInput  />
                </FormControl>





            </div>

        </Div>
    );
};