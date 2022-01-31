import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Correo from './Correo.png';
import NotificacionC from './NotificacionC.png';

const Div = styled.div`
@media (max-width:320px)  {
  
  width:200px;
  
  margin:0px;
}
@media (min-width:321px)  {
  
  width:340px;
  
  margin:0px;
}
@media (min-width:415px )  {
  
  width:750px;
}
position: absolute;
width:340px;
height: auto;

background: #FFFFFF;
padding:20px;
box-shadow: 0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.08);
border-radius: 8px;

`

const CardUno = styled.div`
width:100%;

`
const DivDos = styled.div`
position: absolute;
width: 350px;
height: auto;
top:290px;
background: #FFFFFF;
padding:20px;
box-shadow: 0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.08);
border-radius: 8px;
@media (max-width:320px)  {
  
  width:250px;
  
  margin:0px;
}
@media (min-width:321px)  {
  
  width:340px;
  
  margin:0px;
}
@media (min-width:415px)  {
  
  width:750px;
  
  margin:0px;
}

`
const ImagenCorreo = styled.div`

width:100%;
>img{margin:0px 70px;
}
padding:0px;

@media (max-width:568px)  {
  >img{
    margin:0px 40px;
  }
  
}
@media (min-width:414px)  {
  
 >img {margin:0px 80px;}
}
@media (min-width:834px)  {
  
  >img {margin:0px 300px;}
}

`
const ImagenC = styled.div`
margin:10px 100px;
padding:0px;
@media (max-width:568px) {
  >img{ 
   margin:0px -25px;}
}
@media (min-width:414px)  {
  
  >img {margin:0px 10px;}
 }
 @media (min-width:834px)  {
   
   >img {margin:0px 220px;}
 }

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
  margin:0px 80px;
  &:hover{
    text-decoration:underline;
  }
  
}
@media (max-width:568px )
{width:250px;
  
 >a{margin:0px 50px;}
}
@media (min-width:414px)  {
  
  width:330px;
  
  >a{ margin:0px 90px;}
}
@media (min-width:834px)  {
  
  width:750px;
  a{margin:0px 300px;}
}


`

export const Card = ({ onClick,...props }) => {

 

  const renderCard = () => {
    let result = props.Cards.map((card) => {

      return <>
        <Text>
          <p>{card.notificaciones}</p>
          <p>{card.alertas}</p>
          <a href="" onClick={onClick}>{card.bandeja}</a>

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
    <>
      <Div>
        <CardUno>
          <ImagenCorreo>
            <img src={Correo} />
          </ImagenCorreo>

          {renderCard()}
        </CardUno>
      </Div>

      <DivDos>

        <ImagenC>
          <img src={NotificacionC} />
        </ImagenC>

        {renderCardss()}

      </DivDos>
    </>

  );

};


