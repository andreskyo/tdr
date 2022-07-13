import React from 'react';
import ButtonPrimary  from "./ButtonPrimary";





export default {
  title: 'Button/ButtonPrimary/ButtonPrimary',
  component: ButtonPrimary,
 
  argTypes: {
  
 
  
    
  },
};


const Template = (args) => <ButtonPrimary {...args} />;

export const btnPrimary = Template.bind({});


btnPrimary.args = {
text:"button",
variant:"contained"
};
