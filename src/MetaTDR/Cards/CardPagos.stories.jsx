import { CountertopsSharp } from '@mui/icons-material';
import React from 'react';
import { CardPagos } from "./CardPagos";
import MercadoPago from './img/MercadoPago.png';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';



export default {
  title: 'MetaTDR/Cards/CardPagos',
  component: CardPagos,
  argTypes: {

  },
};

const datosPagosMobile={
    icon:<img src={MercadoPago}/>,
    title:"Débito automático con CBU",
    descripcion:<>
    <p className="descripcio">¡Ahorra $32200 extras!</p>
    <p className="descripcion">Todas las tarjetas y hasta 6 cuotas sin interés con Cordobesa o Visa Bancor</p>
    </>
}
const datosPagosGateWay={
  icon:<ArrowBackIosIcon/>,
  titulo:"Vas a realizar el pago de",
  viejoPrecio:"$ 6.200",
  precio:"$ 6.200",
  cuota:"1 cuotas a vencer",
  porcentaje:"Incluye 30% por estar al día",
  onClick:()=>{alert("arrow")}

}

const Template = (args) => <CardPagos {...args} />;
export const CardsPago = Template.bind({});




CardsPago.args = {
    datosPagosMobile:datosPagosMobile,
    datosPagosGateWay:datosPagosGateWay
  
};