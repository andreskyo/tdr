import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Round  from './Round.png'






/***-----Large---***/
const IconLarge = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: absolute;
width: 56px;
height: 56px;
left: 20px;
background: #124596;
border-radius: 8px;

`
const ContentLarge = styled.div`
position: static;
width: 28px;
height: 28px;
left: 14px;
top: 14px;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 0px;
`
const IconL = styled.div`
font-size:10px;

margin:5px
`

///*-------Medium------------*//////



const IconMedium = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: absolute;
width: 48px;
height: 48px;
left: 116px;

background: #124596;
border-radius: 8px;
`
const ContentMedium = styled.div`
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
const IconM = styled.div`
font-size:10px;

margin:auto;`
/*----Small----*/

const IconSmall = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: absolute;
width: 52px;
height: 44px;
left: 204px;

background: #124596;
border-radius: 8px;
`

const ContentSmall = styled.div`
position: static;
width: 20px;
height: 20px;
left: 16px;
top: 12px;
flex: none;
order: 0;
flex-grow: 0;
margin: auto;
`
const IconS = styled.div`
font-size:10px;

margin:auto`







export const Icon = ({ color, backgroundColor, size, ...props }) => {

  return (
    size === 'Large' ? (<IconLarge style={{ backgroundColor }}>

      <ContentLarge >
        <IconL>
          <img src={Round} alt="" />

        </IconL>

      </ContentLarge>

    </IconLarge>) : size === 'Medium' ? (<IconMedium style={{ backgroundColor }}>

      <ContentMedium >
        <IconM style={{ color }}>
          <img src={Round} alt="" />

        </IconM>

      </ContentMedium>

    </IconMedium>) : size === 'Small' ? (<IconSmall style={{ backgroundColor }}>

      <ContentSmall >
        <IconS style={{ color }}>
          <img src={Round} alt="" />

        </IconS>

      </ContentSmall>

    </IconSmall>) : null)
};


