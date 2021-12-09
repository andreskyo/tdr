import React, { Component } from 'react';
import styled from "styled-components";
import CurrencyFormat from 'react-currency-format';


const StyledSup = styled.sup`
    font-size: 60%;
    margin-left: 0.2em;
    letter-spacing: 0.02em;
`;

class NumberCurrency extends Component {

  formatCurrency = (value) => {
    const value_parts = value.split(',');
    return <span className={this.props.className}>{value_parts[0]}<StyledSup>{value_parts[1]}</StyledSup></span>;
  }
  
  render() {
    const { number,prefix } = this.props;
    return(
      <CurrencyFormat value={parseFloat(number).toFixed(2)} renderText={this.formatCurrency} displayType={'text'} decimalScale={2} isNumericString={true} decimalSeparator={','} thousandSeparator={"."} prefix={prefix? prefix + ' $': '$'} />
    );
  }
}

export default NumberCurrency;