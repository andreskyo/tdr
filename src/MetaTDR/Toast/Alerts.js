import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Button from '@mui/material/Button';



const Div=styled.div`
.title{
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    height:40px;
    margin:0px 6px;
    
}
.label{
  height: 10px;
  font-family: Nunito;
  font-weight: normal;
  font-size: 12px;
  color: #6D7580;
  margin: 0px 8px;
}

`


const Stackk = styled(Stack)`
>div>div>div>div{
  background:transparent;
  height:140px;
  border: 1px solid #DADEE3;
  border-radius:4px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2);
}
>div>div>div>div>div>svg {
  color:grey;
  margin:10px 0px;
  
}
>div>div>div>div>.MuiAlert-icon {
width: 56px;
height: 45px;
background: #F4F6F9;
border-radius: 8px;
flex: none;
margin: 24px 24px;
  }

`


export const Alerts = ({ ...props }) => {
    const [open, setOpen] = React.useState(true);
    const renderNotification = () => {
        let resultado = props.DatosNnotification.map((data) => {
    
          return <>
    
            <Stackk sx={{ width: '50%' }} spacing={2}>
            <Collapse in={open}>
            <Alert icon={<CheckCircleOutlineIcon sx={{ width: '100%' }} fontSize="medium" />}
              action={
                <IconButton
                
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CancelIcon fontSize="medium"  />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
            
            <p className='title'>{data.title}</p> 
            <p className='label'>{data.label}</p>
              {props.button ? <Button onClick={()=>props.onClick()} sx={{ top: '40%' }} >Learn More</Button> : null}
            </Alert>
          </Collapse>
          
            </Stackk>
     </>
    
        });
        return resultado;
      };

   

  return (
    <Div>

      {renderNotification()}

      
    
    </Div>
  )

};