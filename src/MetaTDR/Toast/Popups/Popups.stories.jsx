import React from 'react';
import Button from '@mui/material/Button';

import { Popups } from "./Popups";


export default {
  title: 'MetaTDR/Toast/Popups',
  component: Popups,
   argTypes: {
    
     },
};



const datos=[{
  title:<h1 >Sure you want to accept?</h1>,
  label:<p>Egestas arcu egestas parturient dui vitae. Ornare risus id ullamcorper in ut. Vestibulum neque ullamcorper non orci vel, consectetur mi, pulvinar. Eu lectus quis leo viverra lacus non fames est ut</p>,
  linkA:<Button variant="outlined" onClick={()=>{alert("cancel")}}  disableRipple className="m-2">No, cancel</Button>,
  linkB:<Button variant="contained" onClick={()=>{alert("confirm")}}   disableRipple className="bu">Yes, confirm</Button>, 
}]


const Template = (args) => <Popups {...args} />;
export const Popupss = Template.bind({});




Popupss.args = {
  datos:datos, 
  
  inputt:true
};