import React from 'react'
import styled from "styled-components";

const ComponentTitleDesktop = styled.div`
display:flex;
width: 100%;
justify-content:space-between ;

.content{
display:flex;
.icon{
  padding-top:3px;
}

.text{
  .titulo{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: #27272A;
    margin:0px;
    }
   .sub{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #78716C;
    margin:0px;
    padding-top:5px;
  }  
}
}

`

export const TitleDesktop = (props) => {
  return (
    <ComponentTitleDesktop>

    <div className="content">

      {props.datosTitleDesktop.icon ?

        <div className="icon">

          {props.datosTitleDesktop.icon}

        </div>

        : null}

      <div className="text">

        {props.datosTitleDesktop.titulo ?
          <p className="titulo">{props.datosTitleDesktop.titulo}</p>
          : null}

        {props.datosTitleDesktop.sub ?
          <p className="sub">{props.datosTitleDesktop.sub}</p>
          : null}

      </div>

    </div>

    

  </ComponentTitleDesktop>
  )
}

export default TitleDesktop