import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Vector from './Vector.png';
import RcIcons from './RcIcons.png';
import Logout from './Logout.png';

const Menu = styled.div`
position: absolute;
width: 391px;
height: 250px;
left: 20px;
top: 5px;
background: #FFFFFF;
box-shadow: 0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.08);
border-radius: 8px;
`

const MenuDos = styled.div`
position: absolute;
width: 391px;
height: 250px;
left: 20px;
top: 300px;

background: #FFFFFF;
box-shadow: 0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.08);
border-radius: 8px;
`
const Name = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
position: absolute;
width: 175px;
height: 114px;
left: 10px;
top: 65px;
`
const UserIcon = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
position: static;
width: 52px;
height: 52px;
left: 61.5px;
top: 0px;
flex: none;
order: 0;
flex-grow: 0;
margin: 5px 0px;


`
const TextA = styled.div`
position: static;
top: 57px;
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 16px;
display: flex;
align-items: center;
text-align: right;
font-feature-settings: 'ss07' on;
color: #09101D;
flex: none;
order: 1;
flex-grow: 0;
margin: 15px 0px;
`
const TextB = styled.div`
position: static;
width: 80px;
height: 14px;
left: 47.5px;
top: 79px;
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
text-align: right;
font-feature-settings: 'ss07' on;
color: #858C94;
flex: none;
order: 2;
flex-grow: 0;
margin: 5px 0px;
`
const TextC = styled.div`
position: static;
width: 125px;
height: 16px;
left: 5px;
top: 98px;
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;
display: flex;
align-items: center;
text-align: center;
color: #858C94;
flex: none;
order: 3;
flex-grow: 0;
margin: 3px 0px;
`
const Line = styled.div`
border-left: 1.5px solid #F4F6F9;
height: 90%;
margin:10px 210px;
`


const RrcIconA = styled.div`
position:absolute;
width: 520px;
height: 20px;
left: 220px;
top: 12px;

`

const RrcIconB = styled.div`
position: absolute;
width: 20px;
height: 20px;
left: 220px;
top: 60px;`

const RrcIconC = styled.div`
position: absolute;
width: 20px;
height: 20px;
left: 220px;
top: 100px;`

const RrcIconD = styled.div`
position: absolute;
width: 20px;
height: 20px;
left: 220px;
top: 140px;`

const RrcIconE = styled.div`
position: absolute;
width: 20px;
height: 20px;
left: 220px;
top: 180px;`

const RrcIconCerrar = styled.div`
position: absolute;
width: 150px;
height: 20px;
left: 220px;
top: 220px;`

const TextCerrar = styled.div`
&:hover ${User}{font-weight: bold;}
cursor:pointer;
position: absolute;
height: 19px;
left: 36px;
right: 12px;
top: 1px;
font-family: Nunito;
font-style: normal;

font-size: 14px;
line-height: 19px;
display: flex;
align-items: center;
font-feature-settings: 'ss07' on;
color: #09101D;
`

const TextUno = styled.div`
&:hover ${User}{color:black;}
color: #858C94;
font-weight: bold;
cursor:pointer;
position: absolute;
height: 19px;
left: 36px;
right: 12px;
top: 1px;
font-family: Nunito;
font-style: normal;
font-size: 15px;
line-height: 19px;
display: flex;
align-items: center;
margin:5px 0px;
font-feature-settings: 'ss07' on;

`
const P = styled.p`
color:green;
`
const Div=styled.div`
&:hover ${User}{background:   #fefaf9 ; 
    
margin:-30px -10px;
width:180px;
height:40px;}
`

const DivDos=styled.div`
&:hover ${User}{background:   #fefaf9 ; 
    
margin:-0px -10px;
width:180px;
height:40px;}
`



export const User = (props) => {

    return (
        <div>

            <Menu>

                <Line></Line>
                <Name>

                    <UserIcon>
                        <img src={Vector} />
                    </UserIcon>
                   
                        <TextA>
                            {props.textNombre}
                        </TextA>
                    
                    <TextB>
                        {props.textId}
                    </TextB>
                    <TextC>
                        Situación fiscal: <P>{props.textSituacion}</P>
                    </TextC>
                </Name>

                <RrcIconA>
                    
                    <img src={RcIcons} />
                    <Div><TextUno>Impuestos</TextUno></Div>
                    
                </RrcIconA>

                <RrcIconB>
                    <img src={RcIcons} />
                   <Div><TextUno>Representados</TextUno></Div>
                </RrcIconB>
                <RrcIconC>
                    <img src={RcIcons} />
                   <Div><TextUno>Fiscalizaciones</TextUno></Div> 
                </RrcIconC>
                <RrcIconD>
                    <img src={RcIcons} />
                   <Div><TextUno>Corredor</TextUno></Div>
                </RrcIconD>
                <RrcIconE>
                    <img src={RcIcons} />
                    <Div> <TextUno>Procurador</TextUno></Div>
                </RrcIconE>
                <RrcIconCerrar>
                    <img src={Logout} />
                    <TextCerrar>Cerrar sesión</TextCerrar>
                </RrcIconCerrar>



            </Menu>

            <MenuDos>
                <Line></Line>
                <Name>

                    <UserIcon>
                        <img src={Vector} />
                    </UserIcon>
                    <TextA>
                        {props.textNombre}
                    </TextA>

                    <TextB>
                        {props.textId}
                    </TextB>
                    <TextC>
                        Situación fiscal: <P>{props.textSituacion}</P>
                    </TextC>
                </Name>


                <RrcIconA>
                  <DivDos><TextUno>Impuestos</TextUno></DivDos>
                </RrcIconA>


                <RrcIconB>

                <DivDos>  <TextUno>Representados</TextUno></DivDos>
                </RrcIconB>
                <RrcIconC>

                <DivDos>  <TextUno>Fiscalizaciones</TextUno></DivDos>
                </RrcIconC>
                <RrcIconD>

                <DivDos>  <TextUno>Corredor</TextUno></DivDos>
                </RrcIconD>
                <RrcIconE>

                <DivDos>  <TextUno>Procurador</TextUno></DivDos>
                </RrcIconE>
                <RrcIconCerrar>

                  <TextCerrar>Cerrar sesión</TextCerrar>
                </RrcIconCerrar>



            </MenuDos>

        </div>
    );

};