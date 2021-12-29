import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Rectangle from './Rectangle.png'
import mail from './mail.png';


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
overflow-x:hidden;

`

const MenuUl = styled.ul`
width:100%;
margin:auto -20.1px;
`

const Li = styled.li`

&:hover{
    
    cursor:pointer;
    background:  #cfc6c3;
   
}
list-style:none;
width:300px;
height:80px;
padding:0px;
margin:20px -29px;
`

const TextHoora=styled.p`
color:red;
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 10px;
line-height: 14px;
color: #6D7580;
margin: 12px 40px;
`

const TextMuulta=styled.p`
position: static;
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height:13px;
color: #09101D;
margin: -1px 50px;
`

const TextVeencimiento=styled.p`
height: 14px;
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 10px;
color: #09101D;
margin: 7px 45px;
`

const Icon=styled.image`
position:absolute;
width: 34px;
height: 34px;
left: 15px;
margin:18px -12px;
`
const IconMail=styled.image`
position:absolute;
width: 34px;
height: 34px;
left: 15px;
margin:-3px -12px;

`
const Domicilio=styled.a`
&:hover{
    text-decoration:underline;
    cursor:pointer;
}
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 12px;
margin:0px 30px;
`

const Notificaciones=styled.a`
&:hover{
    cursor:pointer;
    text-decoration:underline;
}
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 14px;
margin:10px 30px;

`

export const MenuInput = ({...props}) => {

    const renderCards = () =>{
        let resultado = props.datosCards.map((card)=>{
           
            return <>
                <Icon><img src={card.imagen}/></Icon>
                    <Li onClick={()=>{alert(card.accion)}}>
                        <TextHoora>{card.TextHora}</TextHoora>
                        <TextMuulta>{card.TextMulta}</TextMuulta>
                        <TextVeencimiento>{card.TextVencimiento}</TextVeencimiento>

                    </Li>
                </>

        });
   return resultado;
    };

    return (
            <div>
                <DivMenu>
                    <IconMail><img src={mail}/></IconMail><Domicilio onClick={()=>props.onClickk()}>{props.DomicilioFiscal}</Domicilio>
                    <MenuUl>
                    {renderCards()}
                    </MenuUl>
                    <Notificaciones onClick={()=>props.onClick()}>{props.TextNotificaciones}</Notificaciones>
                </DivMenu>
            </div>
    );

};