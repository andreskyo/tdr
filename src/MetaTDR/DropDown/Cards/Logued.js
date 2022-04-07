import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";




const DivIniciar = styled.div`
.botonIniciar{
  background:none;
  border:none;
  font-family: 'Nunito';
 font-style: normal;
font-weight: bold;
font-size: 15px;
line-height: 19px;
:hover{
  color:black;
}
}
`


const DivLogued = styled.div`
background: #FFFFFF;
box-shadow: 0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.08);
border-radius: 8px;
.divLogued{
  padding:4px 0px;
}
.texto{
  font-family: 'Nunito';
  font-style: normal;
  font-weight: normal;
  color: #6D7580;
  font-size: 14px;
}
.link{
  font-size: 13px;
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  line-height: 2px;
  :hover{
    text-decoration:underline;
    cursor:pointer;
  }
  
}

.button{
width:85%;
text-transform:none;
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 14px;
font-feature-settings: 'ss07' on;
color: #F4F6F9;
background:#0072BB;
:hover{
  background:#53AAE0
}
}


`






export const Logued = ({ onClick, ...props }) => {
  const [selected, setSelected] = React.useState(false);

  const abrir = () => {
    selected ? setSelected(false) : setSelected(true)

  }


  const renderLogued = () => {
    let resultado = props.datos.map((result) => {

      return <>

        <div className="row divLogued">
          {result.boton}
          {result.text}
          {result.link}
        </div>



      </>

    });
    return resultado;
  };


  return (

    <div className="container-fluid m-0 p-0">

      <DivIniciar className="row-fluid col-12 m-0 text-center">
        <button className="text-center botonIniciar" onClick={abrir}>{props.iconIniciar} Iniciar sesión</button>

      </DivIniciar>

      {selected ?
        <DivLogued className="row-fluid col-12 mt-2">

          {renderLogued()}


        </DivLogued>
        : null}

    </div>
    
  );

};