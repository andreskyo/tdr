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
import NotificacionC from './NotificacionC.png'
import Button from '@mui/material/Button';



export default {
  title: 'DropDown/MenuInput/MenuInput',
  component:MenuInput,

  argTypes: {

  },
};


let datosCards = [


  {
    textHora:<p className="textHora">Hace 6 horas</p>,
    textMulta: <p className="textMulta">Tu embarcación está al día.</p>,
    textVencimiento: <p className="textVencimiento">Vence 24/10/2019</p>,
    imagen: <img src={IconA} alt="" />,
    leido:false,
    
  },
  {
    textHora: <p className="textHora">Hace 2 horas</p>,
    textMulta: <p className="textMulta">A partir de 2020, por convenio entre la Municipalidad ALPA...</p>,
    textVencimiento: <p className="textVencimiento">Vence 24/10/2019</p>,
    imagen: <img src={IconB} alt="" />,
    leido:true,
    
  },
  {
    textHora: <p className="textHora">Hace 2 horas</p>,
    textMulta: <p className="textMulta">A partir de 2020, por convenio entre la Municipalidad ALPA...</p>,
    textVencimiento: <p className="textVencimiento">Vence 24/10/2019</p>,
    imagen: <img src={IconC} alt="" />,
    leido:true,
    
  },
  {
    textHora:<p className="textHora">Hace 6 horas</p>,
    textMulta: <p className="textMulta">Tu embarcación está al día.</p>,
    textVencimiento: <p className="textVencimiento">Vence 24/10/2019</p>,
    imagen: <img src={IconD} alt="" />,
    leido:false,
    
  },
  {
    textHora: <p className="textHora">Hace 2 horas</p>,
    textMulta: <p className="textMulta">A partir de 2020, por convenio entre la Municipalidad ALPA...</p>,
    textVencimiento: <p className="textVencimiento">Vence 24/10/2019</p>,
    imagen: <img src={IconE} alt="" />,
    leido:true,
    
  },
  {
    textHora:<p className="textHora">Hace 6 horas</p>,
    textMulta: <p className="textMulta">Tu embarcación está al día.</p>,
    textVencimiento: <p className="textVencimiento">Vence 24/10/2019</p>,
    imagen: <img src={IconF} alt="" />,
    leido:false,
    
  },
  {
    textHora:<p className="textHora">Hace 6 horas</p>,
    textMulta: <p className="textMulta">Tu embarcación está al día.</p>,
    textVencimiento: <p className="textVencimiento">Vence 24/10/2019</p>,
    imagen: <img src={IconG} alt="" />,
    leido:false,
    
  },
  {
    textHora:<p className="textHora">Hace 6 horas</p>,
    textMulta: <p className="textMulta">Tu embarcación está al día.</p>,
    textVencimiento: <p className="textVencimiento">Vence 24/10/2019</p>,
    imagen: <img src={IconH} alt="" />,
    leido:false,
    
  },

 
];


const Template = (args) => <MenuInput {...args} />




export const MeenuInput = Template.bind({});


MeenuInput.args = {
  
  datosCards: datosCards,
  notificacion:<p className="text-center" style={{ 'font-family': 'Nunito', 'font-weight': '600' }}>No hay notificaciónes</p>,
  subNotificacion:<p className="text-center" style={{ 'font-family': 'Nunito', 'font-weight': '400' }}>Regresa más tarde, no hay alertas por el momento</p>,
  buttonCorreo:<Button href="#" disableRipple>Ir bandeja de entrada</Button>,
  imagen:<img src={NotificacionC} alt="..." className="rounded mx-auto d-block imagen m-4"/>,
  verNotificaciones: <a href="#" className="text-center" style={{color:"#124596",fontFamily: 'Nunito',fontWeight: "bold",fontSize: 18}}>Ver notificaciones</a>

};