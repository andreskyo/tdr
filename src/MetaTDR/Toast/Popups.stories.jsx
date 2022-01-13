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
  label:"Egestas arcu egestas parturient dui vitae. Ornare risus id ullamcorper in ut. Vestibulum neque ullamcorper non orci vel, consectetur mi, pulvinar. Eu lectus quis leo viverra lacus non fames est ut",
  linkA:"No,cancel",
  linkB:"Yes,confirm",
}]


const Template = (args) => <Popups {...args} />;
export const Popupss = Template.bind({});


const alerrt=()=>{

  return alert('ok')
}

const alerrtt=()=>{

  return alert('okk')
}

Popupss.args = {
  DatosPopups:DatosPopups, 
  onClick:alerrt,
  onClickk:alerrtt,
  inputt:true
};