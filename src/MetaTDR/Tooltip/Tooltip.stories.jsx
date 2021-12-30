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

const Datos=[
  
  



{

label:'30% por estar al dia',
value:'$11.400'
},
{
label:'15% por cuota única',
value:'- $3.460' ,
},
{
  label:'Cupón de crédito 2020',
  value:'- $3.012' ,
}
  ,
{
    label:'Tope por ley',
    value:'- $ 300' ,
},
{
      label:'Tope por ley 2',
      value:'- $400' ,
},
]


Tooltipp.args = {
 Datos:Datos,
 Total:'Total a pagar',
 Monto:'$ 21.093',
 label:'Impuesto inicial',
 value:'$38.700',
 descuentos:'Descuentos',
 TextDiv:'Sin el 5% de descuento extra de las buenas prácticas agropecuarias.',
 apto:'No apta para plan'


};