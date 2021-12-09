import React, { Component } from 'react';
import styled from "styled-components";
import { Row, Col, Container } from 'reactstrap';
import ThemeProvider from "./ThemeProvider";
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";

const BoxRow = styled.div`
  background-color: #F4F4F4;
  padding: 40px 0;
`;

const BoxContainer = styled(Container)`
  display: flex;
  transition: all .2s ease-in-out;

  @media(max-width: 991px) {
    flex-direction: column;
  }

  .boxCol {
    transition: all .2s ease-in-out;
    margin-bottom: 10px;
  }

  &:hover {
    .boxCol {
      opacity: .5;
      .boxHover {
        box-shadow: none;

      }
      &:hover {
        opacity: 1;
        .boxHover {
          box-shadow: 10px 20px 30px 0 rgba(51, 51, 51, 0.2);
          cursor: pointer;
          transform: translateY(-10px);
          .boxTitle {
            color: ${props => props.theme.secondaryColor};
          }
        }
      }
    }
  }

  .disabled{
    opacity: .5;
    box-shadow: none;
  }

`;

const BoxHover = styled.div`
  border-radius: 6px;
  box-shadow: 10px 20px 30px 0 rgba(51, 51, 51, 0.2);
  background-color: white;
  font-family: 'Roboto', sans-serif;
  padding: 40px;
  text-align: center;
  transition: all .2s ease-in-out;
  height: 100%;
  
    .pagos360{
  width: 100%!important;
  height: 80px!important;
  
  }

  .boxTitle, .boxPayment {
    font-size: ${props => props.theme.font.size.big};
    @media(max-width: 1199px) {
      font-size: 1.4rem;
    }
  }
  .boxTitle {
    color: ${props => props.theme.colorBlack};
    font-weight: ${props => props.theme.font.weight.medium};
    margin: 0;
    transition: all .2s ease-in-out;
  }

  .boxPayment {
    color: ${props => props.theme.secondaryColor};
    margin: 0;
    span {
      /*font-size: ${props => props.theme.font.size.base};*/
    }
  }
  .boxDescription {
    color: ${props => props.theme.brownGray};
    font-size: ${props => props.theme.font.size.normal};
    margin: 10px auto 0;
    width: 100%;
  }

  .boxNote {
    color: ${props => props.theme.colorBlack};
    font-size: ${props => props.theme.font.size.normal};
    width: 100%;
    margin-bottom: 0px;
  }

  .boxSmall {
      font-size: ${props => props.theme.font.size.small}
    }

  .bold {
    font-weight: ${props => props.theme.font.weight.medium};
  }

  .boxTitle.loading{
  opacity: 0.1;
  }

    .boxPayment.loading{
  opacity: 0.1;
  }

    .boxDescription.loading{
  opacity: 0.1;
  }
  .img.ib{
  width: 125px;
  }
  


  &:not(:first-of-type) {
    margin-left: 3%;
    @media(max-width: 991px) {
      margin-left: 0;
    }
  }
  @media(max-width: 991px) {
    &:not(:last-of-type) {
      margin: 0 0 20px;
    }
  }
`;

const BoxHoverDisabled = styled.div`
  border: 1px solid #999999;
  border-radius: 6px;

  background-color: transparent;
  font-family: 'Roboto', sans-serif;
  padding: 40px;
  text-align: center;
  transition: all .2s ease-in-out;
  height: 100%;

  .boxTitle, .boxPayment {
    font-size: ${props => props.theme.font.size.big};
    @media(max-width: 1199px) {
      font-size: 1.4rem;
    }
  }
  .boxTitle {
    color: ${props => props.theme.colorBlack};
    font-weight: ${props => props.theme.font.weight.medium};
    margin: 0;
    transition: all .2s ease-in-out;
  }

  .boxPayment {
    color: ${props => props.theme.secondaryColor};
    margin: 0;
    span {
      /*font-size: ${props => props.theme.font.size.base};*/
    }
  }
  
  .boxTransfer{
    color: ${props => props.theme.secondaryColor};
    margin: 0;
    font-size: 17px;  
  }
  
  .img.ib{
      width: 125px;
  }
  .boxDescription {
    color: ${props => props.theme.brownGray};
    font-size: ${props => props.theme.font.size.normal};
    margin: 10px auto 0;
    width: 100%;
  }

  .boxTitle.loading{
  opacity: 0.1;
  }

  .boxPayment.loading{
  opacity: 0.1;
  }

  .boxDescription.loading{
  opacity: 0.1;
  }
  
  .pagos360{
  width: 120px!important;
  height: 80px!important;
  
  }


  &:not(:first-of-type) {
    margin-left: 3%;
    @media(max-width: 991px) {
      margin-left: 0;
    }
  }
  @media(max-width: 991px) {
    &:not(:last-of-type) {
      margin: 0 0 20px;
    }
  }
`;

class BoxHoverLinks extends Component {

  onClick = this.onClick.bind(this);

  onClick() {

  }

  render() {
    const { isLoadingDeuda,
        firstColDisabled,
        firstColTitle,
        firstColTotal,
        firstColDesc,
        firstSmallText,
        firstColImg,
        firstColOnClick,
        secondColDisabled,
        secondColTitle,
        secondColSubtitle,
        secondColTotal,
        secondSmallText,
        secondColDesc,
        secondColImg,
        secondColOnClick,
        thirdColDisabled,
        thirdColTitle,
        thirdColSubtitle,
        thirdSmallText,
        thirdColTotal,
        thirdColDesc,
        thirdColImg,
        thirdColOnClick,
        fourColDisabled,
        fourColTitle,
        fourSmallText,
        fourColTotal,
        fourColDesc,
        fourColImg,
        fourColOnClick,
        fiveColDisabled,
        fiveColTitle,
        fiveSmallText,
        fiveColTotal,
        fiveColDesc,
        fiveColImg,
        fiveColOnClick
    } = this.props;

    return(
        <ThemeProvider>
      <BoxRow className="boxHoverLinks"> 
        <BoxContainer>
          {firstColTitle &&
            <Col className={firstColDisabled?" ":"boxCol"}>
                {firstColDisabled?
                    <BoxHoverDisabled   >
                        <h3 className="boxTitle">{firstColTitle}</h3>
                        {firstColImg?
                            <div className="imagenContainer" >
                                <img className="img ib" alt={firstColTitle} src={firstColImg} />
                            </div>
                            :null}

                        <p className={isLoadingDeuda?"boxDescription ":"boxDescription"}>{firstColDesc}</p>
                    </BoxHoverDisabled>
                    :
                  <BoxHover className={firstColDisabled?"boxDisabled":"boxHover"} onClick={firstColDisabled?null:()=>{firstColOnClick()}} >
                    <h3 className={isLoadingDeuda?"boxTitle ":"boxTitle"}>{firstColTitle}</h3>
                      {firstColImg?
                          <div className="imagenContainer" >
                              <img className="img ib" src={firstColImg} alt={firstColTitle} />
                          </div>
                          :null}

                      {firstColDisabled?null: <p className={isLoadingDeuda?"boxPayment loading":"boxPayment"}>{firstSmallText && <span>{firstSmallText}</span>}{firstColTotal}</p>}
                    <p className={isLoadingDeuda?"boxDescription ":"boxDescription"}>{firstColDesc}</p>
                  </BoxHover>}
            </Col>
          }
          {secondColTitle &&
            <Col className={secondColDisabled?" ":"boxCol"}>
                {secondColDisabled?
                    <BoxHoverDisabled   >
                        <h3 className="boxTitle">{secondColTitle}</h3>
                        {secondColImg?
                            <div className="imagenContainer" >
                                <img className="img ib" src={secondColImg} alt={secondColTitle} />
                            </div>
                            :null}

                        <p className={isLoadingDeuda?"boxDescription ":"boxDescription"}>{secondColDesc}</p>
                    </BoxHoverDisabled>
                    :
                  <BoxHover className="boxHover" onClick={secondColDisabled?null:()=>{secondColOnClick()}}>
                    <h3 className={isLoadingDeuda?"boxTitle ":"boxTitle"}>{secondColTitle}</h3>
                      {secondColImg?
                          <div className="imagenContainer" >
                              <img className="img ib" src={secondColImg} alt={secondColTitle} />
                          </div>
                          :null}
                    <p className={isLoadingDeuda?"boxPayment loading":"boxPayment"}>{secondSmallText && <span>{secondSmallText}</span>}{secondColTotal}</p>
                    <p className={isLoadingDeuda?"boxDescription ":"boxDescription"}>{secondColDesc}</p>
                      {secondColSubtitle?<p className={isLoadingDeuda?"boxDescription ":"boxDescription"}><b>{secondColSubtitle}</b></p>:null }
                  </BoxHover>}
            </Col>
          }
          {thirdColTitle &&
            <Col className={thirdColDisabled?" ":"boxCol"}>
                {thirdColDisabled?
                    <BoxHoverDisabled   >
                        <h3 className="boxTitle">{thirdColTitle}</h3>
                        {thirdColImg?
                            <div className="imagenContainer" >
                                <img className="img ib" src={thirdColImg} alt={thirdColTitle} />
                            </div>
                            :null}

                        <p className={isLoadingDeuda?"boxDescription ":"boxDescription"}>{thirdColDesc}</p>
                    </BoxHoverDisabled>
                    :
                  <BoxHover className="boxHover" onClick={thirdColDisabled?null:()=>{thirdColOnClick()}}>
                    <h3 className={isLoadingDeuda?"boxTitle ":"boxTitle"}>{thirdColTitle}</h3>
                      {thirdColImg?
                          <div className="imagenContainer" >
                              <img className="img ib" src={thirdColImg} alt={thirdColTitle} />
                          </div>
                          :null}
                    <p className={isLoadingDeuda?"boxPayment loading":"boxPayment"}>{thirdSmallText && <span>{thirdSmallText}</span>}{thirdColTotal}</p>
                    <p className={isLoadingDeuda?"boxDescription ":"boxDescription"}>{thirdColDesc}</p>
                      {thirdColSubtitle?<p className={isLoadingDeuda?"boxDescription ":"boxDescription"}><b>{thirdColSubtitle}</b></p>:null }
                  </BoxHover>}
            </Col>
          }
            {fourColTitle &&
            <Col className={fourColDisabled?" ":"boxCol"}>
                {fourColDisabled?
                    <BoxHoverDisabled   >
                        <h3 className="boxTitle">{fourColTitle}</h3>
                        {fourColImg?
                            <div className="imagenContainer" >
                                <img className="img pagos360" src={fourColImg} alt={fourColTitle} style={{width:"100%!important",height:"80px!important"}} />
                            </div>
                            :null}

                        <p className={isLoadingDeuda?"boxDescription ":"boxDescription"}>{fourColDesc}</p>
                    </BoxHoverDisabled>
                    :
                    <BoxHover className="boxHover" onClick={fourColDisabled?null:()=>{fourColOnClick()}}>
                        <h3 className={isLoadingDeuda?"boxTitle ":"boxTitle"}>{fourColTitle}</h3>
                        {fourColImg?
                            <div className="imagenContainer" >
                                <img className="img pagos360" src={fourColImg} alt={fourColTitle}  style={{width:"100%!important",height:"80px!important"}} />
                            </div>
                            :null}
                        <p className={isLoadingDeuda?"boxPayment loading":"boxPayment"}>{fourSmallText && <span>{fourSmallText}</span>}{fourColTotal}</p>
                        <p className={isLoadingDeuda?"boxDescription ":"boxDescription"}>{fourColDesc}</p>
                    </BoxHover>}
            </Col>
            }
            {fiveColTitle &&
            <Col className={fiveColDisabled?" ":"boxCol"}>
                {fiveColDisabled?
                    <BoxHoverDisabled   >
                        <h3 className="boxTitle">{fiveColTitle}</h3>
                        {fiveColImg?
                            <div className="imagenContainer" >
                                <img className="img ib" src={fiveColImg} alt={fiveColTitle} style={{width:"100%!important",height:"80px!important"}} />
                            </div>
                            :null}

                        <p className={isLoadingDeuda?"boxDescription ":"boxDescription"}>{fiveColDesc}</p>
                    </BoxHoverDisabled>
                    :
                    <BoxHover className="boxHover" onClick={fiveColDisabled?null:()=>{fiveColOnClick()}}>
                        <h3 className={isLoadingDeuda?"boxTitle ":"boxTitle"}>{fiveColTitle}</h3>
                        {fiveColImg?
                            <div className="imagenContainer" >
                                <img className="img ib" src={fiveColImg} alt={fiveColTitle}  style={{width:"100%!important",height:"80px!important"}} />
                            </div>
                            :null}
                        <p className={isLoadingDeuda?"boxTransfer loading":"boxTransfer"}>{fiveSmallText && <span>{fiveSmallText}</span>}{fiveColTotal}</p>
                        <p className={isLoadingDeuda?"boxDescription ":"boxDescription"}>{fiveColDesc}</p>
                    </BoxHover>}
            </Col>
            }
        </BoxContainer>
      </BoxRow>
        </ThemeProvider>
    );
  }
}

export default BoxHoverLinks;