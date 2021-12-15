import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import o from './o.png'
import NotificacionC from './NotificacionC.png'
import Correo from './Correo.png'


const Menu = styled.div`
position: absolute;
width: 256px;
height: 230px;
left: 20px;
background: #FFFFFF;
box-shadow: 0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.08);
border-radius: 8px;
`

const DropdownA = styled.div`
position: absolute;
height: 84px;
left: 9px;
right: 9px;
top: 15px;
`

const KuiButtonA = styled.button`
display: flex;
flex-direction: column;
align-items: center;
padding: 8.5px 16px;
position: absolute;
width:100%;
height: 40px;
left: 1px;
right: 1px;
top: 1px;
background: #53AAE0;
border: 1px solid #53AAE0;
border-radius: 8px;
`
const TextCuentaA = styled.div`
position: static;
width: 108px;
height: 19px;
left: calc(50% - 108px/2);
top: calc(50% - 19px/2);
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 19px;
color:white;
`
const TextCuentaSub = styled.div`
position: absolute;
height: 35px;
top: 35px;
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 20px;
display: flex;
align-items: center;
color: #6D7580;
`
const A = styled.a`
position: absolute;
height: 35px;
top: 15px;
cursor:pointer;
text-decoration:underline;
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 20px;
display: flex;
margin:10px 50px;

`

/*--------Line----------*/
const LineL = styled.div`
position: absolute;
height: 1px;
width:40%;
left: 20.79px;
right: 30.42px;
top: calc(50% - 1px/2 + 1.69px);
background: #EBEEF2;
transform: rotate(180deg);

`
const O = styled.div`
position: absolute;
height: 6.95px;
left: 130px;
right: 112px;
top: 105px;
`


const LineR = styled.div`
position: absolute;
height: 1px;
width:40%;
left: 140.79px;
right: 30.42px;
top: calc(50% - 1px/2 + 1.69px);
background: #EBEEF2;
transform: rotate(180deg);

`

/*-----------------------*/
const KuiButtonB = styled.button`
position: absolute;
height: 40px;
border-radius:8px;
border:none;
width:92%;
top:130px;
left: 10px;
background: #0072BB;
border: 1px solid #0072BB;
color:white;
`

const TextCuentaSubB = styled.div`
position: absolute;
height: 35px;
top:170px;
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 20px;
display: flex;
align-items: center;
color: #6D7580;
margin:0px 50px ;
`
const AB = styled.a`
position: absolute;
height: 35px;
top:20px;
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 20px;
display: flex;
align-items: center;
cursor:pointer;
text-decoration:underline;
margin:0px 35px ;
width:200px;
`
/*----Card notificacion-----*/

const MenuN = styled.div`
cursor:pointer;
position: absolute;
width: 250px;
height: 240px;
left: 20px;
background: #FFFFFF;
box-shadow: 0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.08);
border-radius: 8px;
`
const MenuItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 15px;
position: absolute;
left: 0px;
right: 0px;
top: 1.58px;
bottom: 1.58px;

`
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
position: static;
height: 168.85px;
left: 15px;
right: 15px;
top: 15px;
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
margin: 0px 0px;
`

const IconNotificacion = styled.div`
position: static;
height: 98.85px;
left: 57.77px;
right: 56.77px;
top: 0px;
flex: none;
order: 0;
flex-grow: 0;
margin: 15px 0px;
`
const TextNotificacionA = styled.div`
position: static;
height: 17px;
left: 0px;
right: 0px;
top: 0px;
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 50px;
display: flex;
align-items: center;
text-align: center;
font-feature-settings: 'ss07' on;
color: #6D7580;
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
margin: 0px 42px;
`

const TextNotificacionB = styled.div`
position: static;
height: 28px;
left: 0px;
right: 0px;
top: 27px;
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
text-align: center;
font-feature-settings: 'ss07' on;
color: #6D7580;
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
margin: 10px 0px;
`
const ANC= styled.a`
&:hover ${Card}{
  text-decoration:underline;
 }
position: absolute;
height: 35px;
color: #124596;
top:196px;
font-family: Nunito;
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 20px;
display: flex;
align-items: center;
cursor:pointer;
margin:0px 50px ;
width:200px;
`

export const Card = ({ size, }) => {

  return (
    size === 'Medium' ? (
      <MenuN>
        <MenuItems>
          <Container>
            <IconNotificacion>
              <img src={NotificacionC} />
            </IconNotificacion>
            <TextNotificacionA>
              No hay notificaciónes

            </TextNotificacionA>

            <TextNotificacionB>
              Regresa más tarde, no hay alertas por el momento
            </TextNotificacionB>
          </Container>
        </MenuItems>
      </MenuN>)

      : size === 'Large' ? (<Menu>
        <DropdownA>
          <KuiButtonA>
            <TextCuentaA>
              Ingresar con CIDI
            </TextCuentaA>
            <TextCuentaSub>
              ¿No tenes Ciudadano Digital?<A>Crear cuenta</A>
            </TextCuentaSub>
          </KuiButtonA>
        </DropdownA>

        <LineL></LineL>
        <O><img src={o} /></O>
        <LineR></LineR>
        <KuiButtonB>
          Ingresar con Afip
        </KuiButtonB>
        <TextCuentaSubB>
          ¿No tenes Clave Fiscal?<AB>Solicitar clave</AB>
        </TextCuentaSubB>
      </Menu>) : size === 'Small' ? (<MenuN>
        <MenuItems>
          <Container>
            <IconNotificacion>
              <img src={Correo} />
            </IconNotificacion>
            <TextNotificacionA>
              No hay notificaciónes

            </TextNotificacionA>

            <TextNotificacionB>
              Regresa más tarde, no hay alertas por el momento
              <ANC>Ir a bandeja de entrada</ANC>
            </TextNotificacionB>
            
          </Container>
        </MenuItems>
      </MenuN>) : null


  );

};


