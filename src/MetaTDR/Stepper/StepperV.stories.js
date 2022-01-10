import React from 'react';

import {StepperV} from "./StepperV";


export default {
  title: 'MetaTDR/Stepper/StepperV',
  component: StepperV ,
 
  argTypes: {
    
     },
};


const Template = (args) => <StepperV {...args} />;

export const Stepperr = Template.bind({});

let dateTime=()=>{
const monthNames = ["Ene", "Feb", "Mar", "Abr", "May", "Jun",
  "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
   
let showdate=new Date();
const hora=((showdate.getHours()<10) ? "0":"") + showdate.getHours();
const minutos=((showdate.getMinutes()<10) ? "0":"") + showdate.getMinutes();
const  aMpM = hora >= 12 ? 'PM' : 'AM';
return(
    showdate.getDate() + ' ' + monthNames[showdate.getMonth()] + ' ' + showdate.getFullYear() + ', ' + hora +  '.' + minutos +   '' + ' ' + aMpM
)

}


const labelArray=[
    {labell:'Step 1',description:'Step 1 Description ',date:dateTime()},
    {labell:'Step 2',description:'Step 2 Description ',date:dateTime()}, 
    {labell:'Step 3',description:'Step 3 Description ',date:dateTime()},
    {labell:'Step 4',description:'Step 4 Description ',date:dateTime()},
    {labell:'Step 5',description:'Step 5 Description ',date:dateTime()},
    
    ]

Stepperr.args = {
labelArray:labelArray,
activeStep:0



};