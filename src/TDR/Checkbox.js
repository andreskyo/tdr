import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ThemeProvider from "./ThemeProvider";
import iconImg from '../assets/images/path.svg';
import Tooltip from "./Tooltip";

const Styled = styled.div`
  display: inline-block;
  width: 20px;
  .tooltipContainer {
    min-width: 127px;
    text-align: center;
    width: auto;
  }
  &.disabled > input + label {
    cursor: default;
  }
  &.large > label {
    width: 18rem;
  }
  > input {
    opacity: 0;
    display: none;
  }
  > input + label {
    position: relative;
    cursor: pointer; 
    padding-left: 30px;
    display: inline-block;
    line-height: 20px;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: ${props => props.theme.font.size.normal};
    color: ${props => props.theme.colorBlack};
    &:before {
      content: '';
      position: absolute;
      left:0; top: 50%;
      width: 20px;
      height: 20px;
      border-radius: 6px;
      background: ${props => props.theme.lightGray};
      transform: translateY(-50%);
      transition: background .15s ease-in-out;
    }
    &:after {
      content: '';
      background: url(${iconImg}) no-repeat center;
      background-size: contain;
      display: block
      height: 10px;
      left: 4px;
      position: absolute;
      top: 50%;
      transform: scale(0) translateY(-40%);
      transition: all .2s ease-in-out;
      width: 12px;
    }
  }
  > input:not(:checked) + label {
      &:after {
        opacity: 0;
        transform: scale(0) translateY(-40%);
      }
  }
  > input:disabled:not(:checked) + label {
      &:before {
        
      }
  }
  > input:checked + label {
    &:before {
      background: ${props => props.theme.primaryColor};
    }
    &:after {
      opacity: 1;
      transform: scale(1) translateY(-40%);
    }
  }
  > input:disabled:checked + label {
    &:after {
      color: #999;
    }
  }
  > input:disabled + label {
    color: #aaa;
  }
  > input:checked:focus + label, input:not(:checked):focus + label {
    &:before {
      border: 1px dotted blue;
    }
  }
`;

class Checkbox extends Component {

  static propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    large: PropTypes.bool,
    onChange: PropTypes.func,
    label: PropTypes.string,
    hasTooltip: PropTypes.bool
  }

  static defaultProps = {
    checked: false,
    disabled: false,
    large: false,
    onChange: () => {},
    onHandleChecked: () => {}
  }

  state = {
    checked: this.props.checked === undefined? false : this.props.checked,
    name: this.props.name,
    value: this.props.value,
    displayTooltip: false
  }

  componentDidUpdate(prevProps){
    if(prevProps.checked!==this.props.checked){
      this.setState({checked: this.props.checked });
    }
  }

  hideTooltip = this.hideTooltip.bind(this);
  showTooltip = this.showTooltip.bind(this);

  hideTooltip () {
    this.setState({displayTooltip: false})
  }

  showTooltip () {
    this.setState({displayTooltip: true})
  }

  handleChange = () => {
    const newValue = !this.state.checked;
    this.props.onChange(newValue);   
    this.setState({
      checked: newValue
    });
  }

  handleClick = (e) => {
    if (this.props.disabled) {
        e.preventDefault();
        return;
    }
    this.handleChange();
    if (this.props.onClick) {
        this.props.onClick(e);
    }
  }

  render() {
    const {tooltipText, tooltipPos} = this.props;
    return (
        <ThemeProvider>
      <Styled className={"checkBox" + (this.props.disabled ? " disabled" : "") + (this.props.large ? " large" : "")} onMouseLeave={this.hideTooltip} onMouseOver={this.showTooltip} >
        <input
          type="checkbox"
          disabled={this.props.disabled}
          name={this.props.name}
          value={this.props.value}
          checked={this.state.checked}
          onChange={this.handleChange}
          onMouseOver={this.props.onMouseOver}
        />
        <label onClick={this.handleClick}>{this.props.label}</label>

        {this.props.hasTooltip &&
          this.state.displayTooltip &&
            <Tooltip position={tooltipPos}><p>{tooltipText}</p></Tooltip>
        }
      </Styled>
        </ThemeProvider>
    );
  }
  
}

export default Checkbox;

