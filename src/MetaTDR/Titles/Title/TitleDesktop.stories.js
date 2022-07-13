import React from 'react';
import TitleDesktop from '../Title/TitleDesktop'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';






export default {
  title: 'Titles/Title/TitleDesktop',
  component: TitleDesktop,

  argTypes: {

  },
};



const datosTitleDesktop = {
  titulo: "Detalle de Mis impuestos ",
  sub: "Descargá el comprobante. Encontrá más información",
  onClickSetting: () => { alert("setting") },
  icon: <ArrowBackIosNewIcon />,
}



const Template = (args) => <TitleDesktop  {...args} />;

export const TitleD = Template.bind({});


TitleD.args = {
  datosTitleDesktop : datosTitleDesktop ,
  
};