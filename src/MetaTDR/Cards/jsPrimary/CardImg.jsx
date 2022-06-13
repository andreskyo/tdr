import React from 'react'
import styled from "styled-components";


const CardContentImg = styled.div`
  &&{
    background: #FFFFFF;
    display:flex;
    flex-direction: column;
    align-items: center;
    padding:10px;
    border-radius: 16px;
    width:308px;
    box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
    :hover{
       box-shadow: 0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.1), 0px 6px 12px rgba(14, 31, 53, 0.08);
    }
}  

.contentImg{
    display:flex;
    align-self: center;
    width: 100%;
.img{
    margin:auto;
    border-radius: 16px 16px 0px 0px;
    width:100%;
    }
}

.cardContent{
  width: 100%;
  display:flex;
  flex-direction: column;
}

.contentText{
  width:90%;
  margin:auto;
 }
    .titulo{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    }
    .descripcion{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    font-size: 14px;
    color:black;
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
      padding-left:1px;
     } 
 }
    
.containerButton{
    width:90%;
    margin:auto;
}
`

const CardImg = (props) => {
    return (
        <CardContentImg>

            {props.datosCardImg.titulo || props.datosCardImg.sub || props.datosCardImg.iconSub || props.datosCardImg.descripcion || props.datosCardImg.button ?

                <div className="cardContent">

                    {props.datosCardImg.img ?

                        <div className="contentImg">

                            {props.datosCardImg.img}

                        </div>

                        : null}

                    <div className="ContentText">

                        {props.datosCardImg.titulo ?

                            <p className="titulo">
                                {props.datosCardImg.titulo}
                            </p>

                            : null}

                        {props.datosCardImg.sub || props.datosCardImg.iconSub ?

                            <div className="iconSub">

                                {props.datosCardImg.iconSub ? props.datosCardImg.iconSub : null}

                                <p className="sub">{props.datosCardImg.sub ? props.datosCardImg.sub : null}</p>

                            </div>

                            : null}

                        {props.datosCardImg.descripcion ?

                            <p className="descripcion">

                                {props.datosCardImg.descripcion.substring(0, 150)}

                            </p>

                            : null}
                    </div>

                    {props.datosCardImg.button ?

                        <div className="containerButton">

                            {props.datosCardImg.button}

                        </div>

                        : null}

                </div>

                : null}

        </CardContentImg>
    )
}

export default CardImg