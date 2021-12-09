import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ThemeProvider from "./ThemeProvider";


const StyledTooltip = styled.div`
  align-items: center;  
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-size: ${props => props.theme.font.size.small};
  height: 100%;
  position: absolute;
  width: 344px;
  z-index: 2;
  
  .tooltip-bubble {
    background: #ffffff;
    border-radius: 5px;
    padding: 8px 15px;
    position: relative;
    width: 100%;
    -webkit-box-shadow: 0px 4px 15px 0px rgba(0,0,0,0.1);
    -moz-box-shadow: 0px 4px 15px 0px rgba(0,0,0,0.1);
    box-shadow: 0px 4px 15px 0px rgba(0,0,0,0.1);
    p {
      font-family: 'Roboto', sans-serif;
      font-size: ${props => props.theme.font.size.small};
      line-height: 1.2;
      margin: 0;
      &:not(:last-child) {
        margin-bottom: 5px;
      }
    }
    &::before {
      content: "";
      position: absolute;
    }
  }

  &.tooltip-left,
  &.tooltip-right {
    top: 50%;
    transform: translateY(-50%);
    .tooltip-bubble::before {
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      transform: translateY(-50%);
    }
  }

  &.tooltip-left {
    right: 100%;
    padding-right: 10px;
    
    .tooltip-bubble::before {
      border-left: 10px solid #ffffff;
      right: -10px;
      top: 50%;
    }
  }

  &.tooltip-right {
    left: 100%;
    padding-left: 10px;

    .tooltip-bubble::before {
      border-right:10px solid #ffffff; 
      left: -10px;
      top: 50%;
    }
  } 

  &.tooltip-top,
  &.tooltip-bottom {
    left: 50%;
    transform: translateX(-50%);
    .tooltip-bubble::before {
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &.tooltip-top {
    bottom: 100%;
    padding-bottom: 10px;
    .tooltip-bubble::before {
      border-top: 10px solid #ffffff;
      bottom: -10px;
    }
  }
  &.tooltip-bottom {
    top: 100%;
    padding-top: 10px;
    .tooltip-bubble::before {
      border-bottom: 10px solid #ffffff;
      top: -10px;
    }
  }
`;

class Tooltip extends Component {

  static propTypes = {
    tooltipTitle: PropTypes.string,
    tooltipMessage: PropTypes.string,
  }

  state = {
    position: this.props.position,
  }

  render() {
    return(
        <ThemeProvider>
      <StyledTooltip className={`tooltipContainer tooltip-${this.props.position}`}>
        <div className={`tooltip-bubble`}>
          {this.props.children}
        </div>
      </StyledTooltip>
        </ThemeProvider>
    );
  }
}

export default Tooltip;