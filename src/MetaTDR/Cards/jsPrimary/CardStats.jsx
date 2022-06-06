import React from 'react'
import styled from "styled-components";
import Avatar from '@mui/material/Avatar';


const CardComponentStats = styled.div`
&&{
    background: #FFFFFF;
    box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
    border-radius: 16px;
    padding:16px 21px;
    display: flex;
    justify-content:space-between ;
    :hover{
       box-shadow: 0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.1), 0px 6px 12px rgba(14, 31, 53, 0.08);
    }
}
/*----------------*/
.text{
    
   .titulo{font-family: 'SF UI Text';
    font-size: 16px;
    color: #27272A;}
    .sub{
        font-family: 'SF UI Text';
        font-size: 14px;
        color: #78716C;
        margin:0px ;
       }
}
/*-----------------*/
.button{
   
    
}
/*----------------*/

.cardIcon{
    align-self:center ;
     .avatar{
         color:#27272A;
         background: #E2E8F0;
         border-radius: 60px;
         
     }
}

`

const CardStats = (props) => {
    return (
        <CardComponentStats >
            {props.datosCardStats.titulo || props.datosCardStats.sub || props.datosCardStats.button ?
                <div className="cardContent">

                    <div className="text">

                        {props.datosCardStats.titulo ?

                            <p className="titulo">
                                {props.datosCardStats.titulo}
                            </p>

                            : null}

                        {props.datosCardStats.sub ?
                            <p className="sub">
                                {props.datosCardStats.sub}
                            </p>

                            : null}
                    </div>

                    {props.datosCardStats.button ?
                        <div className="button">

                            {props.datosCardStats.button}

                        </div>
                        : null}
                </div>
                : null}

            {props.datosCardStats.icon ?
                <div className="cardIcon">
                    <Avatar className="avatar">
                        {props.datosCardStats.icon}
                    </Avatar>

                </div>
                : null}
        </CardComponentStats >
    )
}

export default CardStats