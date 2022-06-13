import React from 'react'
import styled from "styled-components";
import Avatar from '@mui/material/Avatar';


const CardComponentAcceso = styled.div`
     &&{
       background: #FFFFFF;
       box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
       border-radius: 16px;
       display:flex;
       padding:20px;
       width:410px;
       :hover{
        box-shadow: 0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.1), 0px 6px 12px rgba(14, 31, 53, 0.08);
       }

     .avatar{
         align-self:center;
        .avatarIcon{
            border: 1.14341px solid #78716C;
            border-radius: 60px;
            color: #78716C;
            background: #FFFFFF;
            >svg{
            font-size:30px;
        }  
        }
    }


    .cardContent{
        padding-left:10px;
    }
     .text{
         
        .titulo{
            color: #27272A;
            font-family: 'SF UI Text';
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 150%;
            margin:0px;
        } 
        .descripcion{
            font-family: 'SF UI Text';
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 150%;
            color: #78716C;
            padding-bottom:10px;
            margin:0px;
        }
         
     }
    }
   
`

const CardAcceso = (props) => {
    return (

        <CardComponentAcceso>

            {props.datosAcceso.icon ?

                <div className="avatar ">

                    <Avatar
                        className="avatarIcon"
                        sx={{ width: 60, height: 60 }}>

                        {props.datosAcceso.icon}
                    </Avatar>

                </div>

                : null}

            {props.datosAcceso.titulo || props.datosAcceso.descripcion || props.datosAcceso.button ?

                <div className="cardContent ">

                    {props.datosAcceso.titulo || props.datosAcceso.descripcion ?

                        <div className="text">

                            {props.datosAcceso.titulo ?

                                <p className="titulo">

                                    {props.datosAcceso.titulo}

                                </p>

                                : null}

                            {props.datosAcceso.descripcion ?

                                <p className="descripcion">

                                    {props.datosAcceso.descripcion}

                                </p>

                                : null}
                        </div>

                        : null}

                    {props.datosAcceso.button ?

                        <div className="containerButton ">

                            {props.datosAcceso.button}

                        </div>

                        : null}
                </div>

                : null}

        </CardComponentAcceso >
    )
}

export default CardAcceso