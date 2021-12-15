import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import IconA from './IconA.png'
import IconB from './IconB.png'
import IconC from './IconC.png'
import Rectangle from './Rectangle.png'


const Menu = styled.div`
position: absolute;
width: 256px;
height: 240px;
padding:15px;
left: 20px;
top: 20px;
background: #FFFFFF;
box-shadow: 0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.08);
border-radius: 8px;
`

const IconAA = styled.div`
position: absolute;
width: 34px;
height: 34px;
left: 15px;
top: calc(26% - 34px/2 + 0.5px);
`
const IconBB = styled.div`
position: absolute;
width: 34px;
height: 34px;
left: 15px;
top: calc(49% - 34px/2 + 0.5px);
`
const IconCC = styled.div`
position: absolute;
width: 34px;
height: 34px;
left: 15px;
top: calc(78% - 34px/2 + 0.5px);
`

const RectangleAA = styled.div`
position: absolute;
width: 3px;
height: 60px;
right: 4px;
top: 30px;
background: #6D7580;
opacity: 0.44;
border-radius: 20px;
`
const TextHora=styled.div`
position: static;
width: 176px;
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 10px;
line-height: 14px;
font-feature-settings: 'ss07' on;
color: #6D7580;
opacity: 0.64;
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
margin: 8px 50px;
padding:5px;

`
const TextMulta=styled.div`
position: static;
height: 28px;
width:170px;
left: 0px;
right: 0px;
top: 16px;
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 13px;
line-height: 12px;
font-feature-settings: 'ss07' on;
color: #09101D;
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
margin: -5px 55px;

`
const TextVencimiento=styled.div`
position: static;
width:200px;
height: 14px;
left: 0px;
right: 0px;
top: 46px;
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 10px;
line-height: 14px;
font-feature-settings: 'ss07' on;
color: #09101D;
flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;
margin: 2px 55px;

`
const Notificaciones=styled.a`
position: absolute;
height: 16px;
left: 20px;
right: 20px;
bottom: 10px;
font-family: Nunito;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;
text-align: center;
color: #124596;
margin:0px 20px;
`
const Sheet=styled.div`
position: absolute;
left: 0px;
right: 0px;
top: 0px;
bottom: 80px;
background: #124596;
opacity: 0.04;


`
export const MenuInput = () => {

    return (

        <div>

            <Menu>
                
                <IconAA> <img src={IconA} /> </IconAA>
                <TextHora>hace 3 horas</TextHora>
                <TextMulta>Tienes una multa próxima a vencer</TextMulta>
                <TextVencimiento>Vence 24/10/2019</TextVencimiento>
                <Sheet></Sheet>
                <RectangleAA></RectangleAA>
                <IconBB> <img src={IconB} /> </IconBB>
                <TextHora>hace 6 horas</TextHora>
                <TextMulta>Tienes una multa próxima a vencer</TextMulta>
                <TextVencimiento>Vence 24/10/2019</TextVencimiento>
                <IconCC> <img src={IconC} /> </IconCC>
                <TextHora>hace 24 agosto</TextHora>
                <TextMulta>Tienes una multa próxima a vencer</TextMulta>
                <TextVencimiento>Vence 24/10/2019</TextVencimiento>
                <Notificaciones>Ver todas las notificaciones</Notificaciones>
            </Menu>


        </div>
    );

};