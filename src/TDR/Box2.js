import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ThemeProvider from "./ThemeProvider";

const StyledBox = styled.div`
  align-item: center;
  color: ${props => props.theme.colorBlack};
  display:flex;
  font-family: 'Roboto', sans-serif;
  min-height: 135px;
  width: 100%;

  &.withBorder {
    align-items: flex-start;
    border: solid 1px ${props => props.theme.lightGray};
    border-radius: 6px;
    height: 100%;
    padding: 26px 30px;
    transition: all .2s ease-in-out;
    &:hover {
      border-color: transparent;
      box-shadow: 0 0 30px 0 rgba(51, 51, 51, 0.1);
    }
    .boxLinks {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      line-height: 0;
    }
    a {
      margin-left: 0;
    }
    p {
      font-size: ${props => props.theme.font.size.medium};
    }
    @media (max-width: 768px) {
      height: auto;
      margin-bottom: 2rem;
      p {
        font-size: ${props => props.theme.font.size.normal};
      }
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h3 {
    font-size: ${props => props.theme.font.size.medium};
    font-weight: ${props => props.theme.font.weight.bold};
    line-height: 1.4;
    margin: 0;
    padding-left: 17px;
  
  }
  h4 {
    font-size: ${props => props.theme.font.size.medium};
    font-weight: ${props => props.theme.font.weight.bold};
    line-height: 1.4;
    margin: 0;
    color:#d0021b;
     padding-left: 5px;
  }
  p {
    font-size: ${props => props.theme.font.size.normal};
    line-height: 1.4;
    margin-bottom: 1rem;
    &.notification-msg {
      color: ${props => props.theme.dangerColor};
    }
  }
  a {
    line-height: 1.5;
    margin-top: 3px;
  }
  &:not(.withBorder) a:not(:first-of-type) {
    margin-left: 30px;
  }
  .icon {
    height: 100%;
    max-width: 70px;
  }
  &.withIcon {
    align-items: center;
    justify-content: space-between;
  }
  .loading{
    opacity:0.1
    }
`;

class Box2 extends Component {

    static propTypes = {
        withIcon: PropTypes.bool,
        withBorder: PropTypes.bool,
        notificationNum: PropTypes.number,
        linkTargetBlank: PropTypes.bool,
    }

    state = {
        title: this.props.title,
        title1: this.props.title1,
        message: this.props.message,
        withBorder: this.props.withBorder,
        notificationNum: this.props.notificationNum,
        linkText: this.props.linkText,
        linkPath: this.props.linkPath,
        imgPath: this.props.imgPath,
    }

    render() {
        const leyenda =<div><h4 className={this.props.loading && "loading"}>{this.props.title1}</h4></div>;
        const leyenda1=<div><h3>{this.props.title}</h3></div>;
        const leyenda2=     <div className="row">
            <div>{leyenda1}</div>
            <div>{leyenda}</div>
        </div>;
        return (
            <ThemeProvider>
            <StyledBox className={(this.props.withIcon ? "withIcon" : "") + (this.props.withBorder ? " withBorder" : "")}>
                <div>
                    <div>
                        {leyenda2}
                        {/*<h3>{this.props.title}  </h3>*/}
                    </div>

                    {(this.props.notificationNum > 0 || this.props.message) &&
                    <p className={this.props.notificationNum > 0 ? "notification-msg" : ""}>
                        {this.props.notificationNum > 0 ?
                            this.props.notificationNum + " notificaciones sin leer" :
                            this.props.message
                        }
                    </p>
                    }

                    <div className="boxLinks">{this.props.children}</div>

                </div>
                {this.props.withIcon &&
                <img className="icon" src={this.props.imgPath} alt="icon" />
                }
            </StyledBox>
            </ThemeProvider>
        );
    }
}

export default Box2;