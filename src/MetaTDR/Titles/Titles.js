import React from 'react'
import TitulosHome from './js/TitulosHome'
import Title from './js/Title'
import SubTitles from './js/SubTitles'


export const Titles = (props) => {
    return (
        <>
            {props.title ?
                <Title datosTitle={props.datosTitle} />
                : null}
            {props.subtitle ?
                <SubTitles datosSubTitle={props.datosSubTitle} />
                : null}
            {props.titulosHome ?
                <TitulosHome datosTitulosHome={props.datosTitulosHome} />
                : null}




        </>

    )
}

export default Titles
