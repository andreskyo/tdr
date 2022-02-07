import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";



const Div = styled.div`
filter: drop-shadow(0px 1px 4px rgba(14, 31, 53, 0.12)) drop-shadow(0px 4px 8px rgba(14, 31, 53, 0.08));
border-radius: 12px;



`

const DivRow = styled.div`
background: #FFFFFF;
>a{
font-family: Nunito;
font-style: normal;
font-weight: 300;
font-size: 15px;
color: #09101D;
padding:10px;
:hover{
    text-decoration:underline;
    cursor:pointer;
}
}
`


export const MenuOptions = ({...props}) => {

const renderOptions=()=>{
    let resultado=props.datos.map((result)=>{
        return <>
        <DivRow className="row">
                {result.text}
        </DivRow >
            
        
        </>
    })
return resultado
}






    return (
        <Div className="container-fluid m-0 ">
            {renderOptions()}

        </Div>
    );

};