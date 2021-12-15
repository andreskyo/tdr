import React from 'react';

import { Card } from "./Card";


export default {
  title: 'DropDown/Card',
  component: Card,
 
  argTypes: {
    size: {
      options:['Large','Medium','Small'],
      control:{type:'select'}
    },
     },
};


const Template = (args) => <Card {...args} />;

export const Large = Template.bind({});
export const Medium = Template.bind({});
export const Small = Template.bind({});



Large.args = {
  size:'Large'
};

Medium.args = {
  size:'Large'
};

Small.args = {
  size:'Large'
};












