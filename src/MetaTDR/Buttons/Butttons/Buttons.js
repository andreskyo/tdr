import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import AddIcon from '@mui/icons-material/Add';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const PrimaryButton = styled(Button)`
&& {
background: #124596;
border-radius: 8px;
color:white;
font-size:11px;

}
&&:hover {
  background: #004BE8;
  cursor:pointer;
  
}

&&:active {
  background: #0B5FFF;
  
}

&&:disabled {
background: rgba(11, 95, 255, 0.5);
font-size:11px;

}

`;


const SecondaryButton = styled(Button)`
&& {
  background: #19AB4F;
  border-radius: 8px;
  font-size:11px;
  color:white;
  }
&&:hover {
    background: #0C9E42;
    cursor:pointer;
    
  }

  &&:active {
    background: #009236;
    
  }

&&:disabled {
  font-size:11px;
background: rgba(25, 171, 79, 0.5);

  }
`;


const ButtonBorder = styled(Button)`
&& {
color: #124596;
border-radius: 8px;
border:1px solid #124596;
font-size:11px;

}
&&:hover {
  background: transparent;
  border:1px solid #004BE8;
  color:#004BE8;
  cursor:pointer;
  
}

&&:active {
  background: #0B5FFF;
  color:white;
}

&&:disabled {
    background: transparent;
font-size:11px;

}

`;


const ButtonIconr = styled(Button)`
    && {
       color: #124596;
       padding:5px;
        
    
    }
    &&:hover {
        background: none;
        text-decoration:underline;
        cursor:pointer;
        
      }
    
    `


const ButtonLinee = styled(Button)`
    && {
    
    border:none;
    color:#124596;
    
    
    }
    &&:hover {
      text-decoration:underline;
      border:none;
      background:transparent;
      cursor:pointer;
      
    }
    
    &&:active {
        text-decoration:underline;
        border:none;
        background:transparent;
        cursor:pointer;
      
    }
    
    &&:disabled {
    background: none;
    
    
    }
    
    `;



export const Buttons = ({ disabled, size, ...props }) => {


  const Button = props.primary ? PrimaryButton : SecondaryButton;

  return (

    <div>

      {props.buttton === true ?
        <Button variant="contained" onClick={() => props.onClick()} disabled={disabled} size={size}>
          {props.text}
        </Button> : ''}

      <br></br>
      <br></br>

      {props.buttonIconM === true ? <Button variant="contained" onClick={() => props.onClick()} disabled={disabled} size={size} >
        {<AddIcon />}
      </Button> : ''}


      <br></br>
      <br></br>

      {props.buttonIconR === true ? <ButtonIconr size={size} onClick={() => props.onClick()}>
        {<AccessAlarmIcon />}{props.text}
      </ButtonIconr> : ''}


      <br></br>
      <br></br>
      {props.buttonBorderr === true ? <ButtonBorder variant="outlined" onClick={() => props.onClick()} size={size} disabled={disabled} >
      {props.text}
      </ButtonBorder> : ''}


      <br></br>
      <br></br>
      {props.buttonLine === true ? <ButtonLinee  variant="text" size={size} onClick={() => props.onClick()} disabled={disabled}>
      {props.text}
      </ButtonLinee> : ''}

    </div>
  );

};


