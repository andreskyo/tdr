import React, { Component } from 'react';
import styled from "styled-components";
import ThemeProvider from "./ThemeProvider";

const PrimaryButton = styled.button`
  background: ${props => props.theme.primaryColor};
  border: none;
  border-radius: 20px;
  color: white;
  cursor:pointer;
  font-family: 'Roboto', sans-serif;
  font-weight: ${props => props.theme.font.weight.medium};
  font-size: ${props => props.theme.font.size.normal};
  height: 40px;
  min-width: 194px;
  padding: 0 25px;
  position: relative;
  transition: all .2s ease-in-out;
  display:block!important;

  &:focus {
    outline: 0;
  }
  
  &::before {
    content:"";
    display: block;
    height: 20px;
    width: 80%;
    position: absolute;
    transition: all .2s ease-in-out;
  }

  &:hover::before {
    -webkit-box-shadow: 0px 5px 30px 0px rgba(122,172,57,0.5);
    -moz-box-shadow: 0px 5px 30px 0px rgba(122,172,57,0.5);
    box-shadow: 0px 5px 30px 0px rgba(122,172,57,0.5);
    transition: all .2s ease-in-out;
  }

  &:disabled {
    background: ${props => props.theme.lightGray};
    color: ${props => props.theme.brownGray};
    cursor: default;
    pointer-events: none;
  }
`;

const SecondaryButton = styled(PrimaryButton)`
  background: transparent;
  border: 2px solid ${props => props.theme.primaryColorOp};
  color: ${props => props.theme.primaryColor};
  &::before {
    display:none;
  }
  &:hover {
    border-color: ${props => props.theme.primaryColor};
    &::before {
      box-shadow: none;
    }
  }
  &:disabled {
    background: transparent;
    border-color: ${props => props.theme.lightGray};
  }
`;


class Button extends Component {

  state = {
    hasValue: false, 
    hasError: false,
  }

  onClick = this.onClick.bind(this);

  onClick(e) {
    if (this.props.disabled) {
        e.preventDefault();
        return;
    }

    if (this.props.onClick) {
        this.props.onClick(e);
    }
}

  render() {
    const StyledButton = this.props.secondary ? SecondaryButton : PrimaryButton;
    const {type, id, name, disabled, value} = this.props;
    return(
        <ThemeProvider>
      <StyledButton 
        type={type}
        disabled={disabled}
        name={name}
        id={id}
        onClick={this.onClick}
        className={'button'}
      >
        {value}
      </StyledButton>
        </ThemeProvider>
    );
  }
}

export default Button;