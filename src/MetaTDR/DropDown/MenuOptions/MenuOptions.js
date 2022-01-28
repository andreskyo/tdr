import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Divider from '@material-ui/core/Divider'
import Link from '@material-ui/core/Link'




const Div = styled.div`

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
position: absolute;
width: 125px;
height: 132px;
left: 26px;
filter: drop-shadow(0px 1px 4px rgba(14, 31, 53, 0.12)) drop-shadow(0px 4px 8px rgba(14, 31, 53, 0.08));
`

const Bubble = styled.div`
@media (max-width:568px){
    height:100px;
    width:220px;
   
   }
   @media (min-width:414px){
    
    width:320px;
   
   }
   @media (min-width:834px){
    height:100px;
    width:730px;
   
   }
display: flex;
flex-direction: row;
align-items: center;
padding: 12px 24px;
width: 125px;
height: 30px;
background: #FFFFFF;
flex: none;
border-radius:5px 5px 0px 0px;
`
const Linkk = styled(Link)`
&&{
    font-size:15px;
    margin:auto;
    cursor:pointer;
}

`


export const MenuOptions = ({ ...props }) => {




    const renderDatos = () => {

        let resultado = props.datos.map((data) => {
            return <>
                <Bubble onClick={()=>{alert(data.accion)}}>

                    <Linkk >
                    {data.text}
                    </Linkk>
                </Bubble>
                <Divider/>


            </>



        })
        return resultado;
    }


    return (
        <Div>

             {renderDatos()}

        </Div>
    );

};