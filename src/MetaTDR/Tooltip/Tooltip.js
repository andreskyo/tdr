import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Card from '@material-ui/core/Card';
import Rectangle from './Rectangle.png'


const Cardd = styled(Card)`
&&{
display: flex;
flex-direction: column;
align-items: flex-start;
width:300px;
padding: 15px;
position: absolute;
height: 68px;
border: 0.5px solid #EBEEF2;
box-sizing: border-box;
border-radius: 6px;
}
>p{
font-family: Nunito;
font-weight: bold;
font-size: 14px;
color: #09101D;
margin: 3px 0px;
}

`
const Carddd = styled(Card)`
&&{
display: flex;
flex-direction: column;
align-items: flex-start;
width:300px;
padding: 15px;
position: absolute;
height: auto;
border: 0.5px solid #EBEEF2;
box-sizing: border-box;
border-radius: 6px;
top:120px;
}
`
const TextL = styled.p`
margin:1px -200px;
width: 161.31px;
top: 0px;
font-family: Nunito;
font-weight: bold;
font-size: 14px;
line-height: 16px;

`
const TextLL = styled.p`
margin:15px -10px;
width: 161.31px;
top: 0px;
font-family: Nunito;
font-weight: bold;
font-size: 16px;

`
const TextR = styled.p`
width: 120px;
height: 19px;
margin:-19px 0px;
top: -1px;
font-family: Nunito;
font-weight:bold;
font-size: 14px;
color: #09101D;


`

const TextRR = styled.p`
width: 120px;
height: 19px;
margin:-19px 190px;
top: -1px;
font-family: Nunito;
font-weight:bold;
font-size: 14px;
color: #09101D;


`
const Li = styled.li`
list-style:none;
width:300px;
height:40px;
padding:0px;
margin:0px 190px;

`
const MenuUl = styled.ul`
width:100%;
margin:auto -20.1px;

`
const Divider = styled.div`
width: 259px;
height: 0px;
left: 0.5px;
top: 163px;
border: 1px solid #EBEEF2;
align-self: center;
margin: 5px 0px;

`
export const Tooltip = ({ ...props }) => {
  const renderDatos = () => {
    let resultado = props.Datos.map((data) => {

      return <>

        <TextLL>{data.descuentos}</TextLL>
        <Li>

          <TextL>{data.label}</TextL>

          <TextR>{data.value}</TextR>
          
        </Li>



      </>

    });
    return resultado;
  }



  return (


    <div>
      <Cardd> <p>Usá esta Base Imponible para tu declaración de Bienes Personales 2020</p></Cardd>

      <Carddd>
        <MenuUl>

          {renderDatos()}
          <Divider></Divider>
         {props.Total}
          <TextRR>{props.Monto}</TextRR> 
         
        </MenuUl>
      </Carddd>

    </div>




  );

};

