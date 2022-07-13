import React from 'react'
import styled from "styled-components";

const ComponentTitleMobile = styled.div`
display:flex;
width: 100%;
justify-content:space-between ;

.content{
display:flex;
.iconUno{
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
.iconDos{
  padding-top:2px;
}
`


export const TitleMobile = (props) => {


  return (
    <ComponentTitleMobile>

      <div className="content">

        {props.datosTitleMobile.iconUno ?

          <div className="iconUno">

            {props.datosTitleMobile.iconUno}

          </div>

          : null}

        <div className="text">

          {props.datosTitleMobile.titulo ?
            <p className="titulo">{props.datosTitleMobile.titulo}</p>
            : null}

          {props.datosTitleMobile.sub ?
            <p className="sub">{props.datosTitleMobile.sub}</p>
            : null}

        </div>

      </div>

      {props.datosTitleMobile.iconDos ?
        <div className="iconDos"
          onClick={props.datosTitleMobile.onClickSetting}
          style={{ cursor: "pointer" }}>

          {props.datosTitleMobile.iconDos}

        </div>
        : null}

    </ComponentTitleMobile>
  )
}

export default TitleMobile
