import { React, useState } from 'react';
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';


const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';



const Slid= styled(Slider)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#3880ff' : '#3880ff',
  height: 6,
  padding: '15px 0',
  '& .MuiSlider-thumb': {
    height: 28,
    width: 28,
    backgroundColor: '#fff',
    boxShadow: iOSBoxShadow,
    '&:focus, &:hover, &.Mui-active': {
      boxShadow:
        '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  '& .MuiSlider-valueLabel': {
    fontSize: 15,
    fontWeight: "600",
    fontFamily: 'Nunito',

    top: -6,
    backgroundColor: 'unset',
    color: "#09101D",
    '&:before': {
      display: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 28,
      width: 28,
      backgroundColor: '#fff',
      boxShadow: iOSBoxShadow,
    
    },
    
  },
  
  '& .MuiSlider-rail': {
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
  },
}));

export const Slideer = ({ ...props }) => {



  return (
    <>

      <Slid
        className="mt-5"
        disabled={props.disabled}
        disa
        valueLabelDisplay="on"
        defaultValue={14}
       
      
      />



    </>
  );
};