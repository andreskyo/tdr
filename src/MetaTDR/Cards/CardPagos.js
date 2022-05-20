import React from 'react';
import PropTypes from 'prop-types';
import PagoMobile from './jsPagos/PagoMobile';
import PagoGateWay from './jsPagos/PagoGateWay';










export const CardPagos = ({ ...props }) => {

    return (
        <>

            {/* <PagoMobile
            datosPagosMobile={props.datosPagosMobile}/> */}
            <PagoGateWay
            datosPagosGateWay={props.datosPagosGateWay}/>
        </>
    )


};