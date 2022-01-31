import React from 'react';

import { Card } from "./Card";


export default {
  title: 'DropDown/Card/Card',
  component: Card,
 
  argTypes: {
    
     },
};


const Template = (args) => <Card {...args} />;

export const NotCorreo = Template.bind({});

let Cards=[{
notificaciones:'No hay notificaciónes',
alertas:'Regresa más tarde, no hay alertas por el momento',
bandeja:'Ir a bandeja de entrada'

},
]

let Cardb=[{
  notificaciones:'No hay notificaciónes',
  alertas:'Regresa más tarde, no hay alertas por el momento',
  },
  ]

  const click=()=>{
    alert("bandeja entrada")
  }

NotCorreo.args = {
Cards:Cards, 
Cardb:Cardb,
onClick:click

};













