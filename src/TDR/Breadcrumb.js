import React, { Component } from 'react';
import styled from 'styled-components';
import ThemeProvider from "./ThemeProvider";

const Styled = styled.ul`
  align-items: center;
  display: flex;
  margin: 2rem 0 1.2rem;
  padding: 0;
`;

class Breadcrumb extends Component {

    constructor(props) {
        super(props);
        this.state = {
          intervalId: null,
        };
    }

  render() {

    return (
        <ThemeProvider>
      <Styled style={{margin:this.props.margen }}>
        {this.props.children}
      </Styled>
        </ThemeProvider>
    );
  }
}

export default Breadcrumb;