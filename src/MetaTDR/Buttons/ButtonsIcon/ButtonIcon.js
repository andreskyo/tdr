import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Button from '@material-ui/core/Button'
import StyledButton from '@material-ui/core/Button'
import AddIcon from '@mui/icons-material/Add';


const PrimaryButton = styled(Button)`
&& {
background: #124596;
border-radius: 8px;
color:white;



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
font-size:12px;

}

`;


const SecondaryButton = styled(Button)`
&& {
  background: #19AB4F;
  border-radius: 8px;
  font-size:12px;
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
font-size:12px;
background: rgba(25, 171, 79, 0.5);

  }
`;






export const ButtonIcon = ({ disabled, text,size, ...props }) => {

    const Button = props.primary ? PrimaryButton : SecondaryButton ;
 
  return (

   
    <Button variant="contained" onClick={()=>props.onClick()} disabled={disabled} size={size} >
    { <AddIcon />}
    </Button> 
    



  );

};
