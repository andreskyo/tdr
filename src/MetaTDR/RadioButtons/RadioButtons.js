import {React,useState} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Radio from '@mui/material/Radio';


const BpIcon = styled("span")(({ theme }) => ({
    borderRadius: "50%",
    width: 24,
    height: 24,


    
  }));

  const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: "#0B5FFF",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 24,
      height: 24,
      backgroundImage: "radial-gradient(#fff,#fff 30%,transparent 32%)",
      content: '""'
    },
  
  });

  
export const RadioButtons = ({ ...props}) => {
const [selected,setSelected]=useState(props.selected)

    const handleClick = (e) => {
     

        if (props.onChange) {
            props.onChange(!selected)
        }
       
        setSelected(!selected)

      };


    return (
        <>

            <Radio 
            selected={props.selected}
            disabled={props.disabled} 
            // onClick={handleClick}
            // checkedIcon={<BpCheckedIcon />}
            // value={props.value}
            />
            


        </>
    );
};