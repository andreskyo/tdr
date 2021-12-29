import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Button from '@material-ui/core/Button'


const PrimaryButton = styled(Button)`
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













export const ButtonLine = ({ color, size, disabled, ...props }) => {

    return (
        <PrimaryButton variant="text" size={size} onClick={()=>props.onClick()} disabled={disabled}>{props.text}</PrimaryButton>


    )

};


