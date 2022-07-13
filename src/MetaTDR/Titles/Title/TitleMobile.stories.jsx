import React from 'react';
import TitleMobile from '../Title/TitleMobile'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SettingsIcon from '@mui/icons-material/Settings';





export default {
  title: 'Titles/Title/TitleMobile',
  component: TitleMobile,

  argTypes: {

  },
};



const datosTitleMobile = {
  titulo: "Detalle de Mis impuestos ",
  sub: "Descargá el comprobante. Encontrá más información",
  onClickSetting: () => { alert("setting") },
  iconUno: <ArrowBackIosNewIcon />,
  iconDos: <SettingsIcon />
}



const Template = (args) => <TitleMobile {...args} />;

export const TituloM = Template.bind({});


TituloM.args = {
  datosTitleMobile: datosTitleMobile,
  
};

