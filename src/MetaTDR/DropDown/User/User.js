import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Button from '@mui/material/Button';





const Div = styled.div`
background: #FFFFFF;
box-shadow: 0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.08);
border-radius: 8px;

>div>div>ul>li{
margin-bottom:0px;
border:none;
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 16px;
color: #6D7580;

:hover{
    cursor:pointer;
    background:gray;
    color:black;
}
}
>div>div>ul>div{

margin:0px -18px;
}
>div>div>ul>div>button{
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 18px;
color: #09101D;
  :hover{text-decoration:underline;
  background:none;}

}
`





export const User = ({ ...props }) => {

  const renderUsuario = () => {
    let resultado = props.datosUsuario.map((result) => {
      return <>
        <p className="text-center" >{result.imagen}</p>
        <p className="text-center" style={{fontWeight: "600"}}>{result.nombre}</p>
        <p className="text-center">{result.id}</p>
        <p className="text-center">{result.situacion}</p>
      </>

    })
    return resultado
  }
  const renderMenu = () => {
    let resultado = props.menu.map((result) => {
      return <>
        <li class="list-group-item" onClick={result.accion}>{result.link}</li>

      </>

    })
    return resultado
  }



  return (
    <Div className="container-flui m-0">

      <div className="row ">
        <div className="col-6">{renderUsuario()}</div>

        <div className="col-6">
        <ul class="list-group">
          {renderMenu()}
         <div>{props.iconCerrar}{props.cerrar}</div>
        </ul>
        </div>
      </div>

    </Div>


  );

};