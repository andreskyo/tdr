import React, { Component } from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import alertIcon from '../assets/images/i.svg';
import ThemeProvider from "./ThemeProvider";


const StyledAlertCenter = styled.div`
  align-items: center;
  background: ${props => props.theme.lightGray};
  border-radius: 6px;
  color: ${props => props.theme.colorBlack};
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-size: ${props => props.theme.font.size.normal};
  justify-content: center;
  
  margin: 1em 0;
  padding: 1.25em;
  width: 100%;
  p, span, a {
    margin: 0;
    line-height: 1.3;
  }
  p.smaller {
    font-size: ${props => props.theme.font.size.small};
  }
  strong, b {
    font-weight: ${props => props.theme.font.weight.medium};
  }


`;

const StyledAlertIcon = styled(StyledAlertCenter)`
justify-content: flex-start;
  &::before {
    content:"";
    background-image: url(${alertIcon});
    background-repeat: no-repeat;
    background-size: contain;
    display: block;
    height: 30px; width: 30px;
    margin-right: 10px;
  }
  
`;

const StyledImg = styled.img`
    
    height: 30px; width: 30px;
    margin-right: 10px;
   text-align: left;
  
`;

class Alert extends Component {

  static propTypes = {
    withIcon: PropTypes.bool,
  }

  state = {
    withIcon: this.props.withIcon,
  }

  render() {
    const StyledAlert = this.props.withIcon ? StyledAlertIcon : StyledAlertCenter;

    let resultado;
    if(this.props.icon){

        resultado = ( <StyledAlert style={{justifyContent:"flex-start",height:"100%"}} >

                <StyledImg src={this.props.icon}/> {this.props.children}

        </StyledAlert>)
    }else{
      resultado =  <StyledAlert >
          <div>
              {this.props.children}
          </div>
      </StyledAlert>
    }

      return <ThemeProvider>{resultado}</ThemeProvider>;


  }
}

export default Alert;