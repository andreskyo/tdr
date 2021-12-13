import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";





/***-----Large---***/

const ButtonLarge = styled.button`
&:hover ${Button}{
 background:#004BE8;
 border:1px solid #004BE8;
}
&:active ${Button}{
  background:#0B5FFF;;
  border:1px solid #0B5FFF;
}
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: absolute;
width: 140px;
height: 50px;
left: 20px;
top: 20px;
background: #124596;
border-radius: 8px;
border:1px solid #124596;
cursor:pointer;
`
const ButtonLargeD = styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: absolute;
width: 140px;
height: 50px;
left: 20px;
top: 20px;
background: rgba(11, 95, 255, 0.5);
border-radius: 8px;
border:none;
`





const ButtonLargeSecondary = styled.button`
&:hover ${Button}{
  background:#0C9E42;
  border:1px solid #0C9E42;
 }
 &:active ${Button}{
   background:#009236;
   border:1px solid #009236;
 }
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: absolute;
width: 140px;
height: 50px;
left: 20px;
top: 20px;
background: #19AB4F;
border-radius: 8px;
border:1px solid #19AB4F;
cursor:pointer;
`

const ButtonLargeSecondaryD = styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: absolute;
width: 140px;
height: 50px;
left: 20px;
top: 20px;
background: rgba(25, 171, 79, 0.5);
border-radius: 8px;
border:none;
`

const ElementsLarge = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
position: static;
width: 108px;
height: 28px;
left: 16px;
top: 12px;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 0px;
`
const TextLarge = styled.div`
color: #FFFFFF;
font-family: Nunito;
font-size: 18px;
font-weight:bold;


`


///*-------Medium------------*//////



const ButtonMedium = styled.button`
&:hover ${Button}{
  background:#004BE8;
  border:1px solid #004BE8;
 }
 &:active ${Button}{
   background:#0B5FFF;;
   border:1px solid #0B5FFF;
 }
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: absolute;
width: 135px;
height: 45px;
left: 196px;
top: 24px;
background: #124596;
border-radius: 8px;
border:1px solid #124596;
cursor:pointer;
`

const ButtonMediumD = styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: absolute;
width: 135px;
height: 45px;
left: 196px;
top: 24px;
background: rgba(11, 95, 255, 0.5);
border-radius: 8px;
border:none;
cursor:pointer;
`

const ButtonMediumSecondaryD = styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: absolute;
width: 135px;
height: 45px;
left: 196px;
top: 24px;
background: rgba(25, 171, 79, 0.5);
border-radius: 8px;
border:none;
`


const ButtonMediumSecondary = styled.button`
&:hover ${Button}{
  background:#0C9E42;
  border:1px solid #0C9E42;
 }
 &:active ${Button}{
   background:#009236;
   border:1px solid #009236;
 }
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: absolute;
width: 135px;
height: 45px;
left: 196px;
top: 24px;
background: #19AB4F;
border-radius: 8px;
border:1px solid #19AB4F;
cursor:pointer;
`

const ElementsMedium = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
position: static;
width: 111px;
height: 24px;
left: 16px;
top: 12px;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 0px;
`
const TextMedium = styled.div`
color: #FFFFFF;
font-family: Nunito;
font-size: 15px;
font-weight:bold;
margin:auto;`



/*----Small----*/

const ButtonSmall = styled.button`
&:hover ${Button}{
  background:#004BE8;
  border:1px solid #004BE8;
 }
 &:active ${Button}{
   background:#0B5FFF;;
   border:1px solid #0B5FFF;
 }
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: absolute;
width: 125px;
height: 40px;
left: 374px;
top: 30px;
background: #124596;
border-radius: 8px;
border:1px solid #124596;
cursor:pointer;
`
const ButtonSmallD = styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: absolute;
width: 125px;
height: 40px;
left: 374px;
top: 30px;
background: rgba(11, 95, 255, 0.5);
border-radius: 8px;
border:none;
color:white;
`



const ButtonSmallSecondary = styled.button`
&:hover ${Button}{
  background:#0C9E42;
  border:1px solid #0C9E42;
 }
 &:active ${Button}{
   background:#009236;
   border:1px solid #009236;
 }
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: absolute;
width: 125px;
height: 40px;
left: 374px;
top: 30px;
background: #19AB4F;
border-radius: 8px;
border:1px solid #19AB4F;
cursor:pointer;
`
const ButtonSmallSecondaryD = styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 16px;
position: absolute;
width: 125px;
height: 40px;
left: 374px;
top: 30px;
background: rgba(25, 171, 79, 0.5);
border-radius: 8px;
border:none;
color:white;
`

const ElementsSmall = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
position: static;
width: 84px;
height: 20px;
left: 16px;
top: 12px;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 0px;
`
const TextSmall = styled.div`
color: #FFFFFF;
font-family: Nunito;
font-size: 14px;
font-weight:bold;
margin:auto;`







export const Button = ({ color, size, primary, disabled, ...props }) => {

  return (

    /*---Large Button---*/


    size === 'Large' & primary === true & disabled === true ?
      (<ButtonLargeD>
        <ElementsLarge>
          <TextLarge>
            {props.text}
          </TextLarge>
        </ElementsLarge>

      </ButtonLargeD>)

      : size === 'Large' & primary === true & disabled === false ?
        (<ButtonLarge >
          <ElementsLarge>

            <TextLarge style={{ color }}>
              {props.text}
            </TextLarge>

          </ElementsLarge>

        </ButtonLarge >) : size === 'Large' & primary === false & disabled === false ?
          (<ButtonLargeSecondary >
            <ElementsLarge>

              <TextLarge style={{ color }}>
                {props.text}
              </TextLarge>

            </ElementsLarge>

          </ButtonLargeSecondary >) : size === 'Large' & primary === false & disabled === true ?
            (<ButtonLargeSecondaryD >
              <ElementsLarge>

                <TextLarge style={{ color }}>
                  {props.text}
                </TextLarge>

              </ElementsLarge>

            </ButtonLargeSecondaryD >) : size === 'Large' & primary === true & disabled === true ?
              (<ButtonLargeD>
                <ElementsLarge>
                  <TextLarge>
                    {props.text}
                  </TextLarge>
                </ElementsLarge>

              </ButtonLargeD>)


              /*---Medium Button---*/


              : size === 'Medium' & primary === true & disabled === false ?
                (<ButtonMedium>
                  <ElementsMedium>

                    <TextMedium style={{ color }}>
                      {props.text}
                    </TextMedium>

                  </ElementsMedium>

                </ButtonMedium >) : size === 'Medium' & primary === true & disabled === true ?
                  (<ButtonMediumD>
                    <ElementsMedium>

                      <TextMedium style={{ color }}>
                        {props.text}
                      </TextMedium>

                    </ElementsMedium>

                  </ButtonMediumD >) : size === 'Medium' & primary === false & disabled === false ?
                    (<ButtonMediumSecondary>
                      <ElementsMedium>

                        <TextMedium style={{ color }}>
                          {props.text}
                        </TextMedium>

                      </ElementsMedium>

                    </ButtonMediumSecondary >) 

                    /*---Small Button---*/

                    : size === 'Medium' & primary === false & disabled === true ?
                      (<ButtonMediumSecondaryD>
                        <ElementsMedium>

                          <TextMedium style={{ color }}>
                            {props.text}
                          </TextMedium>

                        </ElementsMedium>
                        
                      </ButtonMediumSecondaryD >) : size === 'Small' & primary === true & disabled === false ?
                        (<ButtonSmall>

                          <ElementsSmall>

                            <TextSmall style={{ color }}>
                              {props.text}

                            </TextSmall>
                          </ElementsSmall>

                        </ButtonSmall>) : size === 'Small' & primary === true & disabled === true ?
                          (<ButtonSmallD>

                            <ElementsSmall>

                              <TextSmall style={{ color }}>
                                {props.text}

                              </TextSmall>

                            </ElementsSmall>
                          </ButtonSmallD>) : size === 'Small' & primary === false & disabled === false ?
                            (<ButtonSmallSecondary>

                              <ElementsSmall>

                                <TextSmall style={{ color }}>
                                  {props.text}

                                </TextSmall>

                              </ElementsSmall>

                            </ButtonSmallSecondary>) : size === 'Small' & primary === false & disabled === true ?
                              (<ButtonSmallSecondaryD>

                                <ElementsSmall>

                                  <TextSmall style={{ color }}>
                                    {props.text}

                                  </TextSmall>

                                </ElementsSmall>

                              </ButtonSmallSecondaryD>) : null

  );

};


