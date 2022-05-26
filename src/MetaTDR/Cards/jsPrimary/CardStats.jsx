import React from 'react'
import styled from "styled-components";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { Buttons } from '../../Buttons/Butttons/Buttons';

const CardComponentStats = styled(Card)`
&&{
    background: #FFFFFF;
    box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
    border-radius: 16px;
}

.icon{
    margin-top:0px;
    width: 50px;
    height: 50px;
    background: #E2E8F0;
    color:#27272A;
    margin-right:10px;
}

.css-1qvr50w-MuiTypography-root {
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    color: #27272A;
}

.css-nrdprl-MuiTypography-root {
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    color: #78716C;
}

.button{
    font-family: 'Nunito';
    margin-top:0px;
    margin-left:-7px;
    font-weight: 600;
    color: #0077E6;
}    

.css-sgoict-MuiCardHeader-action{
    margin-top:15px;
    
}

`

const CardStats = (props) => {
    return (
        <CardComponentStats >

            <CardHeader

                action={
                    props.datosCardStats.icon ?
                        <Avatar
                            className="icon"
                            aria-label="recipe">
                            {props.datosCardStats.icon}
                        </Avatar>
                        : null

                }
                title={props.datosCardStats.titulo ? props.datosCardStats.titulo : null}
                subheader={
                    <>

                        {props.datosCardStats.sub ? props.datosCardStats.sub : null}

                        <br />

                        {props.datosCardStats.sub ? props.datosCardStats.button: null}
                    </>
                }

            />



        </CardComponentStats >
    )
}

export default CardStats