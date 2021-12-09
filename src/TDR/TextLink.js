import React, { Component } from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import arrowIcon from '../assets/images/arrow.svg';
import ThemeProvider from "./ThemeProvider";

const TextLinkArrow = styled.a`
  cursor: pointer;
  color: ${props => props.theme.colorBlack};
  font-family: 'Roboto', sans-serif;
  font-weight: ${props => props.theme.font.weight.medium};
  font-size: ${props => props.theme.font.size.normal};
  line-height: 1;
  position: relative;
  padding-right: 14px;
  transition: all .2s ease-in-out;

  &::after {
    background-image: url(${arrowIcon});
    background-repeat: no-repeat;
    background-size: contain;
    content: "";
    display: inline-block;
    height: 9px;
    position: absolute;
    right: 0;
    top: 50%;
    transition: right .2s ease-in-out;
    transform: translateY(-50%);
    width: 6px;
  }

  &:hover {
    color: ${props => props.theme.primaryColor};
    text-decoration: none;
    &::after {
      right: -2px;
    }
  }

  &.disabled {
    cursor: default;
    pointer-events: none;
    color: ${props => props.theme.brownGray};
    &::after {
      -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
      filter: grayscale(100%);
    }
  }
`;

const TextLinkUnderline = styled(TextLinkArrow)`
  text-decoration: underline;
  padding-right: 0;
  &:hover {
    text-decoration: underline;
  }
  &::after {
    display: none;
    background: none;
  }
`;

class TextLink extends Component {

  static propTypes = {
    href: PropTypes.string,
    target: PropTypes.string,
    // onClick: PropTypes.func,
  }

  onClick = this.onClick.bind(this);

  onClick(e) {
    if (this.props.disabled) {
        e.preventDefault();
        return;
    }

    if (this.props.onClick) {
        this.props.onClick(e);
    }
}

  render() {
    const StyledLink = this.props.underline ? TextLinkUnderline : TextLinkArrow;
    return(
        <ThemeProvider>
      <StyledLink
        className={"textLink" + (this.props.disabled ? " disabled" : "")}
        target={this.props.target}
        href={this.props.href}
        style={this.props.style}
        onClick={this.onClick}
        download={this.props.download}
      >{this.props.children}</StyledLink>
        </ThemeProvider>
    );
  }
}

export default TextLink;