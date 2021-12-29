import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Button from '@material-ui/core/Button'


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








export const Buttons = ({ disabled, text,size, ...props }) => {

  
 const Button = props.primary ? PrimaryButton : SecondaryButton ;
  return (

   
      <Button variant="contained" onClick={()=>props.onClick()} disabled={disabled} size={size}>
      {text}
      </Button>
    



  );

};


