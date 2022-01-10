import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import {ThemeProvider,createTheme} from '@material-ui/core/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: "#e3f2fd",
    },
    secondary: {
      main: '#f3e5f5',
    },
  },
});


const DivP = styled.div`
 


`



export const Popups = ({ ...props }) => {
  const [open, setOpen] = React.useState(true);

  const renderPopups = () => {
    let resultado = props.DatosPopups.map((data) => {

      return <>

        <Box sx={{  width: 500, margin:"auto" }}  >
          <Collapse  in={open} >
            <Alert  action={
                <IconButton aria-label="close" color="inherit" size="small" onClick={() => {setOpen(false);}}>
                  <CloseIcon fontSize="inherit" />
                </IconButton> } sx={{ mb: 1 }}>
              <DivP>
                <p>{data.title}</p>
                <p>{data.label}</p>
                {data.inputt}
                <br />
                <br />
                {data.linkA}
                {data.linkB}
              
              
              </DivP>
            </Alert>
          </Collapse>

        </Box>



      </>

    });
    return resultado;
  };

return (
    <div>

      {renderPopups()}

    </div>
  )
  

};