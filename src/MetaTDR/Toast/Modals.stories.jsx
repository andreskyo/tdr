import React from 'react';

import { Modals } from "./Modals";


export default {
  title: 'MetaTDR/Toast/Modals',
  component: Modals,
   argTypes: {
    
     },
};



const DatosModal=[{
  title:'Sure you want to accept?',
  label:"Are you sure you want to accept this?",
  linkA:<button>No,cancel</button>,
  linkB:<button>Yes,confirm</button>,
}]


const Template = (args) => <Modals {...args} />;
export const Modalss = Template.bind({});


const alerrt=()=>{

  return alert('hola')
}
Modalss.args = {
  DatosModal:DatosModal, 
  onClick:alerrt,
};