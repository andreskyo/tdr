import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Button from '@mui/material/Button';
import mail from './mail.png'



const DivMenu = styled.div`
background: #FFFFFF;
box-shadow: 0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.08);
border-radius: 8px;
height: 100%;
overflow-x: auto;
max-width:100%;


div>p{
font-family: Nunito;
font-style: normal;
font-weight: 500;
font-size: 16px;

color:black;
}
>img{
    display: inline-block;
    
}
>p{
    display: inline-block;  
    margin-left: 20px;
}

>div>ul>.list-group-item{
margin-bottom:0px;
border:none;

:hover{
    
    cursor:pointer;
    background:gray;
}
}
>div>ul>.list-group-item>div>.col-1{
margin-top:30px;
width:40px;
}
>div>ul>.list-group-item>div>.col-10>h6{
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 14px;
font-feature-settings: 'ss07' on;
color: #6D7580;
opacity: 0.64;
}
>div>a{
    :hover{
        cursor:pointer;
        text-decoration:underline;
    }
}


`






export const MenuInput = ({ ...props }) => {


    let renderMenu = () => {
        let resultado = props.datosCards.map((result) => {
            return <>
                <li class="list-group-item" onClick={result.accion}>
                    <div className="row ">
                        <div className="col-1">
                            {result.imagen}
                        </div>
                        <div className="col-10">
                            <h6>{result.textHora}</h6>
                            <p>{result.textMulta}</p>
                            <p>{result.textVencimiento}</p>
                        </div>
                    </div>
                </li>


            </>


        })
        return resultado
    }




    return (
        <>
            <DivMenu className='container m-0' >

                <img src={mail} alt="" />
                <p>{props.domicilio}</p>


                <div className="row ">

                    <ul class="list-group">
                        {renderMenu()}
                    </ul>

                </div>

                <div className="row">
                    <a className="text-center" onClick={props.notificaciones}>Ver todas las notificaciones</a>
                </div>

            </DivMenu>
        </>

    );

};

