import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Round from './Round.png'






/***-----Large---***/
const IconLarge = styled.button`
&:hover ${Icon}{
  background:#004BE8;
  border:1px solid #004BE8;
 }
 &:active ${Icon}{
   background:#0B5FFF;;
   border:1px solid #0B5FFF;
 }
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: absolute;
width: 60px;
height: 50px;
left: 20px;
background: #124596;
border-radius: 8px;
border: 2px solid #124596;
`

const IconLargeD = styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: absolute;
width: 60px;
height: 50px;
left: 20px;
background: rgba(11, 95, 255, 0.5);
border-radius: 8px;
border: none;
`

const IconLargeSecondary = styled.button`
&:hover ${Icon}{
  background:#0C9E42;
  border:1px solid #0C9E42;
 }
 &:active ${Icon}{
   background:#009236;
   border:1px solid #009236;
 }
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: absolute;
width: 60px;
height: 50px;
left: 20px;
background: #19AB4F;
border-radius: 8px;
border: 2px solid #19AB4F;
`
const IconLargeSecondaryD = styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: absolute;
width: 60px;
height: 50px;
left: 20px;
background: rgba(25, 171, 79, 0.5);
border-radius: 8px;
border: none;
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



const IconMedium = styled.button`
&:hover ${Icon}{
  background:#004BE8;
  border:1px solid #004BE8;
 }
 &:active ${Icon}{
   background:#0B5FFF;;
   border:1px solid #0B5FFF;
 }
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: absolute;
width: 55px;
height: 45px;
left: 116px;
background: #124596;
border-radius: 8px;
border: 2px solid #124596;
`
const IconMediumD = styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: absolute;
width: 55px;
height: 45px;
left: 116px;
background: rgba(11, 95, 255, 0.5);
border-radius: 8px;
border:none;
`



const IconMediumSecondary = styled.button`
&:hover ${Icon}{
  background:#0C9E42;
  border:1px solid #0C9E42;
 }
 &:active ${Icon}{
   background:#009236;
   border:1px solid #009236;
 }
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: absolute;
width: 55px;
height: 45px;
left: 116px;
background: #19AB4F;
border-radius: 8px;
border: 2px solid #19AB4F;
`
const IconMediumSecondaryD = styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: absolute;
width: 55px;
height: 45px;
left: 116px;
background: rgba(25, 171, 79, 0.5);
border-radius: 8px;
border: none;
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

const IconSmall = styled.button`
&:hover ${Icon}{
  background:#004BE8;
  border:1px solid #004BE8;
 }
 &:active ${Icon}{
   background:#0B5FFF;;
   border:1px solid #0B5FFF;
 }
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: absolute;
width: 50px;
height: 40px;
left: 204px;

background: #124596;
border-radius: 8px;
border: 2px solid #124596;
`

const IconSmallD = styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 16px;
background: rgba(11, 95, 255, 0.5);
position: absolute;
width: 50px;
height: 40px;
left: 204px;
border-radius: 8px;
border: none;
`

const IconSmallSecondary = styled.button`
&:hover ${Icon}{
  background:#0C9E42;
  border:1px solid #0C9E42;
 }
 &:active ${Icon}{
   background:#009236;
   border:1px solid #009236;
 }
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: absolute;
width: 50px;
height: 40px;
left: 204px;
border-radius: 8px;
background: #19AB4F;
border: 2px solid #19AB4F;
`
const IconSmallSecondaryD = styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: absolute;
width: 50px;
height: 40px;
left: 204px;
border-radius: 8px;
background: rgba(25, 171, 79, 0.5);
border: none;
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
font-size:8px;
padding:2px 15px 0px 0px;
margin:auto`







export const Icon = ({ size, primary, disabled }) => {

  return (
    size === 'Large' & primary === true & disabled === false ? (<IconLarge>

      <ContentLarge >
        <IconL>
          <img src={Round} alt="" />

        </IconL>

      </ContentLarge>

    </IconLarge>) : size === 'Large' & primary === true & disabled === true ? (<IconLargeD>

      <ContentLarge >
        <IconL>
          <img src={Round} alt="" />

        </IconL>

      </ContentLarge>

    </IconLargeD>) : size === 'Large' & primary === false & disabled === false ? (<IconLargeSecondary >

      <ContentLarge>
        <IconL >
          <img src={Round} alt="" />

        </IconL>

      </ContentLarge>

    </IconLargeSecondary>) : size === 'Large' & primary === false & disabled === true ? (<IconLargeSecondaryD >

      <ContentLarge >
        <IconL >
          <img src={Round} alt="" />

        </IconL>

      </ContentLarge>

    </IconLargeSecondaryD>) : size === 'Medium' & primary === true & disabled === false ? (<IconMedium >

      <ContentMedium >
        <IconM>
          <img src={Round} alt="" />

        </IconM>

      </ContentMedium>

    </IconMedium>) : size === 'Medium' & primary === true & disabled === true ? (<IconMediumD >

      <ContentMedium >
        <IconM >
          <img src={Round} alt="" />

        </IconM>

      </ContentMedium>

    </IconMediumD>) : size === 'Medium' & primary === false & disabled === false ? (<IconMediumSecondary >

      <ContentMedium >
        <IconM>
          <img src={Round} alt="" />

        </IconM>

      </ContentMedium>

    </IconMediumSecondary>) : size === 'Medium' & primary === false & disabled === true ? (<IconMediumSecondaryD >

      <ContentMedium >
        <IconM >
          <img src={Round} alt="" />

        </IconM>

      </ContentMedium>

    </IconMediumSecondaryD>) : size === 'Small' & primary === true & disabled === false ? (<IconSmall>

      <ContentSmall >
        <IconS >
          <img src={Round} alt="" />

        </IconS>

      </ContentSmall>

    </IconSmall>) : size === 'Small' & primary === true & disabled === true ? (<IconSmallD>

      <ContentSmall >
        <IconS >
          <img src={Round} alt="" />

        </IconS>

      </ContentSmall>

    </IconSmallD>) : size === 'Small' & primary === false & disabled === false ? (<IconSmallSecondary>

      <ContentSmall>
        <IconS>
          <img src={Round} alt="" />
        </IconS>

      </ContentSmall>

    </IconSmallSecondary>) : size === 'Small' & primary === false & disabled === true ? (<IconSmallSecondaryD>

<ContentSmall>
  <IconS>
    <img src={Round} alt="" />
  </IconS>

</ContentSmall>

</IconSmallSecondaryD>) : null);
};


