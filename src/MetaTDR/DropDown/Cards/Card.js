import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Correo from './Correo.png';
import NotificacionC from './NotificacionC.png';

const Div = styled.div`
position: absolute;
width: 260px;
height: auto;
left: 20px;
background: #FFFFFF;
padding:20px;
box-shadow: 0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.08);
border-radius: 8px;
`
const DivDos = styled.div`
position: absolute;
width: 260px;
height: auto;
left: 20px;
top:290px;
background: #FFFFFF;
padding:20px;
box-shadow: 0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.08);
border-radius: 8px;
`
const ImagenCorreo = styled.div`
margin:10px 42px;
padding:0px;

`
const ImagenC = styled.div`
margin:10px 70px;
padding:0px;

`
const Text = styled.div`
>p{
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 15px;
text-align: center;
font-feature-settings: 'ss07' on;
color: #6D7580;
margin: 5px 0px;
}
>a{
  margin:60px;
  &:hover{
    text-decoration:underline;
  }
  
}

`

export const Card = ({...props}) => {
  const renderCard = () => {
    let result = props.Cards.map((card) => {

      return <>
        <Text>
          <p>{card.notificaciones}</p>
          <p>{card.alertas}</p>
          <a href="" onClick={(e)=>{alert(e.preventDefault())}}>{card.bandeja}</a>

        </Text>
        </>

    });
    return result;
  };
  const renderCardss = () => {
    let results = props.Cardb.map((cards) => {

      return <>
        <Text>
          <p>{cards.notificaciones}</p>
          <p>{cards.alertas}</p>
          

        </Text>
        </>

    });
    return results;
  };


  return (
    <div>
      <Div>
        <ImagenCorreo>
          <img src={Correo} />
        </ImagenCorreo>

        {renderCard()}
      </Div>
      <DivDos>

        <ImagenC>
          <img src={NotificacionC} />
        </ImagenC>

        {renderCardss()}

      </DivDos>
    </div>

  );

};


