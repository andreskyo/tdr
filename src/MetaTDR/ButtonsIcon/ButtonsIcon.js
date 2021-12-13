import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Vector from './Vector.png'




/***-----Large---***/

const ButtonIconLarge = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;
position: absolute;
width: 164px;
height: 52px;
left: 27px;
border-radius: 8px;
cursor:pointer;

`
const ElementsIconLarge = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: static;
width: 164px;
height: 52px;
left: 0px;
top: 0px;
border-radius: 8px;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 0px;
`
const TextIconLarge = styled.div`
position: static;
width: 108px;
height: 28px;
left: 40px;
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
const IconLarge = styled.div`


`


///*-------Medium------------*//////



const ButtonIconMedium = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;
position: absolute;
width: 169px;
height: 48px;
left: 203px;
border-radius: 8px;
cursor:pointer;
`
const ElementsIconMedium = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: static;
width: 169px;
height: 48px;
left: 0px;
top: 0px;
border-radius: 8px;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 0px;
`
const TextIconMedium = styled.div`
position: static;
width: 113px;
height: 24px;
left: 40px;
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

const IconMedium = styled.div`


`

/*----Small----*/

const ButtonIconSmall = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;
position: absolute;
width: 140px;
height: 44px;
left: 381px;
border-radius: 8px;
cursor:pointer;

`

const ElementsIconSmall = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: static;
width: 140px;
height: 44px;
left: 0px;
top: 0px;
border-radius: 8px;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 0px;
`
const TextIconSmall = styled.div`
position: static;
width: 84px;
height: 20px;
left: 40px;
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

const IconSmall = styled.div`


`





export const ButtonsIcon = ({ color, backgroundColor, size, ...props }) => {

    return (

        size === 'Large' ? (
            <ButtonIconLarge>
                <ElementsIconLarge>
                    <TextIconLarge>
                        {props.text}
                    </TextIconLarge>
                    <IconLarge><img src={Vector} alt="" /></IconLarge>
                </ElementsIconLarge>

            </ButtonIconLarge>) : size === 'Medium' ? (
                <ButtonIconMedium>
                    <ElementsIconMedium>
                        <TextIconMedium>
                            {props.text}
                        </TextIconMedium>
                        <IconMedium><img src={Vector} alt="" /></IconMedium>
                    </ElementsIconMedium>

                </ButtonIconMedium>
            ) : size === 'Small' ? (
                <ButtonIconSmall>
                    <ElementsIconSmall>
                        <TextIconSmall>
                            {props.text}
                        </TextIconSmall>
                        <IconSmall><img src={Vector} alt="" /></IconSmall>
                    </ElementsIconSmall>

                </ButtonIconSmall>) : ''

    );

};


