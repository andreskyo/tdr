import React from 'react'
import styled from "styled-components";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Chip from '@mui/material/Chip';
import { Buttons } from '../../Buttons/Butttons/Buttons';



const CardComponentInfo = styled(Card)`
&&{
    background: #FFFFFF;
    box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
    border-radius: 16px;
}


.tag{
    background: #DC2626;
    border-radius: 4px;
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    color: #F3F4F6;
    margin-left:5px;
    
}

.css-1qvr50w-MuiTypography-root{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: #94A3B8;
    margin-bottom:0px;
    margin-top:-15px;
    height:0px;
    
}
    
`


const CardContentInfo = styled(CardContent)`
&&{
    margin-top:-20px;
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

.fCCzJv.fCCzJv{
    margin-left:-7px;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #0077E6;
    &&:hover{
       text-decoration:underline; 
    }
}
`

const CardInfoFull = (props) => {

    return (
        <CardComponentInfo>
            <CardHeader className="cardHeader"

                action={

                    <IconButton
                        disableRipple
                        aria-label="settings"
                    >
                        <MoreVertIcon

                            onClick={props.datosCardInfoFull.handleClickSetting}
                            disableRipple />
                    </IconButton>
                }
                title={
                    <>
                        {props.datosCardInfoFull.titulo}

                        <Chip
                            className="tag"
                            label={props.datosCardInfoFull.tag}
                            color="error" />
                    </>}



            />
            <CardContentInfo>


                <Typography
                    className="sub"
                    variant="h5"
                    component="div">
                    {props.datosCardInfoFull.sub}
                </Typography>

                <Typography
                    className="descripcion"
                    color="text.secondary">
                    {props.datosCardInfoFull.descripcion}
                </Typography>

                <Buttons
                    
                    text={props.datosCardInfoFull.button}
                    onClick={props.datosCardInfoFull.handleClickButton}
                    line />
            </CardContentInfo>

        </CardComponentInfo>
    )
}

export default CardInfoFull