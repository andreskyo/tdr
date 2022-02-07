import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Correo from './Correo.png'



const Cardd=styled.div`
background: #FFFFFF;
box-shadow: 0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.08);
border-radius: 8px;
>div>img{width:200px}
>div>a{color:#124596;font-family:Nunito;font-style: normal;font-weight: normal;font-size: 12px;
:hover{text-decoration:underline;background:none;}}
`



export const CardN = ({...props}) => {

  return (

    <Cardd className="container-fluid   m-0 ">
      <div className="row">
    
      <img src={Correo} alt="..." className="rounded mx-auto d-block"/>
      <p className="text-center" style={{'font-family':'Nunito','font-weight':'600'}}>{props.notificacion}</p>
      <p className="text-center" style={{'font-family':'Nunito','font-weight':'400'}}>{props.subNotificacion}</p>
      {props.buttonCorreo}
      </div>
    </Cardd>

  );

};


