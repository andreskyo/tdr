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
width: 115px;
height: 30px;
left: 20px;
top: 20px;
background: #124596;
border-radius: 8px;
border:1px solid #124596;
`
const ButtonLargeSecondary = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: absolute;
width: 115px;
height: 30px;
left: 20px;
top: 20px;
background: #19AB4F;
border-radius: 8px;
border:1px solid #19AB4F;
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
width: 105px;
height: 25px;
left: 196px;
top: 24px;
background: #124596;
border-radius: 8px;
border:1px solid #124596;
`

const ButtonMediumSecondary = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: absolute;
width: 105px;
height: 25px;
left: 196px;
top: 24px;
background: #19AB4F;
border-radius: 8px;
border:1px solid #19AB4F;
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
color: #FFFFFF;
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 24px;
flex: none;
order: 1;
flex-grow: 0;
margin: auto;`



/*----Small----*/

const ButtonSmall = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: absolute;
width: 95px;
height: 20px;
left: 374px;
top: 30px;
background: #124596;
border-radius: 8px;
border:1px solid #124596;
`
const ButtonSmallSecondary = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: absolute;
width: 95px;
height: 20px;
left: 374px;
top: 30px;
background: #19AB4F;
border-radius: 8px;
border:1px solid #19AB4F;
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
color: #FFFFFF;
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 10px;
line-height: 24px;
flex: none;
order: 1;
flex-grow: 0;
margin: auto;`







export const Button = ({ color, backgroundColor, size,primary, ...props }) => {

  return (



    size === 'Large' & primary===true ? (<ButtonLarge style={{ backgroundColor }}>
      <ElementsLarge>

        <TextLarge style={{ color }}>
          {props.text}
        </TextLarge>

      </ElementsLarge>
     
    </ButtonLarge >) : size==='Large' & primary===false ? (<ButtonLargeSecondary style={{ backgroundColor }}>
      <ElementsLarge>

        <TextLarge style={{ color }}>
          {props.text}
        </TextLarge>

      </ElementsLarge>
     
    </ButtonLargeSecondary >) : size==='Medium' & primary===true ?  (<ButtonMedium style={{ backgroundColor }}>
      <ElementsMedium>

        <TextMedium style={{ color }}>
          {props.text}
        </TextMedium>

      </ElementsMedium>
     
    </ButtonMedium >) : size==='Medium' & primary===false ?  (<ButtonMediumSecondary style={{ backgroundColor }}>
      <ElementsMedium>

        <TextMedium style={{ color }}>
          {props.text}
        </TextMedium>

      </ElementsMedium>
     
    </ButtonMediumSecondary >) : size==='Small' & primary===true ?  (<ButtonSmall style={{ backgroundColor }}>
      <ElementsSmall>

        <TextSmall style={{ color }}>
          {props.text}
        </TextSmall>

      </ElementsSmall>
     
    </ButtonSmall >) : size==='Small' & primary===false ? (<ButtonSmallSecondary style={{ backgroundColor }}>
      <ElementsSmall>

        <TextSmall style={{ color }}>
          {props.text}
        </TextSmall>

      </ElementsSmall>
     
    </ButtonSmallSecondary >) : null
  );

};


