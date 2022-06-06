import React from 'react'
import styled from "styled-components";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Buttons } from '../../Buttons/Butttons/Buttons';
import Typography from '@mui/material/Typography';


const CardContentImg = styled.div`
  &&{
    background: #FFFFFF;
    box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12);
    :hover{
       box-shadow: 0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.1), 0px 6px 12px rgba(14, 31, 53, 0.08);
    }
    display:flex;
    flex-direction: column;
    align-items: center;
    padding-bottom:20px;
    width:100%;
    border-radius: 16px;
}  

/*--------------------------*/

.contentImg{
    display:flex;
    align-self: center;
    width: 100%;
    
    
.img{
    margin:auto;
    padding-top:8px;
    border-radius: 16px 16px 0px 0px;
    width:100%;
    padding-right:10px;
    padding-left:10px;
   }
}

.cardContent{
  width: 100%;
  display:flex;
  flex-direction: column;
  
}

.contentText{
  width:80%;
  margin:auto;
  
}
    .titulo{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    
    }

  .iconSub{
    display:flex;
    color:#78716C;
   >svg{
       font-size: 20px;
   }
  .sub{  
      font-family: 'SF UI Text';
      font-style: normal;
      font-weight: 400;
      font-size:12px;
      padding-left:5px;
    } 
  }
    

.descripcion{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    font-size: 14px;
    color:black;
}  
/*-----------------------*/

.containerButton{
    width:80%;
    margin:auto;
}
`

const CardImg = (props) => {
    return (
        <CardContentImg>


            {props.datosCardImg.titulo || props.datosCardImg.sub || props.datosCardImg.iconSub || props.datosCardImg.descripcion || props.datosCardImg.button ?
                <CardContent className="cardContent">


                    {props.datosCardImg.img ?

                        <div className="contentImg">

                            {datosCardImg.img}

                        </div>

                        : null}

                    <div className="ContentText">
                        {props.datosCardImg.titulo ?

                            <p className="titulo">
                                {datosCardImg.titulo}
                            </p>
                            : null}

                        {props.datosCardImg.sub || props.datosCardImg.iconSub ?
                            <div className="iconSub">
                                {datosCardImg.iconSub ? datosCardImg.iconSub : null}
                                <p className="sub">{datosCardImg.sub ? datosCardImg.sub : null}</p>
                            </div>

                            : null}

                        {props.datosCardImg.descripcion ?

                            <p
                                className="descripcion"
                            >
                                {datosCardImg.descripcion.substring(0, 150)}
                            </p>

                            : null}
                    </div>
                    {props.datosCardImg.button ?

                        <div className="containerButton">

                            {datosCardImg.button}

                        </div>

                        : null}

                </CardContent>
                : null}

        </CardContentImg>
    )
}

export default CardImg