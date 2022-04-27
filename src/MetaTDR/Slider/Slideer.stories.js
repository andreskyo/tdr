import React from 'react';

import {Slideer} from "./Slideer";


export default {
  title: 'MetaTDR/Slideer/Slideer',
  component: Slideer,
 
  argTypes: {
    
     },
};


const Template = (args) => <Slideer{...args} />;

export const Slideeer = Template.bind({});



Slideeer.args = {
  disabled:false

 };