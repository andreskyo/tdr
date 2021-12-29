import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Button from '@material-ui/core/Button'
import StyledButton from '@material-ui/core/Button'



const PrimaryButton = styled(Button)`
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
  
}

&&:disabled {
    background: transparent;
font-size:11px;

}

`;












export const ButtonBorder = ({size,disabled,text,...props  }) => {
   
    return (
        
        
      
         
            <PrimaryButton variant="outlined" onClick={()=>props.onClick()} size={size} disabled={disabled} >
            {text}
            </PrimaryButton>

    )
};