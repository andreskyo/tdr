import React from 'react';
import { OtherCards } from "./OtherCards";
import Usuario from './img/Usuario.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import TodayIcon from '@mui/icons-material/Today';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Buttons } from '../Buttons/Butttons/Buttons'



export default {
  title: 'MetaTDR/Cards/OtherCards',
  component: OtherCards,
  argTypes: {

  },
};

const datosPerfil = {
  avatar: Usuario,
  name: "Neel Deshmukh",
  job: "Fullstack Developer @Sky",
  labelTags: "PRO",
  icons: [
    { icon: <GitHubIcon /> },
    { icon: <LinkedInIcon /> },
    { icon: <InstagramIcon /> },
    { icon: <FacebookIcon /> },
    { icon: <LinkedInIcon /> },
    { icon: <SportsBasketballIcon /> },]
}

const datosVencimiento = {
  fecha: "17 de octubre",
  job: "Fullstack Developer @Sky",
  icon: <TodayIcon />
}


const datosPerfiles = [{
  icon: Usuario,
  name: "Neel Deshmukhaa",
  job: "Frontend Dev @Stripe",
  button: "Message"
},
{
  icon: Usuario,
  name: "Neel Deshmukh ",
  job: "Frontend Dev @Stripe",
  button: "Message"
},
{
  icon: Usuario,
  name: "Neel Deshmukh ",
  job: "Frontend Dev @Stripe",
  button: "Message"
},
{
  icon: Usuario,
  name: "Neel Deshmukh",
  job: "Frontend Dev @Stripe",
  button: "Message"
}
]

const datosAcceso = {
  avatar: <NotificationsNoneIcon fontSize="large" />,
  name: "Drishti Ratan",
  job: "Fashion Designer @Clover ",
  button: "PRIMARY",

}

const datosDailyStack = [
  {
    iconTags:<p><GitHubIcon />Design Team Standup</p>,
    horaTags:"08:00 - 11:00",
    tagColor:"primary",
    hora: "9:00",


  },
  {
    iconTags:<div className="d-flex" style={{textAlign:"center"}}><GitHubIcon /><p>Design Team Standup</p></div>,
    horaTags:"08:00 - 11:00",
    
    tagColor:"warning",
    hora: "9:00",


  },
  {
    iconTags:<p style={{textAlign:"center"}}><GitHubIcon />Design Team Standup</p>,
    horaTags:"08:00 - 11:00",
    tagColor:"primary",
    hora: "9:00",


  }
]

const Template = (args) => <OtherCards {...args} />;
export const OtherCard = Template.bind({});




OtherCard.args = {
  cardPerfil: false,
  cardVencimiento: false,
  cardCalendar: false,
  cardPerfiles: false,
  datosPerfil: datosPerfil,
  datosVencimiento: datosVencimiento,
  datosPerfiles: datosPerfiles,
  datosAcceso: datosAcceso,
  datosDailyStack: datosDailyStack
};