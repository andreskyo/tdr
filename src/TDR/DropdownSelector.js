import React, { Component } from 'react';
import styled from 'styled-components';
import ReactSelect from 'react-select';
import PropTypes from 'prop-types';
import ThemeProvider from "./ThemeProvider";

import arrowIcon from '../assets/images/arrow-up.svg';

// const options = [
//   { value: 'enero', label: 'Enero' },
//   { value: 'febrero', label: 'Febrero' },
//   { value: 'marzo', label: 'Marzo' },
//   { value: 'abril', label: 'Abril' },
//   { value: 'mayo', label: 'Mayo' },
//   { value: 'junio', label: 'Junio' },
//   { value: 'julio', label: 'Julio' },
//   { value: 'agosto', label: 'Agosto' },
//   { value: 'septiembre', label: 'Septiembre' },
//   { value: 'octubre', label: 'Octubre' },
//   { value: 'noviembre', label: 'Noviembre' },
//   { value: 'diciembre', label: 'Diciembre' }
// ];



const Select = styled(ReactSelect)`
  &.select-container {
    display: inline-block;
    min-width: 260px;
  }
  .select {
    &__control {
      border: none;
      min-height: auto;
      &--is-focused {
        box-shadow: none;
      }
      &--menu-is-open {
        .select__single-value::after {
          transform: rotate(0);
        }
      }
    }
    &__value-container {
      padding: 0;
      padding-bottom: 1px;
    }
    &__single-value {
      align-items: center;
      border-bottom: 1px solid ${props => props.theme.colorBlack};
      color: ${props => props.theme.colorBlack};
      display: flex;
      font-family: 'Roboto', sans-serif;
      font-size: inherit;
      font-weight: ${props => props.theme.font.weight.medium};
      line-height: inherit;
      padding: 0;
      text-transform: lowercase;
      &::after {
        background-image: url(${arrowIcon});
        background-repeat: no-repeat;
        background-size: contain;
        content: "";
        display: inline-block;
        height: 8px; 
        margin-left: 5px;
        transform: rotate(180deg);
        transition: all .3s ease-in-out;
        width: 13px;  
      }
    }
    &__menu {
      background: #ffffff;
      box-shadow: 0 0 50px 0 rgba(51, 51, 51, 0.2);
      margin-top: 14px;
      max-width: 170px;
      z-index: 10;
      &::before {
        content: "";
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #ffffff;
        top: -10px;
        left: 50%;
        position: absolute;
        transform: translateX(-50%);
      }
      &-list {        
        padding: 0;
        &::-webkit-scrollbar {
          width: 7px;
          background-color: transparent
        }
        &::-webkit-scrollbar-track {
          border-radius: 7px;
	        background-color: transparent;
        }
        &::-webkit-scrollbar-thumb {
         background-color: ${props => props.theme.lightGray};
         border-radius: 7px;
        }
      }
    }
    &__option {
      background-color: transparente !important;
      border-bottom: 1px solid ${props => props.theme.lightGray};
      color: ${props => props.theme.colorBlack};
      font-family: 'Roboto', sans-serif;
      font-size: ${props => props.theme.font.size.normal};
      font-weight: ${props => props.theme.font.weight.normal};
      line-height: 1;
      padding: 18px 20px;
      transition: color .2s ease-in-out;
      &:last-child {
        border: none;
      }
      &:hover {
        cursor: pointer;
      }
      &--is-selected {
        display: none;
      }
      &--is-focused {
        color: ${props => props.theme.primaryColor};
        background-color: transparent;
      }
    }
  }
`;

class DropdownSelector extends Component {

  
  static propTypes = {
    onChange: PropTypes.func
  }

  
  static defaultProps = {
    onChange: () => {},
  }

  state = {
    isSearchable: false,
    isClearable: false,
    isDisabled: false,
    value: null,
    options: []
  }


  handleChange = (val) => {
    console.log(`Option selected:`, val);

    this.setState(prevState => ({ 
      value: prevState.val })
    );
    
    this.props.onChange(val);

  }

  

  componentWillReceiveProps(nextProps) {
    // console.log('componentWillReceiveProps');
    // console.log(nextProps);

    if (nextProps.options !== this.state.options) {
      this.setState({ options: nextProps.options });
      // this.getDefaultValue();
    }

    if (nextProps.value !== this.state.value) {
      this.setState({ value: nextProps.value });
    }

  }


  render() {
    const { isSearchable, isClearable, isDisabled, value, options } = this.state;
    // const { options } = this.props;

    return (
        <ThemeProvider>
        <Select
          className={'select-container'}
          classNamePrefix={"select"}
          value={value}
          // value={props.options.filter(option => option.label === 'Some label')}
          // defaultValue={this.getDefaultValue}
          label={"enero"}
          onChange={this.handleChange}
          options={options}
          isSearchable={isSearchable}
          isClearable={isClearable}
          isDisabled={isDisabled}
          components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null}}
        />
        </ThemeProvider>
    );
  }
}

export default DropdownSelector;
