import React, { Component } from 'react';
import styled from 'styled-components';
import { Col } from 'reactstrap';
import ThemeProvider from "./ThemeProvider";

const Styled = styled.div`
  background: #ffffff;
  border-radius: 6px;
  box-shadow: 10px 20px 30px 0 rgba(51, 51, 51, 0.1);
  display: flex;
  width: 100%;
  > div {
    padding: 2rem 2.5rem;
    &:not(:first-child) {
      border-left: 1px solid rgba(51, 51, 51, 0.1);
      @media (max-width: 991px) {
        border-left:0;
        border-top:1px solid rgba(51, 51, 51, 0.1);
      }
    }
  }

  @media (max-width: 991px) {
    flex-direction: column;
  }
  
`;

class BoxDashboard extends Component {
  state = {
    firstCol: this.props.firstCol,
    secondCol: this.props.secondCol,
  }
  render() {
    const {firstColSize, secondColSize} = this.props;
    return(
        <ThemeProvider>
      <Styled>
        <Col lg={firstColSize} md="auto">
          {this.props.firstCol}
        </Col>
        {this.props.secondCol &&
          <Col lg={secondColSize} md="auto">
            {this.props.secondCol}
          </Col>
        }
      </Styled>
        </ThemeProvider>
    );
  }
}

export default BoxDashboard;