import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Radio from '@mui/material/Radio';


export const RadioButtons = ({ disableed, selected }) => {


    return (
        <>

            <Radio 
            checked={selected} 
            disabled={disableed} 
            />


        </>
    );
};