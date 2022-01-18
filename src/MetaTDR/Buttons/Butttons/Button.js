
import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, {Fragment} from 'react';
import './button.css';
import styled from "styled-components";


const Buttonn=styled.div`
&&{
background:red;
color:black}

`

export const Button = ({ }) => {
  return(
    <button ></button>
  );
};

Button.prototype={
  label:PropTypes.string,
  backgroundColor:PropTypes.string,
  size:PropTypes.oneOf(['sm','md','large']),
  onCLick:PropTypes.func,
}


