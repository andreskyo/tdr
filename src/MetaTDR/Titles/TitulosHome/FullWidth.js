import React from 'react'
import styled from "styled-components";

const ComponentFullWidth = styled.div`
&&{
width:100%;
display:flex;
flex-direction:column;

}
.text{
  text-align:center;
  margin:auto; 
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

.containerButton{
  align-self:center ;
}

`


export const FullWidth = (props) => {
  return (
    <ComponentFullWidth>

      <div className="text">

        {props.datosFullWidth.top ?
          <p className="top">{props.datosFullWidth.top}</p>
          : null}

        {props.datosFullWidth.titulo ?
          <p className="titulo">{props.datosFullWidth.titulo}</p>
          : null}

        {props.datosFullWidth.descripcion ?
          <p className="descripcion">{props.datosFullWidth.descripcion}</p>
          : null}

      </div>

      {props.datosFullWidth.button ?
        <div className="containerButton">
          {props.datosFullWidth.button}
        </div>
        : null}

    </ComponentFullWidth>
  )
}

export default FullWidth