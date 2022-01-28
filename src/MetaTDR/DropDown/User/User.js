import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';





const Div = styled.div`
@media (max-width:320px)  {
  
    width:280px;
    
    margin:0px;
  }
  @media (min-width:321px)  {
  
    width:370px;
    
    margin:0px;
  }
  @media (min-width:415px)  {
  
    width:650px;
    
    margin:0px 50px;
  }
width: 391px;
height: 261px;
left: 20px;
background: #FFFFFF;box-shadow: 0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.08);
border-radius: 8px;
`

const Name = styled.div`
@media (min-width:415px)  {
  margin:0px 200px;
  
  >p{
      
      width:100%;
      font-size:16px;}
    >img{
        font-size:60px;
    }  
  }
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


const Situacion = styled.p`
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
const Id = styled.p`
height: 12px;
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 12px;
color: #858C94;
order: 2;
margin: 5px 0px;
`
const Nombre = styled.p`
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

const MenuItem = styled.ul`
@media (max-width:320px)  {
    width:280px;
    margin:0px 130px;

  }
  @media (min-width:321px)  {
     margin:0px 180px;
  }
  @media (min-width:415px)  {
    margin:0px 400px;
  }

left: 203px;
right: 7px;
top: -10px;
bottom: 0px;

`

const Options = styled.li`
@media (max-width:320px)  {
  
    &&:hover{
        background:none;
    }
    >a{
        margin:20px;
    }
    >img{
        margin:-20px;
    }
  }
  @media (min-width:321px)  {
    &&:hover{
        background:none;
    }  
    >a{
        margin:20px;
    }
    >img{
        margin:-20px;
    }
}   
   font-size:17px;
   width:200px;
   height:45px; 
   margin:0px;
    

  
  @media (min-width:415px)  {
    >a{
        margin:20px;
        
    }
    >img{
        margin:-20px;
    }
  }
&:hover{
background:  #d7d1cf ;
color:black;
cursor:pointer;
text-decoration:underline;
}
>a{
    color:black;
    font-size:18px;
}
>img{
  margin:-5px -20px;
}
padding:7px;
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 15px;
list-style:none;
color: #6D7580;
width:200px;
height:30px; 
margin:0px;

`





export const User = ({ ...props }) => {

  const renderMenu = () => {
    let result = props.Menu.map((linkk) => {

      return <>

        <Options onClick={() => { alert(linkk.accion) }}>{linkk.link} <img src={linkk.iconCerrar} alt="" /> <a href="">{linkk.cerrar}</a></Options>








      </>

    });
    return result;
  };




  return (
    <Div>

      <Name>
        <AccountCircleOutlinedIcon sx={{ fontSize: 70, marginRight: 3 }}></AccountCircleOutlinedIcon>
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