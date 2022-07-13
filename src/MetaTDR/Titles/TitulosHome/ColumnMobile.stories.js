import React from 'react';
import ColumnMobile from '../TitulosHome/ColumnMobile'
import Buttons from '../../Buttons/Butttons/Buttons'





export default {
  title: 'Titles/TitulosHome/ColumnMobile',
  component: ColumnMobile,

  argTypes: {

  },
};



const datosColumnMobile = {
  top: "ÚLTIMAS NOTICIAS",
  titulo: "Novedades",
  descripcion: "Enterate de las últimas noticias de Rentas Corrientes y accedé a toda la información. Enterate de las últimas noticias de Rentas Corrientes y accedé a toda la información.",
  button: <Buttons size="large"
        contained
        primary
        text="Ver todo"
        className="boton"
        onClick={() => alert("Ver todo")} />,
}



const Template = (args) => <ColumnMobile  {...args} />;

export const cMobile = Template.bind({});


cMobile.args = {
    datosColumnMobile  : datosColumnMobile  ,
  
};
