import React from 'react'
import styled from "styled-components";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';




const CardComponentInfo = styled(Card)`
&&{
    background: #FFFFFF;
    box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
    border-radius: 16px;
    width:100%;
    display:flex;
    flex-direction: column;
    
}

.cardHeader{
    width:100%;
    display:flex;
    align-items: center;
    padding-bottom: 0px;
}
.titulo{
   display:flex;
   align-items: center;
 }

.css-1qvr50w-MuiTypography-root{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: #94A3B8;
    
    
}

 .tag{
    padding:0px 5px;
    border-radius:4px;
    width: auto;
    height: 22px;
    
    >.css-6od3lo-MuiChip-label{
        font-family: 'SF UI Text';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 150%;
        text-align: center;
        padding:5px;
    }
} 



    
`


const CardContentInfo = styled(CardContent)`
 &&{
    display:flex;
    flex-direction:column;
    
    
    
}

.sub{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 150%;
    color: #27272A;
    
    
}

.descripcion{
   font-family: 'Nunito';
   font-style: normal;
   font-weight: 500;
   font-size: 14px;
   line-height: 23px;
   font-feature-settings: 'salt' on;
   color: #78716C;
   
}  

.boton{
    padding:0px;
}

`

const CardInfoFull = (props) => {

    return (
        <CardComponentInfo>
            <CardHeader
                className="cardHeader"
                action={
                    <IconButton disableRipple >
                        
                            {props.datosCardInfoFull.iconSetting}
                        
                    </IconButton>
                }
                title={<div className="titulo">
                    <div>
                        {props.datosCardInfoFull.titulo}
                    </div>
                    <div className="tag">
                        <Chip
                            className="tag"
                            color={"error"}
                            label={props.datosCardInfoFull.tag}
                        >
                        </Chip>
                    </div>

                </div>}

            />


            <CardContentInfo >

                {props.datosCardInfoFull.sub ?
                    <Typography
                        className="sub"
                        variant="h5"
                        component="div">
                        {props.datosCardInfoFull.sub}
                    </Typography>
                    :
                    null}

                {props.datosCardInfoFull.sub ?

                    <Typography
                        className="descripcion"
                        color="text.secondary">
                        {props.datosCardInfoFull.descripcion}
                    </Typography>
                    :
                    null}

                {props.datosCardInfoFull.button ?
                    <div className="container-button">

                        {props.datosCardInfoFull.button}

                    </div>
                    : null}
            </CardContentInfo>

        </CardComponentInfo>
    )
}

export default CardInfoFull