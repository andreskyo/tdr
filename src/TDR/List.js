import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ThemeProvider from "./ThemeProvider";

const StyledList = styled.div`
  width: 100%;
  @media(max-width: 768px) {
    width: auto;
    overflow-x: scroll;
    &::-webkit-scrollbar { 
        display: none; 
    } 
  }
  .listHeader {
    display: flex;
    margin-bottom: -10px;
    padding: 5px 10px;
    .titleHeader {
      color: ${props => props.theme.colorBlack};
      font-size: ${props => props.theme.font.size.normal};
      font-weight: ${props => props.theme.font.weight.bold};
      line-height: 1;
      margin-bottom: 0;
      @media(max-width:768px) {
        font-size: ${props => props.theme.font.size.small};
      }
    }
    .col {
      padding-left: 0;
      padding-right: 0;
      &:nth-child(1) {
        flex: 10% 0 0;
      }
      &:nth-child(2) {
        flex: 15% 0 0;
      }
      &:nth-child(3) {
        flex: 50% 0 0;
      }
      &:nth-child(4) {
        flex: 25% 0 0;
      }
      @media(max-width: 840px) {
        &:nth-child(1) {
          flex: 15% 0 0;
        }
        &:nth-child(2) {
          flex: 20% 0 0;
        }
        &:nth-child(3) {
          flex: 40% 0 0;
        }
      }
      @media (max-width: 768px) {
        flex: 0 0 auto !important;
        min-width: 130px;
        width: auto;
        &:nth-child(1) {
          min-width: 90px;
        }
        &:nth-child(3) {
          width: 230px;
        }
        &:nth-child(4) {
          min-width: 100px;
          width: 100px;
        }
      }
    }
  }
  .listBody {
    border-top: 1px solid ${props => props.theme.lightGray};
    margin: 15px 0 20px;
    width: 100%;
    @media(max-width: 768px) {
      width: 570px;
    }
    > * {
      border-bottom: 1px solid ${props => props.theme.lightGray};
      padding-left: 10px;
      padding-right: 10px;
      @media(max-width: 768px) {
        padding-left: 0;
        padding-right: 0;
      }
    }
  }

  .search-not-found {
    border: 1px solid ${props => props.theme.lightGray};
    border-radius: 6px;
    color: ${props => props.theme.colorBlack};
    font-family: 'Roboto', sans-serif;
    font-size: ${props => props.theme.font.size.normal};
    margin-top: 20px;
    padding: 2em;
    text-align: center;
  }

  &.fullwidth {
    width: 100%;
    overflow: visible;
    @media(max-width: 768px) {
      .listContainer {
        overflow-x: visible;
      }
    }
    .listBody {
      width: 100% !important;
    }
  }
`;

class List extends Component {

  static propTypes = {
    withHeader: PropTypes.bool,
    fullWidth: PropTypes.bool
  }

  render() {
    const { firstTitle, secondTitle, thirdTitle, fourthTitle } = this.props;
    return(<ThemeProvider>
      <StyledList className={"listContainer" + (this.props.fullWidth ? " fullwidth" : "")}>
      {this.props.withHeader &&
        <div className="listHeader">
        {firstTitle && <p className="col titleHeader">{firstTitle}</p>}
        {secondTitle && <p className="col titleHeader">{secondTitle}</p>}
        {thirdTitle && <p className="col titleHeader">{thirdTitle}</p>}
        {fourthTitle && <p className="col titleHeader">{fourthTitle}</p>}
        </div>
      }
        <div className="listBody">
          {this.props.children}
        </div>
      </StyledList>
        </ThemeProvider>
    );
  }
}

export default List;