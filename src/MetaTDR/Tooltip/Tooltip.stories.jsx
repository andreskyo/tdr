import React from 'react';

import { Tooltip } from "./Tooltip";


export default {
  title: 'MetaTDR/Tooltip/Tooltip',
  component: Tooltip,
 
  argTypes: {
    
     },
};


const Template = (args) => <Tooltip {...args} />;

export const Tooltipp = Template.bind({});

const Datos = {
impuestoInicial:
[
    {
    inicial:"impuesto inicial",
    value:"$ 38.700"
    } 
],

    descuentos:
    [
      {
        subtitle:'Descuentos',
        label: "30% por estar al día",
        valuee: "- $ 11.400"
      },
      {
        label: "15% por cuota única",
        valuee: "- $3.460"
      },
      {
        label: "Cupón de crédito 2020",
        valuee: "- $ 3.012"
      },
      {
        label: "Tope por ley",
        valuee: "- $ 300 "
      },
      {
        label: "Tope por ley 2",
        valuee: "- $ 400 "
      },
      {
          total:"Total a pagar",
          monto:"$ 21.093"
      }

    ]
  
  }


Tooltipp.args = {
 Datos:Datos,
 centro:'Sin el 5% de descuento extra de las buenas prácticas agropecuarias.',
 plan:'No apta plan',
 estado:'A vencer'
 


};