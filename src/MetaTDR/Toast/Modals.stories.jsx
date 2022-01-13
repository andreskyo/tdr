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
  linkA:'No,cancel',
  linkB:'Yes,confirm',
  labelCheck:'Don’t show this again'
}]


const Template = (args) => <Modals {...args} />;
export const Modalss = Template.bind({});


const ButtonA=()=>{

  return alert('Boton 1')
}

const ButtonB=()=>{

  return alert('Boton 2')
}

const onClickCheck=()=>{

  return alert('check')
}


Modalss.args = {
  DatosModal:DatosModal, 
  onClick:ButtonA,
  onClickK:ButtonB,
  check:true,
  onClickCheck:onClickCheck
};