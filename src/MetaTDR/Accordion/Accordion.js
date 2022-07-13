import React from 'react'

import Acordion from './js/Accordion'

export const Accordion = (props) => {

  return (
    <div>



      {props.datosAccordion.map(({ titulo, descripcion }) => (
        <Acordion  titulo={titulo} descripcion={descripcion}/>
      ))}


    </div>
  )
}

export default Accordion