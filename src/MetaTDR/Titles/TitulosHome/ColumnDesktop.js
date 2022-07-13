import React from 'react'
import styled from "styled-components";

const ComponentColumnDesktop = styled.div`
&&{
  width:100%;
display:flex;
flex-direction:column;
}
.text{
.top{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: #A8A29E;
   }
   .titulo{
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
const ColumnDesktop = (props) => {
  return (
    <ComponentColumnDesktop>

      <div className="text">

      {props.datosColumnDesktop.top ?
        <p className="top">{props.datosColumnDesktop.top}</p>
        :null}
        
       {props.datosColumnDesktop.titulo ? 
        <p className="titulo">{props.datosColumnDesktop.titulo}</p>
        :null}

       {props.datosColumnDesktop.descripcion ? 
        <p className="descripcion">{props.datosColumnDesktop.descripcion}</p>
        :null}

      </div>

      {props.datosColumnDesktop.button ?
      <div className="containerButton">
        {props.datosColumnDesktop.button}
      </div>
      :null}

    </ComponentColumnDesktop>
  )
}

export default ColumnDesktop