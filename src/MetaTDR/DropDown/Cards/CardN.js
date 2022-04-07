import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";




const Cardd=styled.div`
background: #FFFFFF;
box-shadow: 0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.08);
border-radius: 8px;
.imagen{width:200px}
.button{color:#124596;font-family:"Nunito";font-style: normal;font-weight: 400;font-size: 16px;text-transform:none;
:hover{text-decoration:underline;background:none;}}
`



export const CardN = ({...props}) => {

  return (

    <Cardd className="container-fluid   m-0 ">
      <div className="row">
    
      {props.imagen}
      <p className="text-center" style={{'font-family':'Nunito','font-weight':'600'}}>{props.notificacion}</p>
      <p className="text-center" style={{'font-family':'Nunito','font-weight':'400'}}>{props.subNotificacion}</p>
      {props.buttonCorreo}
      </div>
    </Cardd>

  );

};


