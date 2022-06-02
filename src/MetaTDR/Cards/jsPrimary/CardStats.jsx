import React from 'react'
import styled from "styled-components";
import Avatar from '@mui/material/Avatar';


const CardComponentStats = styled.div`
&&{
    background: #FFFFFF;
    box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
    border-radius: 16px;
    display:flex;
    padding:16px 21px;
    width:100%;
    justify-content: space-between;
    
    
    :hover{
       
    box-shadow: 0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.1), 0px 6px 12px rgba(14, 31, 53, 0.08);

    }
}
 .cardContent{
     display:flex;
     flex-direction: column;
     
     .text{
        
        .titulo{
            font-family: 'SF UI Text';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            
            color: #27272A;
            
        }   
        .sub{
            font-family: 'SF UI Text';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 150%;
            color: #78716C;
        }
     }
     .button{
         padding-left:0px;
         
         
     }
     
 }

 .cardIcon{
     display:flex;
     align-items: center;
     .avatar{
         background: #E2E8F0;
         border-radius: 60px;
         color:black;
     }
     
 }

`

const CardStats = (props) => {
    return (
        <CardComponentStats >
            <div className="cardContent">

                <div className="text">

                    <p className="titulo">
                        {props.datosCardStats.titulo}
                    </p>

                    <p className="sub">
                        {props.datosCardStats.sub}
                    </p>

                </div>

                <div className="button">

                    {props.datosCardStats.button}

                </div>

            </div>

            <div className="cardIcon">
                <Avatar className="avatar">
                    {props.datosCardStats.icon}
                </Avatar>
            </div>
        </CardComponentStats >
    )
}

export default CardStats