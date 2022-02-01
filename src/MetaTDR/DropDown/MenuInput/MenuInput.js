import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Rectangle from './Rectangle.png'
import mail from './mail.png';


const DivMenu = styled.div`
@media (min-width:320px){
    height:500px;
    width:250px;
   
   }
   @media (min-width:414px){
    height:90%;
    width:345px;
   
   }
   @media (min-width:834px){
    width:750px;
    height:700px;
    height:60%;
   }
position: absolute;
width: 240px;
padding:15px;
left: 20px;
top: 20px;
height:200px;
background: #FFFFFF;
box-shadow: 0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.08);
border-radius: 8px;


overflow-x: hidden;


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
@media (min-width:320px){
    &&:hover{
        background:none;
    }
    margin:20px 0px;
   
   }
@media (min-width:414px){
    &&:hover{
        background:none;
    }
    width:100%;
    height:80px;
    padding:0px;
    margin:20px 9px;

   
   }
   @media (min-width:834px){
    &&:hover{
        background:none;
    }
    width:1000px;
    height:70px;
    padding:0px;
    margin:20px 9px;
   }
list-style:none;
width:300px;
height:80px;
padding:0px;
margin:20px -29px;
`

const TextHoora=styled.p`
@media (min-width:320px){
    margin:10px 20px;
    font-size:12px;
}
@media (min-width:414px){
 font-size:15px;
 
 padding:8px;
}
color:red;
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 0px;
color: #6D7580;
margin: 12px 40px;
`

const TextMuulta=styled.p`
@media (max-width:568px ){
margin:0px 20px;
width:200px;
}
@media (min-width:414px){
    font-size:15px;
    margin:0px 25px;
   }
position: static;
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 13px;
line-height:15px;
color: #09101D;
margin: -1px 55px;

`

const TextVeencimiento=styled.p`
@media (min-width:320px){
    margin:10px 25px;
    font-size:12px;
}
@media (min-width:414px){
    font-size:13px;
    
    padding:1px;
   }
height: 14px;
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 12px;
color: #09101D;
margin: 7px 45px;
`

const Icon=styled.image`
@media (min-width:414px){
    font-size:18px;
    
    
   }
position:absolute;
width: 34px;
padding:2px;
height: 34px;
left: 15px;
margin:15px -8px;
`
const IconMail=styled.image`
padding:2px;
position:absolute;
width: 34px;
height: 34px;
left: 15px;
margin:-3px 0px;

`
const Domicilio=styled.a`
@media (min-width:414px){
    font-size:16px;
    
    margin:0px 80px;
   }
   @media (min-width:834px){
    font-size:20px;
     margin:20px 250px;
    }
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
@media (min-width:414px){
    font-size:16px;
    
    margin:0px 70px;
   }
   @media (min-width:834px){
   font-size:20px;
    margin:20px 250px;
   }
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
                    <Li onClick={card.accion}>
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