import React, { Component } from 'react';
import styled from "styled-components";
import ThemeProvider from "./ThemeProvider";

const StyledCard = styled.div`
  border-radius: 6px;
  box-shadow: 10px 20px 30px 0 rgba(51, 51, 51, 0.1);
  display: flex;
  flex-direction: column;
  min-height: 380px;
  padding: 2em;
  width: 100%;

  .cardIcon {
    display:block;
    height: 90px;
    margin: 30px auto;
  }
  p {
    color: ${props => props.theme.colorBlack};
    font-family: 'Roboto', sans-serif;
    font-size: ${props => props.theme.font.size.medium};
    line-height: 1.25;
    margin: 0;
    strong {
      font-weight: ${props => props.theme.font.weight.bold};
    }
  }
  .cardLinks {
    margin-top: auto;
    a:not(:first-of-type) {
      margin-left: 30px;
    }
  }
`;

class CardHelp extends Component {

  state = {
    imgPath: this.props.imgPath,
  }

  render() {

    let title = this.props.title;
    let message = this.props.message;

    return(
        <ThemeProvider>
      <StyledCard>
        <div>
          <img className="cardIcon" src={this.props.imgPath} alt="icon" />
          <p><strong>{title}</strong></p>
          <p>{message}</p>
        </div>
        <div className="cardLinks">
          {this.props.children}
        </div>
      </StyledCard>
        </ThemeProvider>
    );
  }
}

export default CardHelp;