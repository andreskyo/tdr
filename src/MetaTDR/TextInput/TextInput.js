import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TextField from '@mui/material/TextField';

const Div = styled.div`
  
`;

export const TextInput = ({ ...props }) => {



    return (
        <Div className="container-fluid m-0">
            <div className="row">
                <TextField  
                label="Outlined" 
                color={props.color}
                disabled={props.disabled} 
                variant="outlined" />
            </div>
        </Div>
    );
};