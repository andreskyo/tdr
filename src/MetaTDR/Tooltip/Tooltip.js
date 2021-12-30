import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Ellipse from './Ellipse.png'

const Carddd=styled.div`
display: flex;
width:300px;
flex-direction: column;
align-items: flex-start;
padding: 10px;
position: absolute;
height: 68px;
left: 30px;
top: 10px;
background: #FFFFFF;
border: 1px solid #EBEEF2;
box-sizing: border-box;
border-radius: 6px;
filter: drop-shadow(0px 4px 8px rgba(14, 31, 53, 0.16));
`
const Texttt=styled.div`
>p{
height: 38px;
font-family: Nunito;
font-style: normal;
font-weight: 500;
font-size: 14px;
color: #09101D;
margin: -10px 0px;
}
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
position: static;
width: 260px;
height: 38px;
margin: 15px 0px;
`



/*-----------------*/

const Collapse = styled.div`
position: absolute;
width: 350px;
height: 359px;
left: 5px;
top:120px;
filter: drop-shadow(0px 4px 8px rgba(14, 31, 53, 0.16));

`
const Cardd = styled.div`
display: flex;
flex-direction: column;
padding: 15px;
background: #FFFFFF;
border-radius: 6px;
padding:10px;
`
const Planes = styled.div`
display: flex;
margin:10px;

`
const Frame2835 = styled.div`
>p:first-child{
  height: 7px;
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  color: #545D69;
}
>p{
height: 9px;
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 12px;
display: flex;
color: #545D69;
margin: 5px 0px;
}
width: 130px;
height: 38px;
flex: none;
margin: 0px 17.5px;
`
const Estado=styled.div`
>p:first-child{
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 10px;
color: #545D69;
margin: 2px 0px;
}
>p{
height: 9px;
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 12px;
color: #545D69;
margin: 5px;
}
margin: 0px 40px;
`

const DivText = styled.div`
>p{
font-family: Nunito;
font-weight: 550;
font-size: 11px;
display: flex;
color: #545D69;
margin: 0px 0px;
}
display: flex;
flex-direction: column;
padding: 5px;
width: 260px;
height: 30px;
background: #F4F6F9;
border-radius:5px;
margin:0px 30px;

`
const Descuentos = styled.div`
display: flex;
padding:5px;
width:100%;
height:20px;


`
const TotalA = styled.ul`
>p:first-child{
  margin:-60px 15px;
  height: 17px;
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  display: flex;
  color: #545D69;
}
>li{
width: 160px;
font-family: Nunito;
font-style: normal;
font-weight: normal;
list-style:none;
font-size: 10px;
color: #545D69;
}

`
const TotalB = styled.ul`
>p{
  margin:44px 190px;
  height: 16px;
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  display: flex;
  color: #09101D;
  }
>li{
font-weight:500;
font-family: Nunito;
font-size: 12px;
display: flex;
color: #09101D;
}

`
const Total = styled.div`
>p{
position:absolute;
right: 65px;
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 12px;
display: flex;
color: #19AB4F;
}
>p:first-child{
  left:45px;
  font-family: Nunito;
  font-style: normal;
  font-size: 13px;
  color: #19AB4F;
}
height:40px;
`

const Impuesto = styled.div`
>p:first-child{
font-family: Nunito;
font-size: 12px;
color: #545D69;
margin: 20px 35px;
}
width: 260px;
height: 19px;
margin: 5px 0px;

`
export const Tooltip = ({ ...props }) => {
  const renderDatos = () => {
    let resultado = props.Datos.map((data) => {

      return <>

        <Descuentos>
          <TotalA><li>{data.label}</li></TotalA>
          <TotalB><li>{data.value}</li></TotalB>

        </Descuentos>
</>

    });
    return resultado;
  }



  return (

<div>
<Carddd><Texttt><p>Usá esta Base Imponible para tu declaración de Bienes Personales 2020</p></Texttt></Carddd>

    <Collapse>
      <Cardd>
        <Impuesto><p>Descuentos</p>
        <TotalA><p>{props.label}</p></TotalA>
          <TotalB><p>{props.value}</p></TotalB>
        </Impuesto>
        
        {renderDatos()}

        <Total><p>{props.Total}</p>
          <p>{props.Monto}</p></Total>


        <DivText>
          <p>{props.TextDiv}</p>
        </DivText>

        <Planes>
          <Frame2835><p>Planes</p><p>{props.apto}</p></Frame2835>
          <Estado><p>Estado</p><p><img src={Ellipse} alt="" />A vencer</p></Estado>
        </Planes>
        



      </Cardd>
    </Collapse>



    </div>
  );

};

