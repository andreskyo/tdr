import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'


const DivLogued = styled.div`
background: #FFFFFF;
box-shadow: 0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.08);
border-radius: 8px;
>div{
  padding:4px 0px;
}
>div>p{
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  color: #6D7580;
  font-size: 14px;
}
>div>a{
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

>div>button{
width:89%;
text-transform:none;
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 14px;
font-feature-settings: 'ss07' on;
color: #F4F6F9;
}
`






export const Logued = ({ onClick, ...props }) => {
  const renderLogued = () => {
    let resultado = props.datos.map((result) => {

      return <>

        <div className="row">
          {result.boton}
          {result.text}
          {result.link}
        </div>



      </>

    });
    return resultado;
  };


  return (


    <DivLogued>

      {renderLogued()}


    </DivLogued>



  );

};