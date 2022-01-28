import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'



const Div = styled.div`
position: absolute;
width: 256px;
height: 260px;
background: #FFFFFF;
box-shadow: 0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.08);
border-radius: 8px;
@media (min-width:320px){
  width:290px;

} 
@media (min-width:320px){
  width:290px;

} 
@media (min-width:414px){
  width:380px;

} 

@media (min-width:834px){
  width:800px;

} 
`

const Boton = styled(Button)`
&&{
  @media (min-width:414px){
    margin:20px 30px;
   
   }
   @media (min-width:834px){
    margin:20px 80px;
   
   } 
  margin:20px;
  left:7px;
  top:120px;
  position: absolute;
  width:80%;
  height: 36px;
  background:#0072BB;
  border: 1px solid #53AAE0;
  border-radius: 8px;
  color:white;
}
&&:hover{
    color:black;
}
&&:hover:first-child{
  color:black;
  background:white;
}
&&:first-child{
  @media (min-width:414px){
    margin:20px 30px;
   
   } 
   @media (min-width:834px){
    margin:20px 80px;
   
   } 
margin:20px;
left:7px;
top:0px;
position: absolute;
height:40px;
width:80%;
background: #53AAE0;
border: 1px solid #53AAE0;
border-radius: 8px;
color:white;
}

`

const Text = styled.div`
> a:hover {
    text-decoration:underline;
}
  {
  position: absolute;
  height: 35px;
  left: 1px;
  right: 1px;
  top: 60px;
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #6D7580;
  flex-direction: column; 
  }
}
`

const Textt = styled.div`
> a:hover {
    text-decoration:underline;
}
position: absolute;
height: 35px;
left: 1px;
right: 1px;
top: 180px;
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
color: #6D7580;
flex-direction: column;
`





export const Logued = ({ ...props }) => {
  const renderLogued = () => {
    let result = props.Logueddd.map((log) => {

      return <>

        <Boton disableRipple onClick={() => { alert("button") }}><p>{log.botonText}</p></Boton>

        <Text><p>{log.divP}</p>
          <a href="" onClick={() => { alert("crear cuenta") }}>{log.divA}</a></Text>
          <Textt><p>{log.divPP}</p>
          <a href="" onClick={() => { alert("solicitar clave") }}>{log.divAA}</a></Textt>
  


      </>

    });
    return result;
  };


  return (


    <Div>
      {renderLogued()}

      

    </Div>



  );

};