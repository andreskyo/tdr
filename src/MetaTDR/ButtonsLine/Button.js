import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";





/***-----Large---***/

const ButtonLarge = styled.div`
position: static;
width: 108px;
height: 28px;
left: 9px;
top: 5.5px;
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 28px;
text-align: center;
color: #124596;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 0px;
`
const LineLarge = styled.div`
border: 1px solid #124596;
width:76px;
margin:-8px auto;
`
const TextLarge = styled.div`
position: static;
width: 108px;
height: 28px;
left: 5px;
top: 5.5px;
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 13px;
line-height: 28px;
color:red;
text-align: center;
color: #124596;
flex: none;
order: 0;
flex-grow: 0;
margin: auto;
`


///*-------Medium------------*//////



const ButtonMedium = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 5.5px 16px 0px;
position: absolute;
width: 145px;
height: 33.5px;
left: 196px;

`
const LineMedium = styled.div`
border: 1px solid #124596;
width:84px;
margin:-9px auto;
`
const TextMedium = styled.div`
position: static;
width: 113px;
height: 28px;
left: 14px;
top: 5.5px;
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 28px;
text-align: center;
color: #124596;
flex: none;
order: 0;
flex-grow: 0;
margin: auto`



/*----Small----*/

const ButtonSmall = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 5.5px 12px 0px;
position: absolute;
width: 108px;
height: 33.5px;
left: 374px;

`

const LineSmall = styled.div`
margin:-6px 10px;
width: 66px;
border: 1px solid #124596;
align-self: stretch;
`
const TextSmall = styled.div`
position: static;
width: 84px;
height: 28px;
left: 10px;
top: 5.5px;
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 11px;
line-height: 28px;
display: flex;
align-items: center;
text-align: center;
color: #124596;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 0px;`







export const Button = ({ color, size,line, ...props }) => {

    return (
         line === true & size=== 'Large' ? (<ButtonLarge >
            <TextLarge style={{color}}>
                {props.text}
                <LineLarge style={{color}}>

                </LineLarge>
            </TextLarge>

        </ButtonLarge>) : line=== false & size=== 'Large'? (<ButtonLarge >
            <TextLarge style={{color}}>
                {props.text}
                

                
            </TextLarge>

        </ButtonLarge>) : line === true & size=== 'Medium' ? (<ButtonMedium >
            <TextMedium style={{color}}>
                {props.text}
                <LineMedium style={{color}}>

                </LineMedium>
            </TextMedium>

        </ButtonMedium>) : line=== false & size=== 'Medium' ? (<ButtonMedium >
            <TextMedium style={{color}}>
                {props.text}
                

                
            </TextMedium>

        </ButtonMedium>) :line=== true & size=== 'Small' ?(<ButtonSmall >
            <TextSmall style={{color}}>
                {props.text}
                

                
            </TextSmall>
            <LineSmall style={{color}}>

</LineSmall>
        </ButtonSmall>) : line=== false & size==='Small' ?(<ButtonSmall >
            <TextSmall style={{color}}>
                {props.text}
                

                
            </TextSmall>

        </ButtonSmall>) : ''


    )

};


