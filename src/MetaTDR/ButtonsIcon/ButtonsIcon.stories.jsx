import React from 'react';

import { ButtonsIcon} from "./ButtonsIcon";


export default {
  title: 'ButtonsIcon/ButtonsIcon',
  component: ButtonsIcon,
 
  argTypes: {
    backgroundColor: { control: 'color' },
    
    size: {
      options:['Large','Medium','Small'],
      control:{type:'select'}
    },
 
  
    
  },
};


const Template = (args) => <ButtonsIcon {...args} />;

export const Large = Template.bind({});
export const Medium = Template.bind({});
export const Small = Template.bind({});




Large.args = {
  size: 'Large',
  text:'Large Button'
};
Medium.args = {
  size: 'Medium',
  text:'Medium Button'
};
Small.args = {
  size: 'Small',
  text:'Small Button'
};











