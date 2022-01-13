import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CancelIcon from '@mui/icons-material/Cancel';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const Boxx=styled(Box)`
>div>div>div>div>div>svg{
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
>div>div>div>div{
  background:white;
  margin:50px;
  border: 1px solid #DEE2E6;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 20px 20px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  
}
>div>div>div>div>div>.title{
font-family: Inter;
font-style: normal;
font-weight: 600;
height:20px;
font-size: 18px;
margin: 0px 0px;
}
>div>div>div>div>div>.label{
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 22px;
color: rgba(84, 89, 94, 0.6);
  }
`
const Buttonn=styled(Button)`
&&{
  background:grey;
  margin:10px;
}



`
export const Modals = ({ ...props }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

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
       
       <Boxx sx={{  width: 600 }}>
        <Collapse in={open}>
            <Alert icon={<CheckCircleOutlineIcon sx={{ width: '100%' }} fontSize="medium" />} action={
                <IconButton aria-label="close" color="inherit" size="small" onClick={() => {setOpen(false);}}>
                  <CancelIcon fontSize="medium" />
                </IconButton> } sx={{ mb: 1 }}>

                
                <p className='title'>{data.title}</p>
                <p className='label'>{data.label}</p>
               
               {props.check===true ? <FormControlLabel onClick={()=>props.onClickCheck()}control={<Checkbox defaultChecked />} label={data.labelCheck} /> 
                 : ''}
<br />
                <Button onClick={()=>props.onClick()} variant="outlined">{data.linkA}</Button>
                <Buttonn onClick={()=>props.onClickK()} variant="contained">{data.linkB}</Buttonn>
                
              
              
              
            </Alert>
          </Collapse>
        </Boxx>
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