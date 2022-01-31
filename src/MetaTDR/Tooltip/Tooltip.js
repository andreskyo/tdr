import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Ellipse from './Ellipse.png'
import CircleIcon from '@mui/icons-material/Circle';

const Container = styled.div`
position:absolute;
width:400px;
height: auto;
left: 30px;
top: 10px;
background: #FFFFFF;
border: 1px solid #EBEEF2;
box-sizing: border-box;
border-radius: 6px;
filter: drop-shadow(0px 4px 8px rgba(14, 31, 53, 0.16));
`

const ImpuestoInicial = styled.div`
>li{
font-family: Nunito;
font-style: normal;
font-weight: 600;
}
display:flex;
justify-content:space-around;
list-style:none;
width:100%;
margin-top:20px;
height:15px;
`
const DivDescuentos = styled.div`
>p{
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    
    }
width:300px;
margin:auto;
`


const Descuentos = styled.div`
>li:first-child{
font-family: Nunito;
font-style: normal;
font-weight: normal;
}
>li{
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;  
}
display:flex;
padding:1px;
height:0px;
justify-content:space-between;
list-style:none;
width:100%;
`

const Total = styled.div`
>p:first-child{
font-family: Nunito;
font-style: normal;
font-weight: 600;
}
>p{
    font-family: Nunito;
    font-weight:bold;
}
justify-content:space-between;
display:flex;
height:9px;
color:green;
`

const DivCentro = styled.div`
width:70%;
display:flex;
margin:50px;
background: #F4F6F9;
height:auto;
padding:5px;
>p{font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;}

`
const DivFinal = styled.div`
display:flex;
justify-content:space-around;
margin-top:-30px;
>div>p:first-child{
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 12px;
}
>div>p{
    font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 14px;
}

>div >p >img{
    margin:0px 6px;
}

`

const CircleIconn=styled(CircleIcon)`
color:red;
`

export const Tooltip = ({ ...props }) => {

    const renderCards = () => {
        let resultado = props.Datos.label.map((data) => {

            return <>

                <ImpuestoInicial>
                    
                    <li>{data}</li>
                    <li>{}</li>

                </ImpuestoInicial>
            </>

        });
        return resultado;
    };

    // const renderDescuentos = () => {
    //     let resultadoo = props.Datos.descuentos.map((dataa) => {

    //         return <>
    //             <p>{}</p>
    //             <Descuentos>

    //                 <li>{}</li>
    //                 <li>{}</li>

    //             </Descuentos>

    //             <Total>

    //                 <p>{}</p>
    //                 <p>{}</p>
    //             </Total>
    //         </>

    //     });
    //     return resultadoo;
    // };


    return (

        <Container>

            {renderCards()}
            <DivDescuentos>
                {/* {renderDescuentos()} */}
            </DivDescuentos>

            <DivCentro>
                <p>{props.centro}</p>
            </DivCentro>

            <DivFinal>
                <div>
                    <p>Planes</p>
                    <p>{props.plan}</p>
                </div>
                <div>
                    
                    <p>Estado</p>
                    {props.estado===true ? <p><CircleIcon fontSize="small" sx={{ fontSize: 17 }} color="success" />A vencer</p> : <p><CircleIconn fontSize="small" sx={{ fontSize: 17 }} />Vencido</p>}
                    
                </div>
            </DivFinal>
        </Container>

    )

};