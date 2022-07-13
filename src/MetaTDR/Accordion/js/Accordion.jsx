import React, { useState, useRef } from 'react';
import styled from "styled-components";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



const Accordion = styled.div`
padding:5px;
&&{
 width:100%;
 display:flex;
 flex-direction:column ;
}
.header{
  width:100%;
  display:flex;
  align-items:baseline ;
  justify-content:space-between ;

  .headerIcon {
    .icon{
        margin-left: auto;
        cursor:pointer;
  }
  .rotate {
      transform: rotate(90deg);
    }
  }

  .headerTitulo{
    margin:0px;
    .titulo{
      margin:0px;
    }
  }
}
.content{
  padding: 0px;
  overflow: hidden;
}
`

const Acordion = ({titulo,descripcion}) => {
  
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");

    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );

    setRotateState(
      setActive === "active" ? "icon" : "icon rotate"
    );
  }

  return (
    <Accordion>

      <div className="header">

        <div className="headerTitulo">

          <p className="titulo"> {titulo} </p>

        </div>

        <div className="headerIcon">

          <ArrowForwardIosIcon
            className={`${setRotate}`}
            onClick={toggleAccordion}
          />

        </div>

      </div>

      <div className="content"
        ref={content}
        style={{ maxHeight: `${setHeight}` }}

      >

        <p className="descripcion">{descripcion}</p>
        <hr />

      </div>

    </Accordion>
  );
}

export default Acordion