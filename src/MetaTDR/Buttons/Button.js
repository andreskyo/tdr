import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";





/***-----Large---***/

const ButtonLarge = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: absolute;
width: 140px;
height: 52px;
left: 20px;
top: 20px;
background: #124596;
border-radius: 8px;

`
const ElementsLarge = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
position: static;
width: 108px;
height: 28px;
left: 16px;
top: 12px;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 0px;
`
const TextLarge = styled.div`
color: #FFFFFF;
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 24px;
flex: none;
order: 1;
flex-grow: 0;
margin: auto;

`


///*-------Medium------------*//////



const ButtonMedium = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: absolute;
width: 143px;
height: 48px;
left: 196px;
top: 24px;
background: #124596;
border-radius: 8px;
border:1px solid #124596;
`
const ElementsMedium = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
position: static;
width: 111px;
height: 24px;
left: 16px;
top: 12px;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 0px;
`
const TextMedium = styled.div`
position: static;
width: 111px;
height: 24px;
left: 0px;
top: 0px;
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 24px;
color: #FFFFFF;
flex: none;
order: 1;
flex-grow: 0;
margin: 10px;`



/*----Small----*/

const ButtonSmall = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: absolute;
width: 116px;
height: 44px;
left: 374px;
top: 30px;
background: #124596;
border-radius: 8px;
border:1px solid #124596;
`

const ElementsSmall = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
position: static;
width: 84px;
height: 20px;
left: 16px;
top: 12px;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 0px;
`
const TextSmall = styled.div`
position: static;
width: 84px;
height: 20px;
left: 0px;
top: 0px;
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 10px;
line-height: 20px;
color: #FFFFFF;
flex: none;
order: 1;
flex-grow: 0;
margin: 10px`







export const Button = ({ color, backgroundColor, size, ...props }) => {

  return (



    size === 'Large' ? (<ButtonLarge style={{ backgroundColor }}>
      <ElementsLarge>

        <TextLarge style={{ color }}>
          {props.text}
        </TextLarge>

      </ElementsLarge>
     
    </ButtonLarge >) : size === 'Medium' ? (<ButtonMedium style={{ backgroundColor }}>
      <ElementsMedium>
       
        <TextMedium style={{ color }}>
          {props.text}
        </TextMedium>
      </ElementsMedium>
      
    </ButtonMedium >) : size === 'Small' ? (<ButtonSmall style={{ backgroundColor }}>
      <ElementsSmall>

        <TextSmall style={{ color }}>
          {props.text}
        </TextSmall>
      </ElementsSmall>
      
    </ButtonSmall >) : ''
  );

};


