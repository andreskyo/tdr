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

const Datos = [
  { label: "Impuesto inicial", value: "38700", 
  tipo: "titulo" },
  
  
  {
    label: "Descuentos",
    value: [{ value: "11400", label: "30% por estar al dia" },
    { value: "3400", label: "15% por cuota unica" }],
    tipo: "lista"
  }
  ,
  { label: "total a pagar", value: "21093", tipo: "totalizador" },
  { label: "texto en gris", value: "", 
  tipo: "info" },
  
  {
    label: "planes",
    value: [
      { value: "plan xxx", label: "a vencer", color: "green" },
      { value: "no apta para plan", label: "vencida", color: "red" }],
    tipo: "listaPlanes"
  }


]


Tooltipp.args = {
  Datos: Datos,

  centro: 'Sin el 5% de descuento extra de las buenas prácticas agropecuarias.',
  plan: 'No apta plan',
  estado: true,
  



};