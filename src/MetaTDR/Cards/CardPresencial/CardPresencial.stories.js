import React from 'react';
import CardPresencial from '../CardPresencial/CardPresencial';
import img from '../img/imgCardP.png'
import Button from '../../Buttons/Butttons/Buttons';

export default {
  title: 'MetaTDR/Cards/CardPresencial',
  component: CardPresencial,

  argTypes: {

  },
};

const datos = {
    titulo: "Receptorías del Interior de la Provincia",
    sub: "Atiende al público en la Av. Juan Pujol N° 2330 - Provincia de Corrientes de Lunes a Viernes de 07:00 a 14:00 Hs.",
}

const Template = (args) => <CardPresencial {...args} />;

export const CardP = Template.bind({});


CardP.args = {
datos:datos,
className:"card",
button:<Button line text="ver mas" onClick={()=>alert("button")} />,
img: <img src={img} alt="img"/>,

};