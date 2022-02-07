import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import NotificacionC from './NotificacionC.png'



const Cardd=styled.div`
background: #FFFFFF;
box-shadow: 0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.08);
border-radius: 8px;
>div>img{width:150px;}

`



export const CardNotificaciones = ({...props}) => {

  return (

    <Cardd className="container-fluid   m-0 ">
      <div className="row">
    
      <img src={NotificacionC} alt="..." className="rounded mx-auto d-block"/>
      <p className="text-center" style={{'font-family':'Nunito','font-weight':'600'}}>{props.notificacion}</p>
      <p className="text-center" style={{'font-family':'Nunito','font-weight':'400'}}>{props.subNotificacion}</p>
      
      </div>
    </Cardd>

  );

};