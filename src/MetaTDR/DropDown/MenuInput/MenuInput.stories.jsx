import React from 'react';

import { MenuInput } from "./MenuInput";

import IconA from './IconA.png'
import IconB from './IconB.png'
import IconC from './IconC.png'
import IconD from './IconD.png'
import IconE from './IconE.png'
import IconF from './IconF.png'
import IconG from './IconG.png'
import IconH from './IconH.png'
import mail from './mail.png'

export default {
  title: 'DropDown/MenuInput/MenuInput',
  component: MenuInput,

  argTypes: {

  },
};


const Template = (args) => <MenuInput {...args} />

export const menuInnput = Template.bind({});


let dateTime=()=>{
 
     
  let showdate=new Date();
  
  const minutos=((showdate.getMinutes()<10) ? "0":"") + showdate.getMinutes();
  
  return(
      showdate.getDate() +  minutos 
  )
  
  }

let datosCards = [
  
 
  {
    textHora: 'Hace 6 horas',
    textMulta: 'Tu embarcación está al día. ',
    textVencimiento: 'Vence 24/10/2019',
    imagen:  <img src={IconB} alt="" />,
    accion: ()=>{alert("lalal")}
  },
  {
    textHora: '24 de agosto',
    textMulta: 'A partir de 2020, por convenio entre la Municipalidad ALPA...',
    textVencimiento: 'Vence 24/10/2019',
    imagen: <img src={IconC} alt="" />,
    accion: ()=>{alert("lalal")}
  },
  {
    textHora: 'Hace 3 horas',
    textMulta: 'Motivo inclusíon-Listado de riesgo fiscal mayo..',
    textVencimiento: 'Vence 24/10/2019',
    imagen: <img src={IconD} alt="" />,
    accion: ()=>{alert("lalal")}
  },
  {
    textHora: 'hace 3 horas',
    textMulta: 'Fiscalización electrónica',
    textVencimiento: 'Vence 24/10/2019',
    imagen: <img  src={IconE} alt="" />,
    accion: ()=>{alert("lalal")}
  },
  {
    textHora: '24 de agosto',
    textMulta: 'El pago único de ingresos brutos se prorrogga hasta..',
    textVencimiento: 'Vence 24/10/2019',
    imagen: <img src={IconF} alt="" />,
    accion: ()=>{alert("lalal")}
  },
  {
    textHora: 'Hace 6 horas',
    textMulta: 'Tienes una multa próxima a vencer',
    textVencimiento: 'Vence 01/01/2019',
    imagen: <img src={IconG} alt="" />,
    accion: ()=>{alert("lalal")}
  },
  {
    textHora: 'Hace 6 horas ',
    textMulta: 'Tu embarcacion esta al dia',
    textVencimiento: 'Vence 01/01/2019',
    imagen: <img src={IconH} alt="" />,
    accion: ()=>{alert("lalal")}
  },
  {
    textHora: "Hace 3 horas",
    textMulta: "Tienes una multa próxima a vencer",
    textVencimiento:"Vence 24/10/2019",
    imagen: <img src={IconA} alt="" />,
    accion: ()=>{alert("lalal")}
  },
];

menuInnput.args = {
datosCards:datosCards,
domicilio:"Domicilio fiscal electrónico",
notificaciones:()=>{alert("notificaciones")}
};