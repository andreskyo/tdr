import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import Button from '@material-ui/core/Button';

const PrimaryButton=styled(Button)`
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

   
const Text=styled.p`
margin:2px;
`







export const ButtonsIcon = ({ size, ...props }) => {

    const Button =  PrimaryButton 
    return (

        <Button size={size} onClick={()=>props.onClick()}>
            {<AccessAlarmIcon />}<Text >{props.text}</Text>
        </Button>

    );

};


