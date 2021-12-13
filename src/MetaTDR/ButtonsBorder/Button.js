import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";





/***-----Large---***/

const ButtonLarge = styled.button`
&:hover ${Button}{
    border:1px solid #0053F0;
   }
   &:active ${Button}{
    border:1px solid #0B5FFF;
   } 
cursor:pointer;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;
position: absolute;
width: 140px;
height: 52px;
left: 27px;
border: 1px solid #124596;
box-sizing: border-box;
border-radius: 8px;
background:transparent;
cursor:pointer;

`

const ButtonLargeD = styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;
position: absolute;
width: 140px;
height: 52px;
left: 27px;
border: 1px solid #95a6ff;
box-sizing: border-box;
border-radius: 8px;
background:transparent;


`


const ElementsLarge = styled.div`

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: static;
width: 140px;
height: 52px;
left: 0px;
top: 0px;
border-radius: 8px;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 0px;
`
const TextLarge = styled.div`
&:hover ${Button}{
    color: #0053F0;
   }
   &:active ${Button}{
    color: #0B5FFF;
   }   
position: static;
width: 108px;
height: 28px;
left: 16px;
top: 12px;
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 28px;
color: #124596;
flex: none;
order: 1;
flex-grow: 0;
margin: 0px 8px;
`
const TextLargeD = styled.div`
position: static;
width: 108px;
height: 28px;
left: 16px;
top: 12px;
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 28px;
flex: none;
order: 1;
flex-grow: 0;
margin: 0px 8px;
color:#95a6ff;
`




///*-------Medium------------*//////



const ButtonMedium = styled.button`
&:hover ${Button}{
    border:1px solid #0053F0;
   }
   &:active ${Button}{
    border:1px solid #0053F0;
   }
   cursor:pointer;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;
position: absolute;
width: 145px;
height: 48px;
left: 203px;
border: 1px solid #124596;
box-sizing: border-box;
border-radius: 8px;
background:transparent;
cursor:pointer;

`

const ButtonMediumD = styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;
position: absolute;
width: 145px;
height: 48px;
left: 203px;
border: 1px solid #95a6ff;
box-sizing: border-box;
border-radius: 8px;
background:transparent;

`

const ElementsMedium = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: static;
width: 145px;
height: 48px;
left: 0px;
top: 0px;
border-radius: 8px;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 0px;
`
const TextMedium = styled.div`
&:hover ${Button}{
    color: #0053F0;
   }
   &:active ${Button}{
    color: #0B5FFF;
   }
position: static;
width: 113px;
height: 24px;
left: 16px;
top: 12px;
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #124596;
flex: none;
order: 1;
flex-grow: 0;
margin: 0px 8px;`

const TextMediumD = styled.div`
position: static;
width: 113px;
height: 24px;
left: 16px;
top: 12px;
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color:#95a6ff;
flex: none;
order: 1;
flex-grow: 0;
margin: 0px 8px;`



/*----Small----*/

const ButtonSmall = styled.button`
&:hover ${Button}{
    border:1px solid #0053F0;
   }
   &:active ${Button}{
    border:1px solid #0053F0;
   }
   cursor:pointer;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;
position: absolute;
width: 116px;
height: 44px;
left: 381px;
border: 1px solid #124596;
box-sizing: border-box;
border-radius: 8px;
background:transparent;
cursor:pointer;
`

const ButtonSmallD = styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;
position: absolute;
width: 116px;
height: 44px;
left: 381px;
border: 1px solid #95a6ff;;
box-sizing: border-box;
border-radius: 8px;
background:transparent;

`

const ElementsSmall = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: static;
width: 116px;
height: 44px;
left: 0px;
top: 0px;
border-radius: 8px;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 0px;
`
const TextSmall = styled.div`
&:hover ${Button}{
    color: #0053F0;
   }
   &:active ${Button}{
    color: #0B5FFF;
   }
position: static;
width: 84px;
height: 20px;
left: 16px;
top: 12px;
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 20px;
color: #124596;
flex: none;
order: 1;
flex-grow: 0;
margin: 0px 8px;`

const TextSmallD = styled.div`
position: static;
width: 84px;
height: 20px;
left: 16px;
top: 12px;
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 20px;
color: #95a6ff;
flex: none;
order: 1;
flex-grow: 0;
margin: 0px 8px;`







export const Button = ({ color, size, disabled, ...props }) => {

    return (
        size === 'Large' & disabled === false ? (<ButtonLarge>
            <ElementsLarge>
                <TextLarge>
                    {props.text}
                </TextLarge>
            </ElementsLarge>
        </ButtonLarge>) : size === 'Large' & disabled === true ? (<ButtonLargeD>
            <ElementsLarge>
                <TextLargeD >
                    {props.text}
                </TextLargeD>
            </ElementsLarge>
        </ButtonLargeD>) : size === 'Medium' & disabled === false ? (<ButtonMedium>
            <ElementsMedium>
                <TextMedium>
                    {props.text}
                </TextMedium>

            </ElementsMedium>
        </ButtonMedium>): size === 'Medium' & disabled === true ?(<ButtonMediumD>
        <ElementsMedium>
            <TextMediumD>
                {props.text}
            </TextMediumD>
        </ElementsMedium>
    </ButtonMediumD>) : size==='Small' & disabled=== false ? (<ButtonSmall>
        <ElementsSmall>
            <TextSmall>
                {props.text}
                </TextSmall>
        </ElementsSmall>
    </ButtonSmall>) : size==='Small' & disabled===true ? (<ButtonSmallD>
        <ElementsSmall>
            <TextSmallD>
                {props.text}
                </TextSmallD>
        </ElementsSmall>
    </ButtonSmallD>) : null

    ) 
};