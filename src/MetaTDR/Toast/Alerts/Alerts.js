import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Alert from '@mui/material/Alert';

import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';




const Div = styled.div`
background: #FFFFFF;
box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2);
border-radius: 4px;
>div>div>div>div{
  background:transparent;
}
>div>div>div>div>div>div>.title{
font-family: Nunito;
font-style: normal;
font-weight: bold;
font-size: 19px;
color: #2C3A4B;
}
>div>div>div>div>div>div>.label{
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 17px;
color: rgba(84, 89, 94, 0.6);
}
>div>div>div>div>div>div>.button>button{
font-family: Nunito;
font-style: normal;
font-weight: bold;
font-size: 15px;
text-transform:none;
color: #545D69;
margin:-10px -6px;
:hover{
  background:none;
}

}

`







export const Alerts = ({ ...props }) => {
  const [open, setOpen] = React.useState(true);
  const renderNotification = () => {
    let resultado = props.DatosNnotification.map((data) => {

      return <>


        <Collapse className="container-fluid m-0" in={open}>
          <Alert icon={<CheckCircleOutlineIcon  style={{background:"#F5F5F5",borderRadius:"8px",width:"56px",height:"56px",padding:"10px",color:"gray",marginTop:"10px"}}fontSize="large" />}
            action={
              <IconButton
                 
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >

                <CancelIcon style={{color:"black",marginRight:"-30px",marginTop:"-10px"}} fontSize="medium" />

              </IconButton>
            }

          >
            <div className="row">
              <p className='title col-12 '>{data.title}</p>
              <p className='label col-12 ' style={{marginTop:"-15px"}}>{data.label}</p>
              <p className="button text-start " >{data.button}</p>
              
            </div>
          </Alert>
        </Collapse>


      </>

    });
    return resultado;
  };



  return (
    <Div className="container-fluid m-0">

      {renderNotification()}



    </Div>
  )

};