import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import AddIcon from '@mui/icons-material/Add';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import Typography from '@mui/material/Typography'


const PrimaryButton = styled(Button)`

&& {
  
  background: ${({ outlined }) => outlined ? 'transparent ' : '#124596'};
  border:${({ outlined }) => outlined ? '1px solid #004BE8 ' : '#004BE8'};
  color:${({ outlined }) => outlined ? '#004BE8' : 'white'};
  text-transform: none;
  border-radius: ${({ outlined }) => outlined ? 'none' : '8px'};
  font-size:11px;
  font-family: Nunito;
 font-style: normal;
 font-weight: 600;


  }

 &&:hover {
    background:${({ outlined }) => outlined ? 'none' : '#004BE8'}; 
    
    cursor:pointer;
    
  }
  &&:active {
    background: #0B5FFF;
    
  }
  &&:disabled {
  background: ${({ outlined }) => outlined ? 'none' : 'rgba(11, 95, 255, 0.5)'};
  font-size:11px;
  }
  `;

const SecondaryButton = styled(Button)`
&& {
  text-transform: none;
  background:${({ outlined }) => outlined? 'transparent' : '#19AB4F'};  
  border:${({ outlined }) => outlined ? '1px solid #19AB4F ' : '#19AB4F'};
  border-radius: ${({ outlined }) => outlined ? 'none' : '8px'};
  font-size:11px;
  font-size:11px;
  font-family: Nunito;
 font-style: normal;
 font-weight: 600;

  color:${({ outlined }) => outlined? '#19AB4F' : 'white'};
  }

&&:hover {
    background: ${({ outlined }) => outlined ? 'none' : '#0C9E42'};
    
    cursor:pointer;
    
  }

  &&:active {
    background: #009236;
    
  }

&&:disabled {
  font-size:11px;
  background:${({ outlined }) => outlined ? 'none' : ' rgba(25, 171, 79, 0.5)'};

  }
`;


const ButtonLinee = styled(Button)`
text-transform: none;
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
  
  `



export const Buttons = ({ disabled, size, primary, outlined, addIcon, text, line, alarmIcon, ...props }) => {

  const Buttonn = primary ? PrimaryButton : SecondaryButton;

  return (




    <>



      {line ? <ButtonLinee onClick={() => props.onClick()}
        
        size={size}
        disabled={disabled}
      >

        {alarmIcon ? <ButtonLinee  startIcon={<AccessAlarmIcon/>}>
          {text}
        </ButtonLinee> : {text}  }


      </ButtonLinee>
        :
        <Buttonn onClick={() => props.onClick()}
          primary={primary}
          disabled={disabled}
          size={size}
          outlined={outlined}
        >
          {addIcon ? <AddIcon ></AddIcon> : text}



        </Buttonn>}



    </>


  );

};


