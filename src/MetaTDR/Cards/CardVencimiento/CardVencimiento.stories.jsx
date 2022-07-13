import React from 'react';
import CardVencimiento from '../CardVencimiento/CardVencimiento';




export default {
  title: 'MetaTDR/Cards/CardVencimiento',
  component: CardVencimiento,

  argTypes: {

  },
};

const datos = {
    titulo: "22",
    sub: "Febrero",
    descripcion:
        [{
            tipoObligacion: "Cuota:",
            value: "01",
            impuesteDesc:"Cuota:",
            valueB:"02",
            conceptoDesc:"Cuota:",
            valueC:"03",
            cuota:"Cuota:",
            valueD:"04",
            terminacion:"Cuota:",
            valueE:"05",
        },{
            tipoObligacion: "Cuota:",
            value: "01",
            impuesteDesc:"Cuota:",
            valueB:"02",
            conceptoDesc:"Cuota:",
            valueC:"03",
            cuota:"Cuota:",
            valueD:"04",
            terminacion:"Cuota:",
            valueE:"05",
        },
        
        ]

}




const Template = (args) => <CardVencimiento {...args} />;

export const vencimientoCard = Template.bind({});


vencimientoCard.args = {
datos:datos


};