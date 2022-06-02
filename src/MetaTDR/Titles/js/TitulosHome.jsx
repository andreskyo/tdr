import React from 'react'
import styled from "styled-components";



const ComponentTituloHome = styled.div`
width:100%;
flex-direction:column;




.text{


   .titulo{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: #A8A29E;
   }
   .sub{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 150%;
    color: #27272A;
    
  }
   .descripcion{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #27272A;
    
   }
}

`

const TitulosHome = ({...props}) => {
  return (
    
    <ComponentTituloHome>
      <div className="text">

        <p className="titulo">{props.datosTitulosHome.titulo}</p>
        <p className="sub">{props.datosTitulosHome.sub}</p>
        <p className="descripcion">{props.datosTitulosHome.descripcion}</p>

      </div>
      <div className="button">
        {props.datosTitulosHome.button}
      </div>

    </ComponentTituloHome>
  )
}

export default TitulosHome