import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import EditNotificationsIcon from '@mui/icons-material/EditNotifications';
import CommentIcon from '@mui/icons-material/Comment';



const Div = styled.div`
.time{
  height: 20px;
  font-family: Nunito;
  font-weight: 500;
  font-size: 10px;
  color: black;
  margin: 0px 8px;
}

.title{
  height: 35px;
  font-family: Nunito;
  font-weight: normal;
  font-size: 14px;
  color: #2C3A4B;
  margin: 4px 8px;
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



const Alertt = styled(Alert)`
&&{background:transparent;
height:120px;
border-radius:4px;
border: 1px solid #DA1414;
box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2);
}
`


const Stackk = styled(Stack)`

>div>div>div>div{
  background:transparent;
  height:120px;
  border-radius:4px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2);
}
>div>div>div>div>div>svg {
  color:grey;
}
`

export const Notifications = ({ ...props }) => {

  const [open, setOpen] = React.useState(true);
  const [openn, setOpenn] = React.useState(true);


  const renderNotification = () => {
    let resultado = props.DatosNnotification.map((data) => {

      return <>

        <Stackk sx={{ width: '35%' }} spacing={2}>
          <Collapse in={openn}>
            <Alert icon={<EditNotificationsIcon fontSize="inherit" />}
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpenn(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              <p className='time'>{data.time}</p>
              <p className='title'>{data.title}</p>
              <p className='label'>{data.label}</p>

            </Alert>
          </Collapse>

        </Stackk>



      </>

    });
    return resultado;
  };


  const renderErrorNotifications = () => {
    let resultado = props.DatosNerror.map((data) => {

      return <>

        <Stack sx={{ width: '35%' }} spacing={2}>
          <Alertt severity="error">
            <p className='time'> {data.time}</p>
            <p className='title'> {data.title}</p>
            <p className='label'> {data.label}</p>
          </Alertt>

        </Stack>



      </>

    });
    return resultado;
  };

  const renderNewnotification = () => {
    let resultado = props.DatosNewnotification.map((data) => {

      return <>

        <Stackk sx={{ width: '35%' }} spacing={2}>
          <Collapse in={open}>
            <Alert icon={<CommentIcon fontSize="inherit" />}
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
              <p className='time'>{data.time}</p>
              <p className='title'>{data.title}</p>
              <p className='label'>{data.label}</p>

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

      {renderErrorNotifications()}
      <br />
      {renderNewnotification()}

    </Div>
  )

};


