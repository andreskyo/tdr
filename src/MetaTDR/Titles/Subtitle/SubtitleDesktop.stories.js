import React from 'react';
import SubtitleDesktop from '../Subtitle/SubtitleDesktop'






export default {
  title: 'Titles/Subtitle/SubtitleDesktop',
  component: SubtitleDesktop,

  argTypes: {

  },
};



const datosSubtitleDesktop = {
  titulo: "Datos del Contacto",
}



const Template = (args) => <SubtitleDesktop {...args} />;

export const SubtitleD = Template.bind({});


SubtitleD.args = {
  datosSubtitleDesktop : datosSubtitleDesktop,
  
};