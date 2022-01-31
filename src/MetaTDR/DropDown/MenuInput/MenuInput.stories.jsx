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


export default {
  title: 'DropDown/MenuInput/MenuInput',
  component: MenuInput,

  argTypes: {

  },
};


const Template = (args) => <MenuInput {...args} />;

export const InputA = Template.bind({});

let datosCards = [
  {
    TextHora: 'Hace 3 horas',
    TextMulta: 'Tienes una multa próxima a vencer',
    TextVencimiento: 'Vence 24/10/2019',
    imagen: IconA,
    accion: () => { alert("haga algo") }
  },
  {
    TextHora: 'Hace 6 horas',
    TextMulta: 'Tu embarcación está al día. ',
    TextVencimiento: 'Vence 24/10/2019',
    imagen: IconB,
    accion: () => { alert("haga algo") }
  },
  {
    TextHora: '24 de agosto',
    TextMulta: 'A partir de 2020, por convenio entre la Municipalidad ALPA...',
    TextVencimiento: 'Vence 24/10/2019',
    imagen: IconC,
    accion: () => { alert("haga algo") }
  },
  {
    TextHora: 'Hace 3 horas',
    TextMulta: 'Motivo inclusíon-Listado de riesgo fiscal mayo..',
    TextVencimiento: 'Vence 24/10/2019',
    imagen: IconD,
    accion: () => { alert("haga algo") }
  },
  {
    TextHora: 'hace 3 horas',
    TextMulta: 'Fiscalización electrónica',
    TextVencimiento: 'Vence 24/10/2019',
    imagen: IconE,
    accion: () => { alert("haga algo") }
  },
  {
    TextHora: '24 de agosto',
    TextMulta: 'El pago único de ingresos brutos se prorrogga hasta..',
    TextVencimiento: 'Vence 24/10/2019',
    imagen: IconF,
    accion: () => { alert("haga algo") }
  },
  {
    TextHora: 'Hace 6 horas',
    TextMulta: 'Tienes una multa próxima a vencer',
    TextVencimiento: 'Vence 01/01/2019',
    imagen: IconG,
    accion: () => { alert("haga algo") }
  },
  {
    TextHora: 'Hace 6 horas ',
    TextMulta: 'Tu embarcacion esta al dia',
    TextVencimiento: 'Vence 01/01/2019',
    imagen: IconH,
    accion: () => { alert("haga algo") }
  },

];


const noti = () => {
  return alert('notificaciones')
}
const domicilio = () => {
  return alert('domicilio')
}


InputA.args = {
  datosCards: datosCards,
  TextNotificaciones: 'Ver todas las notificaciones',
  onClick: noti,
  onClickk: domicilio,
  DomicilioFiscal: 'Domicilio fiscal electrónico'

};