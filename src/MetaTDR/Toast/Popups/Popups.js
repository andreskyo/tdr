import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import CancelIcon from '@mui/icons-material/Cancel';







const DivP = styled.div`
background: #FFFFFF;
border: 1px solid #DEE2E6;
box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 20px 20px rgba(0, 0, 0, 0.08);
border-radius: 8px;
>div>div>h1{
color: #54595E;
font-family: Inter;
font-weight: bold;
font-size: 22px;
line-height: 24px;
margin: 8px 0px;
}
>div>div>p{
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 17px;
line-height: 22px;
color: rgba(84, 89, 94, 0.6);
margin: 8px 0px;
}
>div>div>button:first-child{
border: 1px solid #4F4F4F;
box-sizing: border-box;
border-radius: 8px;
color: #4F4F4F;
text-transform:none;
padding: 9px 20px;
:hover{
  background:white;
}
}

>div>div>.bu{background: #4F4F4F;
border-radius: 8px;
text-transform:none;
padding: 10px 20px;}
`




export const Popups = ({ ...props }) => {
  const [open, setOpen] = React.useState(true);
  const disabled=()=>{
     setOpen(false)
  }

  const renderPopups = () => {
    let resultado = props.datos.map((result) => {

      return <>
        <div className="row " >
          
          <div className="col-12 " style={{padding:"50px"}} >
          <CancelIcon sx={{ fontSize: 24 }} style={{marginLeft:"100%",marginTop:"-40px" , cursor:"pointer"}} onClick={disabled}/>
            {result.title }
            
            {result.label}
            
          </div>
          
          <div className="col-12" style={{textAlign:"end" , padding:"10px"}}>
            
            {result.linkA}
            {result.linkB}
            
          </div>
        </div>


      </>

    });
    return resultado;
  };

  return (
    <>

    {open===true ? <DivP className="container-fluid m-0">
      
    {renderPopups()} 
         
   
       </DivP> : null}
  </>  
  )


};