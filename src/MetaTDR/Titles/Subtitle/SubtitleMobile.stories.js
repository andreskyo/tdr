import React from 'react';
import SubtitleMobile from '../Subtitle/SubtitleMobile'
import {Buttons} from '../../Buttons/Butttons/Buttons';





export default {
  title: 'Titles/Subtitle/SubtitleMobile',
  component: SubtitleMobile,

  argTypes: {

  },
};



const datosSubtitleMobile = {
  titulo: "Datos del Contacto",
  descripcion:"Los campos con (*) asterísco son obligatorios",
  button:<Buttons text="Añadir" line onClick={()=>alert("Añadir")}/>
 }



const Template = (args) => <SubtitleMobile {...args} />;

export const SubtitleM = Template.bind({});


SubtitleM.args = {
  datosSubtitleMobile : datosSubtitleMobile ,
  
};