import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";





/***-----Large---***/

const ButtonLarge = styled.button`
&:active ${Button}{
    text-decoration-line: underline
   }
position: static;
width: 120px;
height: 28px;
left: 9px;
top: 5.5px;
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 18px;
text-align: center;
order: 0;
flex-grow: 0;
margin: 0px 0px;
border:none;
background:transparent;
cursor:pointer;
`

const ButtonLargeD = styled.button`

position: static;
width: 120px;
height: 28px;
left: 9px;
top: 5.5px;
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 18px;
text-align: center;
order: 0;
flex-grow: 0;
margin: 0px 0px;
border:none;
background:transparent;

`

const TextLarge = styled.div`
position: static;
left: 5px;
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 28px;
text-align: center;
color:#124596;
flex: none;
order: 0;
flex-grow: 0;
margin: auto;
`

const TextLargeD = styled.div`
position: static;
left: 5px;
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 28px;
text-align: center;
color:#124596;
flex: none;
order: 0;
flex-grow: 0;
margin: auto;
color:#b9c2ff;
`


///*-------Medium------------*//////



const ButtonMedium = styled.button`
&:active ${Button}{
    text-decoration-line: underline
   }
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 5.5px 16px 0px;
position: absolute;
width: 115px;
height: 25px;
left: 196px;
border:none;
background:transparent;
cursor:pointer;

`
const ButtonMediumD = styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 5.5px 16px 0px;
position: absolute;
width: 115px;
height: 25px;
left: 196px;
border:none;
background:transparent;

`

const TextMedium = styled.div`
position: static;
width:200px;
left: 5px;
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 13px;
line-height: 28px;
text-align: center;
color:#124596;
flex: none;
order: 0;
flex-grow: 0;
margin: auto;
`

const TextMediumD = styled.div`
position: static;
left: 14px;
top: 5.5px;
font-family: Nunito;
font-style: normal;
font-weight: 600;
width:200px;
font-size: 13px;
line-height: 28px;
text-align: center;
color: #124596;
flex: none;
order: 0;
flex-grow: 0;
margin: auto;
color:#b9c2ff;`




/*----Small----*/

const ButtonSmall = styled.button`
&:active ${Button}{
    text-decoration-line: underline
   }
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 5.5px 12px 0px;
position: absolute;
width: 111px;
height: 23px;
left: 374px;
border:none;
background:transparent;
cursor:pointer;

`

const ButtonSmallD = styled.button`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 5.5px 12px 0px;
position: absolute;
width: 111px;
height: 23px;
left: 374px;
border:none;
background:transparent;

`


const TextSmall = styled.div`
position: static;
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

const TextSmallD = styled.div`
position: static;
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
margin: 0px 0px;
color:#b9c2ff;`







export const Button = ({ color, size, disabled, ...props }) => {

    return (
        size === 'Large' & disabled === false ? (<ButtonLarge>
            <TextLarge>

                {props.text}
            </TextLarge>

        </ButtonLarge>) : size==='Large' & disabled===true ? (<ButtonLargeD>
            <TextLargeD>

                {props.text}
            </TextLargeD>

        </ButtonLargeD>) : size==='Medium' & disabled===true ? (<ButtonMediumD>
            <TextMediumD>

                {props.text}
            </TextMediumD>

        </ButtonMediumD>) : size==='Medium' & disabled===false ? (<ButtonMedium>
            <TextMedium>

                {props.text}
            </TextMedium>

        </ButtonMedium>) : size==='Small' & disabled===true? (<ButtonSmallD>
            <TextSmallD>

                {props.text}
            </TextSmallD>

        </ButtonSmallD>) : size==='Small' & disabled===false ?(<ButtonSmall>
            <TextSmall>

                {props.text}
            </TextSmall>

        </ButtonSmall>) : null


    )

};


