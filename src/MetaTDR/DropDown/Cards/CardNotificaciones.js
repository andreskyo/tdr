import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";




const Cardd=styled.div`
background: #FFFFFF;
box-shadow: 0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.08);
border-radius: 8px;
.imagen{width:150px;}

`



export const CardNotificaciones = ({...props}) => {

  return (

    <Cardd className="container-fluid   m-0 ">
      <div className="row">
    
      {props.imagen}
      <p className="text-center" style={{'font-family':'Nunito','font-weight':'600'}}>{props.notificacion}</p>
      <p className="text-center" style={{'font-family':'Nunito','font-weight':'400'}}>{props.subNotificacion}</p>
      
      </div>
    </Cardd>

  );

};