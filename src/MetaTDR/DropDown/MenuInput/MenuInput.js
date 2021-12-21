import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Rectangle from './Rectangle.png'
import IconA from './IconA.png'
import IconB from './IconB.png'
import IconC from './IconC.png'
import IconD from './IconD.png'
import IconE from './IconE.png'
import IconF from './IconF.png'
import IconG from './IconG.png'
import IconH from './IconH.png'



const DivMenu = styled.div`
position: absolute;
width: 240px;
padding:15px;
left: 20px;
top: 20px;
height:200px;
background: #FFFFFF;
box-shadow: 0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.08);
border-radius: 8px;
overflow:scroll;

`

const MenuUl = styled.ul`
width:100%;
margin:auto -15.1px;
`

const Li = styled.li`
list-style:none;
cursor:pointer;
padding:8px;

`

const TextHoora=styled.p`
position: static;
width: 176px;
height: 14px;
left: 0px;
top: 0px;
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
margin: 12px 6px;
`

const TextMuulta=styled.p`
position: static;
height: 28px;
left: 0px;
right: 0px;
top: 16px;
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 14px;
font-feature-settings: 'ss07' on;
color: #09101D;
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
margin: 7px 16px;
`

const TextVeencimiento=styled.p`
position: static;
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
margin: -8px 16px;
`

const IconAa=styled.image`
position:absolute;
width: 34px;
height: 34px;
left: 15px;
margin:50px -10px;
`

const IconAA=styled.image`
position:absolute;
width: 34px;
height: 34px;
left: 15px;
margin:42px -10px;
`
const Rectanggle=styled.image`
position: absolute;
width: 3px;
height: 60px;
right: 4px;
top: 8px;
background: #6D7580;
opacity: 0.44;
border-radius: 20px;
`
const Notificaciones=styled.p`
position: absolute;
height: 16px;
left: 16px;
right: 16px;
bottom: 1px;

font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;
text-align: center;

/* Action Primary/Default */

color: #124596;
`

export const MenuInput = ({...props}) => {

    return (

        <div>

            <DivMenu>

           
                <MenuUl>
                   
                <IconAa><img src={IconA}/></IconAa>
                    <Li>
                       
                        
                        
                        <TextHoora>{props.TextHora}</TextHoora>
                        <TextMuulta>{props.TextMulta}</TextMuulta>
                        <TextVeencimiento>{props.TextVencimiento}</TextVeencimiento>
                        
                    </Li>
                    <Li>
                       
                       <IconAA><img src={IconB}/></IconAA>
                       
                       <TextHoora>{props.TextHora}</TextHoora>
                       <TextMuulta>{props.TextMulta}</TextMuulta>
                       <TextVeencimiento>{props.TextVencimiento}</TextVeencimiento>
                       
                   </Li>
                   <Li>
                       
                       <IconAA><img src={IconC}/></IconAA>
                       
                       <TextHoora>{props.TextHora}</TextHoora>
                       <TextMuulta>{props.TextMulta}</TextMuulta>
                       <TextVeencimiento>{props.TextVencimiento}</TextVeencimiento>
                       
                   </Li>
                   <Li>
                       
                       <IconAA><img src={IconD}/></IconAA>
                       
                       <TextHoora>{props.TextHora}</TextHoora>
                       <TextMuulta>{props.TextMulta}</TextMuulta>
                       <TextVeencimiento>{props.TextVencimiento}</TextVeencimiento>
                       
                   </Li>
                   <Li>
                       
                       <IconAA><img src={IconE}/></IconAA>
                       
                       <TextHoora>{props.TextHora}</TextHoora>
                       <TextMuulta>{props.TextMulta}</TextMuulta>
                       <TextVeencimiento>{props.TextVencimiento}</TextVeencimiento>
                       
                   </Li>
                   <Li>
                       
                       <IconAA><img src={IconF}/></IconAA>
                       
                       <TextHoora>{props.TextHora}</TextHoora>
                       <TextMuulta>{props.TextMulta}</TextMuulta>
                       <TextVeencimiento>{props.TextVencimiento}</TextVeencimiento>
                       
                   </Li>
                   <Li>
                       
                       <Notificaciones>{props.TextNotificaciones}</Notificaciones>
                       
                   </Li>


                </MenuUl>








            </DivMenu>



        </div>
    );

};