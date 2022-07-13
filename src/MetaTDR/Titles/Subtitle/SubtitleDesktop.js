import React from 'react';

import styled from "styled-components";


const ComponentSubtitleDesktop = styled.div`
  &&{
  display:flex;
  flex-direction: column;
  width:100%;
}
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
  }
  .hr{
    width:100%;
  }
`

export const SubtitleDesktop = (props) => {
  return (
    <ComponentSubtitleDesktop>

      {props.datosSubtitleDesktop.titulo ?

        <div className="text">

          <p className="titulo">{props.datosSubtitleDesktop.titulo}</p>

        </div>

        : null}

      <div className="hr">

        <hr style={{ margin: "0px" }} />

      </div>

    </ComponentSubtitleDesktop>
  )
}

export default SubtitleDesktop