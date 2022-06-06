import React from 'react';
import PropTypes from 'prop-types';
import CardImg from './jsPrimary/CardImg';
import CardStats from './jsPrimary/CardStats';






export const CardsPrimary = ({ ...props }) => {

    return (
        <>
    

            {props.cardImg ? <CardImg
                datosCardImg={props.datosCardImg} /> : null}

            {props.cardStats ? <CardStats
                datosCardStats={props.datosCardStats} /> : null}

          
        </>
    )


};

export default CardsPrimary