import React from 'react'
import styled from "styled-components";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Buttons } from '../../Buttons/Butttons/Buttons';
import Typography from '@mui/material/Typography';


const CardContentImg = styled(Card)`
  &&{
    background: #FFFFFF;
    box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
    border-radius: 16px;
  }  
  
.titulo{
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    color: #27272A;

}
.icont{
    color:#78716C;
    font-size:17px;
}
.subtitulo{
    color: #78716C;
}
.descripcion{
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    color: #27272A;
}
  .boton {
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: bold;
    margin-left:20px;
    border: 1px solid #124596;
    border-radius: 8px;
    align-items: center;
    padding: 8px 16px;
    width: 95px;
    color: #124596;
}
`

const CardImg = (props) => {
    return (
        <CardContentImg>
            <CardMedia
                className="row" style={{ width: "99%", margin: "auto", marginTop: "10px" }}>


                {props.datosCardImg.img ? <img style={{ margin: "auto" }} src={props.datosCardImg.img} /> : null}

            </CardMedia>

            <CardContent
                className="row">

                {props.datosCardImg.titulo ?
                    <Typography
                        className="col-12 m-0 titulo"
                        gutterBottom
                        variant="h5"
                        component="div">
                        {props.datosCardImg.titulo}
                    </Typography>
                    : null}


                <Typography
                    className="col-12 mt-3 subtitulo"
                    variant="body2"
                    color="text.secondary">

                    {props.datosCardImg.iconSub ? props.datosCardImg.iconSub : null}
                    {props.datosCardImg.sub ? props.datosCardImg.sub : null}
                </Typography>


                {props.datosCardImg.descripcion ?

                    <Typography
                        className="col-12 mt-3 descripcion"
                        variant="body2">

                        {props.datosCardImg.descripcion}
                    </Typography>

                    : null}
            </CardContent>
            {props.datosCardImg.button ?
                <CardActions
                    className="row button col-12">

                    {props.datosCardImg.button}

                </CardActions>
                : null}
        </CardContentImg>
    )
}

export default CardImg