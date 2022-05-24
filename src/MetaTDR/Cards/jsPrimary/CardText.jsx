import React from 'react'
import styled from "styled-components";
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';


const CardComponentText = styled(Card)`
&&{
    background: #FFFFFF;
    box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
    border-radius: 16px;
    padding:20px;
}
.titulo{
    padding:5px;
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #78716C;

}
.descripcion{
    padding:5px;
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: #124596;
}

`


const CardText = (props) => {




    return (
        <CardComponentText >

            <Typography className="titulo">

                {props.datosCardText.tituloA}

            </Typography>

            <Typography className="descripcion">

                {props.datosCardText.descripcionA}

            </Typography>

            <Typography className="titulo">

                {props.datosCardText.tituloB}

            </Typography>


            <Typography className="descripcion">

                {props.datosCardText.descripcionB}

            </Typography>

            <Typography className="titulo">

                {props.datosCardText.tituloC}

            </Typography>


            <Typography className="descripcion">

                {props.datosCardText.descripcionC}

            </Typography>


        </CardComponentText>
    )
}

export default CardText