import React, { Component } from 'react';
import styled from 'styled-components';
import { Collapse } from 'reactstrap';
import ThemeProvider from "./ThemeProvider";

import iconArrow from '../assets/images/arrow-green.svg';

const Styled = styled.div`
  border-bottom: 1px solid ${props => props.theme.brownGray};
  width: 100%;
  &:first-of-type {
    border-top: 1px solid ${props => props.theme.brownGray};
  }
  .accordion__text {
    align-items: center;
    color: ${props => props.theme.colorBlack};
    cursor: pointer;
    display: flex;
    font-family: 'Roboto', sans-serif;
    font-size: ${props => props.theme.font.size.medium};
    font-weight: ${props => props.theme.font.weight.light};
    line-height: 1;
    margin: 0;
    padding: 1em 10px;
    i {
      align-items: center;
      border: 1px solid ${props => props.theme.primaryColor};
      border-radius: 50%;
      display: flex;
      height: 23px;
      justify-content: center;
      margin-right: 10px;
      width: 23px;
      &::before {
        background: url(${iconArrow}) no-repeat center;
        background-size: contain;
        content:"";
        display: block;
        height: 10px;
        transform: rotate(90deg);
        transition: transform .2s ease-in-out;
        width: 16px;
      }
    }
    &.open i::before {
      transform: rotate(270deg);
    }
  }
  .accordion__content {
    padding-bottom: 1rem;
    padding-top: .5rem;
    width: 100%;
  }
`;

class Accordion extends Component {

  state = {
    collapse: false
  }
  toggle = this.toggle.bind(this);

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    const {title, open} = this.props;
    return (
        <ThemeProvider>
      <Styled className={"accordion" + (this.props.boton?" row": " ")}>
        <div className={"accordion__text" + (this.state.collapse ? " open" : "")+ (this.props.boton ? " col-lg-9" : "" )} onClick={this.toggle}><i></i>{title}</div>
         <div className={this.props.boton?"col-lg-3 accordion__text":""}>{this.props.boton?this.props.boton:null} </div>
        <Collapse isOpen={open?open:this.state.collapse}>
          <div className="accordion__content">{this.props.children}</div>
        </Collapse>
      </Styled>
        </ThemeProvider>
    );
  }
}

export default Accordion;