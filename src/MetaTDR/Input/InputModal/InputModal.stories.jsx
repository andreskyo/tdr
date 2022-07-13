import React from 'react';
import InputModal from '../InputModal/InputModal';





export default {
  title: 'MetaTDR/Input/InputModal',
  component: InputModal,

  argTypes: {

  },
};

var data = [

  { label: "Buenos Aires" ,value : "Buenos Aires"},
  { label: "Córdoba", value:"Córdoba" },
  { label: "Santa Fe" , value:"Santa Fe"},
  { label: "Ciudad Autónoma de Buenos Aires" ,value:"Ciudad Autónoma de Buenos Aires"},
  { label: "Mendoza" , value:"Mendoza" },
  { label: "Tucumán" , value: "Tucumán"},
  { label: "Entre Ríos" , value:"Entre Ríos" },
  { label: "Salta",value:"Salta"},
  { label: "Misiones",value:"Misiones" },
  { label: "Chaco",value: "Chaco" },
  { label: "Corrientes",value: "Corrientes" },
  { label: "Santiago del Estero",value: "Santiago del Estero" },
  { label: "San Juan" ,value: "San Juan"},
  { label: "Jujuy",value: "Jujuy"},
  { label: "Río Negro",value: "Río Negro" },
  { label: "Neuquén" ,value: "Neuquén"},
  { label: "Argentina" ,value: "Argentina"},
  { label: "Alemania",value: "Alemania" },
  { label: "Formosa" ,value: "Formosa"},
  { label: "Chubut",value: "Chubut" },
  { label: "San Luis" ,value: "San Luis"},
  { label: "Catamarca" ,value: "Catamarca"},
  { label: "La Rioja" ,value: "La Rioja"},
  { label: "La Pampa" ,value: "La Pampa"},
  { label: "Misiones" ,value: "Misiones"},
  { label: "Godoy Cruz" ,value: "Godoy Cruz"},
  { label: "Santa Cruz" ,value: "Santa Cruz"},
  { label: "Tierra del Fuego",value:"Tierra del Fuego"},


];


const Template = (args) => <InputModal {...args} />;

export const InputM = Template.bind({});


InputM.args = {
  data: data,
  placeholder: "Escribí el nombre de tu localidad",
  type: "text",
  className: "input",
  onClick:(a,b)=>{console.log(a,b)},
  onChange: (e) => { console.log(e) }


};