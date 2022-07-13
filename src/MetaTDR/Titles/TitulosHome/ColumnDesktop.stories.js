import React from 'react';
import ColumnDesktop from '../TitulosHome/ColumnDesktop'
import Buttons from '../../Buttons/Butttons/Buttons'






export default {
  title: 'Titles/TitulosHome/ColumnDesktop',
  component: ColumnDesktop,

  argTypes: {

  },
};



const datosColumnDesktop = {
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



const Template = (args) => <ColumnDesktop {...args} />;

export const cDesktop = Template.bind({});


cDesktop.args = {
    datosColumnDesktop  : datosColumnDesktop ,
  
};