import React from 'react';
import styled from "styled-components";
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';


const CardComponentVencimiento = styled(Card)`
&&{
    background: #FFFFFF;
    box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
    border-radius: 16px;
    width:100%;
    display:flex;
    flex-direction: column;
    padding:10px;
    
}

.icon{
    background: #F1F5F9;
    color:#27272A;
    align-self: center;
    width:50px;
    height:50px;
    .icono{
        font-size:30px;
    }
}

.titulo{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    text-align: center;
    line-height: 150%;
    width:100%;
    color: #124596;
}

.descripcion{
    align-self: flex-start;
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #78716C;
}

`

const CardVencimiento = (props) => {
    return (
        
        <CardComponentVencimiento className="container-fluid m-0">

            {props.datosVencimiento.icon ?
                <Avatar
                    className="icon"
                    alt="Remy Sharp"
                    >
                    {props.datosVencimiento.icon}
                </Avatar>
                : null}

            {props.datosVencimiento.titulo ?
                <Typography
                    className="titulo">
                    {props.datosVencimiento.titulo}
                </Typography>

                : null}

            <Divider variant="fullWidth"  className="divider"/>

            {props.datosVencimiento.descripcion ?
                <Typography
                    className="descripcion">

                    {props.datosVencimiento.descripcion}

                </Typography>
                : null}


        </CardComponentVencimiento>
        
    )
}

export default CardVencimiento