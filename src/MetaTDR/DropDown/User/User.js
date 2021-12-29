import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Vector from './Vector.png';
import RcIcons from './RcIcons.png';




const Div = styled.div`
position: absolute;
width: 391px;
height: 261px;
left: 20px;
background: #FFFFFF;box-shadow: 0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.08);
border-radius: 8px;
`

const Name = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
position: absolute;
width: 175px;
height: 114px;
left: 10px;
top: 74px;

`

const IconUser = styled.image`
width: 52px;
height: 52px;
left: 61.5px;
order: 0;
margin: 5px 0px;

`
const Situacion=styled.p`
width: 100%px;
height: 16px;
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 12px;
color: #858C94;
order: 3;


>span{
    color:green;
    margin:1px;
}
`
const Id=styled.p`
height: 12px;
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 12px;
color: #858C94;
order: 2;
margin: 5px 0px;
`
const Nombre=styled.p`
width: 132px;
height: 17px;
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 14px;
color: #09101D;
order: 1;
margin: 15px 0px;


`

const MenuItem=styled.ul`
position: absolute;
left: 203px;
right: 7px;
top: -10px;
bottom: 0px;

`

const Options=styled.li`
&:hover{
background:  #d7d1cf ;
color:black;
cursor:pointer;
text-decoration:underline;
}
>a{
    color:black;
    font-size:15px;
}
padding:7px;
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 13px;
list-style:none;
color: #6D7580;
`





export const User = ({ ...props }) => {

    const renderMenu = () => {
        let result = props.Menu.map((linkk) => {

            return <>

                   <Options onClick={()=>{alert(linkk.accion)}}>{linkk.link} <img src= {linkk.iconCerrar} alt="" /> <a href="">{linkk.cerrar}</a></Options>
                   
                   






            </>

        });
        return result;
    };




    return (
        <Div>
            
            <Name>
                <IconUser><img src={Vector} alt="" /></IconUser>
                <Nombre>{props.textNombre}</Nombre>
                <Id>{props.textId}</Id>
                <Situacion>Situación fiscal: <span>{props.textSituacion}</span></Situacion>
            </Name>
         <MenuItem>
         {renderMenu()}
         
         </MenuItem>

        </Div>
    );

};