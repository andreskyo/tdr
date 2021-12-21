import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Selected from './Selected.png';
import Unselected from './Unselected.png';
import Disabled from './Disabled.png';
import UnselectedDisabled from './UnselectedDisabled.png'

const RadioSelecteed = styled.image`
position: absolute;
width: 16px;
height: 16px;
left: 100px;
top: 60px;
`

const RadioUnselected = styled.image`
position: absolute;
width: 16px;
height: 16px;
left: 100px;
top: 60px;
`

const RadioDisabled = styled.image`
position: absolute;
width: 16px;
height: 16px;
left: 100px;
top: 60px;
`

const Main = styled.div`
&:hover ${RadioButtons} {
    left: -60%;
    right: -60%;
    top: -60%;
    bottom: -60%;
    background: rgba(0, 84, 240, 0.1);
    border-radius: 16px;
  }
&:active ${RadioButtons}{
position: absolute;
left: -60%;
right: -60%;
top: -60%;
bottom: -60%;
background: rgba(0, 75, 214, 0.2);
}
  position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  cursor:pointer;
`



export const RadioButtons = ({ Selecteed, Disableed }) => {

    return (
        Selecteed === true & Disableed === false ?
            <RadioSelecteed>

                <Main></Main><img src={Selected} />

            </RadioSelecteed>
            : Selecteed === true & Disableed === true ?

                <RadioDisabled>

                    <img src={Disabled} />

                </RadioDisabled> : Selecteed === false & Disableed === false ?
                    <RadioUnselected>

                        <Main></Main><img src={Unselected} />

                    </RadioUnselected> : Selecteed === false & Disableed === true ?
                    <RadioUnselected>

                    <img src={UnselectedDisabled} />

                </RadioUnselected> : ''




    );

};