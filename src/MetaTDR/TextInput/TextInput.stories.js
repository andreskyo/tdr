import React from 'react';

import { TextInput } from "./TextInput";


export default {
  title: 'MetaTDR/TextInput/TextInput',
  component: TextInput,

  argTypes: {
     color: {
       options:['error','success','warning','info'],
       control:{type:'radio'}
     },
  
  },
};


const Template = (args) => <TextInput{...args} />;

export const Textiinput = Template.bind({});




Textiinput.args = {
disabled:false,
color:false






};