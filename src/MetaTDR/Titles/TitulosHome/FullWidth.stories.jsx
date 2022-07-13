import React from 'react';
import FullWidth from '../TitulosHome/FullWidth'
import Buttons from '../../Buttons/Butttons/Buttons'





export default {
  title: 'Titles/TitulosHome/FullWidth',
  component: FullWidth,

  argTypes: {

  },
};



const datosFullWidth = {
  top: "ÚLTIMAS NOTICIAS",
  titulo: "Novedades",
  descripcion: "Enterate de las últimas noticias de Rentas Corrientes y accedé a toda la información.",
  button: <Buttons size="large"
        contained
        primary
        text="Ver todo"
        className="boton"
        onClick={() => alert("Ver todo")} />,
}



const Template = (args) => <FullWidth  {...args} />;

export const FullW = Template.bind({});


FullW.args = {
    datosFullWidth : datosFullWidth ,
  
};
