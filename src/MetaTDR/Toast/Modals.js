import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';


const DivP = styled.div`
 >p:first-child {
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;}

font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 14px;
color: rgba(84, 89, 94, 0.6);
>a{
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  color: #545D69;
  
}
>a:hover{
  text-decoration:underline;
}




`

export const Modals = ({ ...props }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const renderModal = () => {
    let resultado = props.DatosModal.map((data) => {

      return <>

     <Button onClick={handleOpen}>Modal</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
       
       <Box sx={{  width: 400 }}>
        <Collapse in={open}>
            <Alert action={
                <IconButton aria-label="close" color="inherit" size="small" onClick={() => {setOpen(false);}}>
                  <CloseIcon fontSize="inherit" />
                </IconButton> } sx={{ mb: 1 }}>
              <DivP>
                <p>{data.title}</p>
                <p>{data.label}</p>
                {data.linkA}
                {data.linkB}
                
              
              
              </DivP>
            </Alert>
          </Collapse>
        </Box>
      </Modal>



      </>

    });
    return resultado;
  };

  return (
    <div>

      {renderModal()}

      
    
    </div>
  )

};