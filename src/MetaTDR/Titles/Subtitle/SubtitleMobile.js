import React from 'react'
import styled from "styled-components";


const ComponentSubtitleDesktop = styled.div`
  &&{
  display:flex;
  flex-direction: column;
  width:100%;
}
.content{
  display:flex;
  align-items: baseline;
  justify-content: space-between;

  .text{
      .titulo{ 
        font-family: 'SF UI Text';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 150%;
        color: #27272A;
        margin:0px;
        padding-bottom:5px;
      }
      .descripcion{
        font-family: 'SF UI Text';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 150%;
        color: #78716C;
        margin:0px;
        padding-bottom:5px;
      }

    }
  }  
  .hr{
    width:100%;
  }
`

export const SubtitleMobile = (props) => {
  return (
    <ComponentSubtitleDesktop>

    <div className="content">

      <div className="text">

      {props.datosSubtitleMobile.titulo ?
        <p className="titulo">{props.datosSubtitleMobile.titulo}</p>
        :null}

      {props.datosSubtitleMobile.descripcion ?  
        <p className="descripcion">{props.datosSubtitleMobile.descripcion}</p>
        :null}

      </div>

      {props.datosSubtitleMobile.button ?
      <div className="containerButton">

        {props.datosSubtitleMobile.button}

      </div>
      :null}

    </div>


    <div className="hr">

      <hr style={{ margin: "0px" }} />

    </div>

  </ComponentSubtitleDesktop>

  )
}

export default SubtitleMobile