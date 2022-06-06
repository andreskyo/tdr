import React from 'react';
import PropTypes from 'prop-types';

import CardAcceso from './jsOtherCards/CardAcceso'






export const OtherCards = ({ ...props }) => {

    return (
        <>
       

            {props.cardAcceso ? <CardAcceso
                datosAcceso={props.datosAcceso}/> : null}

      

        </>
    )
    
};

export default OtherCards