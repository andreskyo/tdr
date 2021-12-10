import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Round from './Round.png'






/***-----Large---***/
const IconLarge = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: absolute;
width: 40px;
height: 35px;
left: 20px;
background: #124596;
border-radius: 8px;
border: 2px solid #124596;
`

const IconLargePrimary = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: absolute;
width: 40px;
height: 35px;
left: 20px;
background: #19AB4F;
border-radius: 8px;
border: 2px solid #19AB4F;
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
padding:2px;

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
width: 30px;
height: 25px;
left: 116px;
background: #124596;
border-radius: 8px;
border: 2px solid #124596;
`

const IconMediumSecondary = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: absolute;
width: 30px;
height: 25px;
left: 116px;
background: #19AB4F;
border-radius: 8px;
border: 2px solid #19AB4F;
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
padding:2 px;
margin:auto;`
/*----Small----*/

const IconSmall = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: absolute;
width: 20px;
height: 15px;
left: 204px;
background: #124596;
border-radius: 8px;
border: 2px solid #124596;
`
const IconSmallSecondary = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: absolute;
width: 20px;
height: 15px;
left: 204px;
border-radius: 8px;
background: #19AB4F;
border: 2px solid #19AB4F;
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
padding:3px;
margin:auto`







export const Icon = ({ color, backgroundColor, size, primary, ...props }) => {

  return (
    size === 'Large' & primary === true ? (<IconLarge style={{ backgroundColor }}>

      <ContentLarge >
        <IconL>
          <img src={Round} alt="" />

        </IconL>

      </ContentLarge>

    </IconLarge>) : size === 'Large' & primary === false ? (<IconLargePrimary style={{ backgroundColor }}>

      <ContentLarge >
        <IconL>
          <img src={Round} alt="" />

        </IconL>

      </ContentLarge>

    </IconLargePrimary>) : size === 'Medium' & primary === true ? (<IconMedium style={{ backgroundColor }}>

      <ContentMedium >
        <IconM >
          <img src={Round} alt="" />

        </IconM>

      </ContentMedium>

    </IconMedium>) : size === 'Medium' & primary === false ? (<IconMediumSecondary style={{ backgroundColor }}>

      <ContentMedium >
        <IconM >
          <img src={Round} alt="" />

        </IconM>

      </ContentMedium>

    </IconMediumSecondary>) : size === 'Small' & primary === true ? (<IconSmall style={{ backgroundColor }}>

      <ContentSmall >
        <IconS >
          <img src={Round} alt="" />

        </IconS>

      </ContentSmall>

    </IconSmall>) : size === 'Small' & primary === true ? (<IconSmall style={{ backgroundColor }}>

      <ContentSmall >
        <IconS >
          <img src={Round} alt="" />

        </IconS>

      </ContentSmall>

    </IconSmall>) : size === 'Small' & primary === true ? (<IconSmall style={{ backgroundColor }}>

      <ContentSmall >
        <IconS >
          <img src={Round} alt="" />

        </IconS>

      </ContentSmall>

    </IconSmall>) : size === 'Small' & primary === true ? (<IconSmall style={{ backgroundColor }}>

      <ContentSmall >
        <IconS >
          <img src={Round} alt="" />

        </IconS>

      </ContentSmall>

    </IconSmall>) : size === 'Small' & primary === false ? (<IconSmallSecondary style={{ backgroundColor }}>

      <ContentSmall >
        <IconS >
          <img src={Round} alt="" />

        </IconS>

      </ContentSmall>

    </IconSmallSecondary>) : '');
};


