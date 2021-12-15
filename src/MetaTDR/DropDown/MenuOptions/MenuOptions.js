import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Body from './Body.png'

const MenuR = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
position: absolute;
width: 125px;
height: 10px;
left: 300px;
filter: drop-shadow(0px 1px 4px rgba(14, 31, 53, 0.12)) drop-shadow(0px 4px 8px rgba(14, 31, 53, 0.08));
`

const MenuL = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
position: absolute;
width: 125px;
height: 10px;
left: 50px;
filter: drop-shadow(0px 1px 4px rgba(14, 31, 53, 0.12)) drop-shadow(0px 4px 8px rgba(14, 31, 53, 0.08));

`

const BubbleA = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 12px 24px;
position: static;
width: 115px;
height: 30px;
left: 0px;
top: 0px;
background: #FFFFFF;
border-radius: 8px 8px 0px 0px;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 0px;
`

const BubbleB = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 12px 24px;
position: static;
width: 115px;
height: 30px;
left: 0px;
top: 41px;
background: #FFFFFF;
flex: none;
order: 2;
flex-grow: 0;
margin: 0px 0px;
`

const BubbleC = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 12px 24px;
position: static;
width: 115px;
height: 30px;
left: 0px;
top: 82px;
background: #FFFFFF;
border-radius: 0px 0px 8px 8px;
flex: none;
order: 4;
flex-grow: 0;
margin: 0px 0px;
`

const DividerA = styled.div`
position: static;
width: 125px;
height: 0px;
left: 0px;
top: 40px;
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
margin: 0px 0px;
`
const DividerB = styled.div`
position: static;
width: 125px;
height: 1px;
left: 0px;
top: 81px;
flex: none;
order: 3;
align-self: stretch;
flex-grow: 0;
margin: 0px 0px;
`
const DividerC = styled.div`
position: static;
width: 125px;
height: 1px;
left: 0px;
top: 40px;
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
margin: 0px 0px;
`
const Text = styled.div`
position: static;
width: 77px;
height: 16px;
left: calc(50% - 77px/2);
top: calc(50% - 16px/2);
font-family: Nunito;
font-style: normal;
font-weight: 300;
font-size: 12px;
line-height: 17px;
display: flex;
align-items: center;
text-align: center;
color: #09101D;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 20px;
`

const IconA = styled.div`
position: static;
width: 100%;
height: 10px;
left: 0px;
top: 0px;
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
margin: 0px -80px;
`

const IconB = styled.div`
position: static;
width: 125px;
height: 10px;
left: 0px;
top: 0px;
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
margin: 0px 50px;
`





export const MenuOptions = () => {

    return (
        <div>
            <MenuR>
                <IconB>
                    <img src={Body} />
                </IconB>
                <BubbleA>
                    <Text>Menu option 1</Text>
                </BubbleA>


                <DividerA></DividerA>

                <BubbleB>
                    <Text>Menu option 2</Text>
                </BubbleB>

                <DividerB></DividerB>


                <BubbleC>
                    <Text>Menu option 3</Text>
                </BubbleC>

                <DividerC></DividerC>







            </MenuR>
            <MenuL>
                <IconA>
                    <img src={Body} />
                </IconA>
                <BubbleA>
                    <Text>Menu option 1</Text>
                </BubbleA>


                <DividerA></DividerA>

                <BubbleB>
                    <Text>Menu option 2</Text>
                </BubbleB>

                <DividerB></DividerB>


                <BubbleC>
                    <Text>Menu option 3</Text>
                </BubbleC>

                <DividerC></DividerC>







            </MenuL>
        </div>

    );

};