import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NumberCurrency from "./NumberCurrency";

import imgRisk1 from '../assets/images/riesgo1.svg';
import imgRisk2 from '../assets/images/riesgo2.svg';
import imgRisk3 from '../assets/images/riesgo3.svg';
import imgRisk4 from '../assets/images/riesgo4.svg';
import ThemeProvider from "./ThemeProvider";

const Styled = styled.div`
    position: relative;
    text-align: center;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    p {
      color: ${props => props.theme.colorBlack};
      font-family: 'Roboto', sans-serif;
      font-size: ${props => props.theme.font.size.normal};
      line-height: 1;
      margin: 0 auto;
      &.-blue {
        color: ${props => props.theme.secondaryColor};
        display: block;
        font-size: 45px;
        letter-spacing: -1.6px;
        margin-top: 1rem;
        @media(max-width:1199px) {
          font-size: 40px;
        }
        @media(max-width:768px) {
          font-size: 38px;
        }
      }
      &.price sup {
        top: -0.45em;
        font-size: 60%;
        letter-spacing: -0.016em;
      }
      &.description {
        color: ${props => props.theme.brownGray};
        font-size: ${props => props.theme.font.size.small};
        line-height: 1.2;
        max-width: 220px;
        margin: 5px auto;
      }
      &.subtitle {
          font-size: 12px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.29;
            letter-spacing: 0.1px;
            text-align: center;
            color: #0574b9;
      }
    }

    .iconRisk {
      display: block;
      height: 35px;
      margin: 1.2rem auto 10px;
    }
  
    .textLink {
      margin: auto auto 14px;
      @media(max-width:991px) {
        margin: 20px auto 0;
      }
    }
     .loading{
     opacity:0.1
     }
`;

class SummaryCardData extends Component {

  state = {
    risk: this.props.risk,
  }
  
  static propTypes = {
    hasPrice: PropTypes.bool,
    hasRisk: PropTypes.bool,
    risk: PropTypes.number,
  }

    imgRisk = () => {
        const {risk} = this.props;

        if (risk === 0) {
            return imgRisk1;
        }
        else if (risk === 1) {
            return imgRisk1;
        }
        else if (risk === 2) {
            return imgRisk2;
        } else if (risk === 3) {
            return imgRisk3;
        } else if (risk === 4) {
            return imgRisk4;
        }
    };

    riskTitle = () => {
        const {risk} = this.props;

        if (risk === 0) {
            return "Sin Calificación Fiscal";
        } else if (risk === 1) {
            return "Sin Riesgo ";
        }
        else if (risk === 2) {
            return "Riesgo Bajo";
        } else if (risk === 3) {
            return "Riesgo Medio";
        } else if (risk === 4) {
            return "Riesgo Alto";
        }
    } ;

  render() {
    const {title, amount, description, date,subtitle, loading} = this.props;
    return(
        <ThemeProvider>
      <Styled className="summaryCard">
          <p><strong>
          {this.props.hasRisk ?
            this.riskTitle() + " al " + date :
            title
          }
          </strong></p>
          {subtitle &&
          <p className={loading?"subtitle loading":"subtitle"}>{subtitle}</p>
          }

          {this.props.hasRisk ? 
            <img alt="Riesgo" className="iconRisk" src={this.imgRisk()}/> : 
            this.props.hasPrice ?
            <p className={loading?"loading -blue" + (this.props.hasPrice ? " price" : "") : "-blue" + (this.props.hasPrice ? " price" : "")}><NumberCurrency number={amount} /></p> :
            <p className={loading?"loading -blue" + (this.props.hasPrice ? " price" : "") : "-blue" + (this.props.hasPrice ? " price" : "")}>{amount}</p>
            
          }
          {description &&
            <p className={loading?"descripcion loading":"description"}>{description}</p>
          }

          {this.props.children}
      
      </Styled>
        </ThemeProvider>
    );
  }
}

export default SummaryCardData;