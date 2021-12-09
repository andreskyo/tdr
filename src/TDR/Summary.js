import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SummaryCardData from "./SummaryCardData";
import ThemeProvider from "./ThemeProvider";

const Styled = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;

  .summaryContainer {
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: .9rem;
    width: 100%;
    .summaryCard {
      &:first-child {
        padding-right: 1rem;
      }
      &:last-child {
        padding-left: 1rem;
      }
      @media (max-width: 991px) {
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
    }
    .summaryCard:not(:first-child)::before {
      background: ${props => props.theme.lightGray};
      bottom: 8px;
      content: "";
      display: block;
      height: 65px;
      left: 0;
      position: absolute;
      width: 1px;

      @media (max-width: 991px) {
        display: block;
        height: 1px;
        margin: 2rem auto 1.5rem;
        position: relative;
        width: 60px;
      }
    }
    @media (max-width: 991px) {
      flex-direction: column;
    }
  }

  > button {
    margin: auto auto 0;
  }

`;

class Summary extends Component {

  static propTypes = {
    twoColumns: PropTypes.bool,
  }

  render() {
    const {firstTitle, firstAmount, firstDescription, secondTitle, secondAmount, secondDescription, firstSubtitle, loadingDeuda, loadingDJ} = this.props;
    return(
        <ThemeProvider>
      <Styled>
        <div className="summaryContainer">
          <SummaryCardData 
            hasPrice
            title={firstTitle}
            amount={firstAmount}
            description={firstDescription}
            subtitle={firstSubtitle}
            loading={loadingDeuda}
          />
          {this.props.twoColumns &&
            <SummaryCardData
              loading={loadingDJ}
              title={secondTitle}
              amount={secondAmount}
              description={secondDescription}
            />
          }
        </div>
        {this.props.children}
      </Styled>
        </ThemeProvider>
    );
  }
}

export default Summary;