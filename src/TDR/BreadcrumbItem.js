import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ThemeProvider from "./ThemeProvider";

const Styled = styled.li`
    align-items: center;
    color: ${props => props.theme.secondaryColor};
    display: flex;
    font-family: 'Roboto', sans-serif; 
    font-size: ${props => props.theme.font.size.small};
    list-style: none;
    margin-right: 8px;
    &:hover{
    cursor: pointer!important;
    }
    
    a, a:hover {
      color: inherit;
      text-decoration: none;
      
    }
    &:not(:last-of-type)::after {
      border-top: 1px solid;
      border-right: 1px solid;
      border-color: ${props => props.theme.secondaryColor};
      content: "";
      display: inline-block;
      height: 6px;
      margin-left: 4px; 
      transform: rotate(45deg);
      width: 6px;
    }
    &.active {
      color: ${props => props.theme.colorBlack};
    }
`;

class BreadcrumbItem extends Component {
  static propTypes = {
    active: PropTypes.bool
  };

  _onClick = ()=>{
    if(this.props.onClick){
      this.props.onClick();
    }
  };

  render() {
    return (
        <ThemeProvider>
      <Styled onClick={this._onClick} className={this.props.active ? "active" : ""}>
        {this.props.children}
      </Styled>
        </ThemeProvider>
    );
  }
}

export default BreadcrumbItem;