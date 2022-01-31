import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CancelIcon from '@mui/icons-material/Cancel';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';





const DivP = styled.div`
`

const Boxx = styled(Box)`

.title{
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  height:35px;
  margin:0px 6px;
  color: #54595E;
  
}
.label{
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  width:100%;
  font-size: 14px;
  line-height: 20px;
  margin:0px 6px;
  color: rgba(84, 89, 94, 0.6);
}
>div>div>div>div{
  border: 1px solid #DEE2E6;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 20px 20px rgba(0, 0, 0, 0.08);
  background:transparent;
  
  height:190px;
}
`

const DivButtons = styled.div`
display:flex
width:100%;
position:absolute;
margin:10px 370px;
`
const Buttonn = styled(Button)`
&&:hover{
  background:grey;
}

&&{font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 10px;
border-radius: 8px;}


&&:first-child{
  background:transparent;
  color:black;
}

&&{background:#4F4F4F;
margin:0px 5px}
`
const Boxxx=styled(Box)`
&&>div{
  width:100%;
}

&&>div>div{
width:100%;
height:45px;

}

`
export const Popups = ({ ...props }) => {
  const [open, setOpen] = React.useState(true);

  const renderPopups = () => {
    let resultado = props.DatosPopups.map((data) => {

      return <>

        <Boxx sx={{ width: 650 }}  >
          <Collapse in={open} >
            <Alert icon={false} action={
              <IconButton aria-label="close" color="inherit" size="small" onClick={() => { setOpen(false); }}>
                <CancelIcon fontSize="inherit" />
              </IconButton>} sx={{ mb: 1 }}>

              <p className='title'>{data.title}</p>
              <p className='label'>{data.label}</p>
              <br />

            { props.inputt===true ? <Boxxx
                component="form"
                noValidate
                autoComplete="off"
              >
                <TextField id="outlined-basic" label="Your Name" variant="outlined" />
                
              </Boxxx> : ''}

              <DivButtons>
                <Buttonn variant="contained" onClick={()=>props.onClick()}>{data.linkA}</Buttonn>
                <Buttonn variant="contained" onClick={()=>props.onClickk()}>{data.linkB}</Buttonn>
              </DivButtons>


            </Alert>
          </Collapse>

        </Boxx>



      </>

    });
    return resultado;
  };

  return (
    <DivP>

      {renderPopups()}

    </DivP>
  )


};