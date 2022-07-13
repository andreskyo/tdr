import React from 'react';
import styled from "styled-components";

const ComponentColumnMobile = styled.div`
&&{
display:flex;
flex-direction:column ;
width:100%;
}
.text{
   
    margin:auto;
   .top{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: #A8A29E;
    text-align:center ;
   }
   .titulo{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 150%;
    color: #27272A;
    text-align:center ;
    
}
   .descripcion{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #27272A;
    text-align:start;
    
   }
}

.containerButton{
  align-self:center ;
} 

`

export const ColumnMobile = (props) => {
  return (
    <ComponentColumnMobile>
      <div className="text">

        {props.datosColumnMobile.top ?
          <p className="top">{props.datosColumnMobile.top}</p>
          : null}

        {props.datosColumnMobile.titulo ?
          <p className="titulo">{props.datosColumnMobile.titulo}</p>
          : null}

        {props.datosColumnMobile.descripcion ?
          <p className="descripcion">{props.datosColumnMobile.descripcion}</p>
          : null}

      </div>

      
        <div className="containerButton">
          {props.datosColumnMobile.button}
        </div>
        


    </ComponentColumnMobile>
  )
}

export default ColumnMobile