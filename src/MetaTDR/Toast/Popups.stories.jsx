import React from 'react';

import { Popups } from "./Popups";


export default {
  title: 'MetaTDR/Toast/Popups',
  component: Popups,
   argTypes: {
    
     },
};



const DatosPopups=[{
  title:'Sure you want to accept?',
  label:"Are you sure you want to accept this?",
  inputt:<input type="text" placeholder="Your Name"></input>,
  linkA:<button>No,cancel</button>,
  linkB:<button>Yes,confirm</button>,
}]


const Template = (args) => <Popups {...args} />;
export const Popupss = Template.bind({});


const alerrt=()=>{

  return alert('hola')
}
Popupss.args = {
  DatosPopups:DatosPopups, 
  onClick:alerrt,
};