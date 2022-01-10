import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const DivP = styled.div`
 


`



export const Notifications = ({ ...props }) => {
  const [open, setOpen] = React.useState(true);


  const renderNotification = () => {
    let resultado = props.DatosNotification.map((data) => {

      return <>

        <Box sx={{ width: '50%', margin: 'auto' }}>
          <Collapse in={open}>
            <Alert variant="outlined" severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"

                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              <p>{data.title}{data.time}</p>
              <p>{data.subtitle}</p>
              <p>{data.label}</p>
            </Alert>
          </Collapse>

        </Box>



      </>

    });
    return resultado;
  };


  return (
<DivP>
    {renderNotification()}
</DivP>   
  )


};