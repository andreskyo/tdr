import React from 'react';
import CardNoPresencial from '../CardNoPresencial/CardNoPresencial';
import img from '../img/imgCardP.png'
import Button from '../../Buttons/Butttons/Buttons';
import InstagramIcon from '@mui/icons-material/Instagram';

export default {
    title: 'MetaTDR/Cards/CardNoPresencial',
    component: CardNoPresencial,

    argTypes: {

    },
};
// list: [
//     { label: "Para consultas de tramites:", value: "Lunes a viernes en horario corrido de 7.30 a 18:00hs." },
//     {
//       subList: [
//         { label: "telefono" },
//         { label: "Provincia de Corrientes", value: "0800-888-888" },
//         { label: "Resto del pais:", value: "0800-888-888" }
//       ]
//     },


//     { label: "Correo Electronico", value: <a href="#">lalalalalala</a> },
//   ]

// const renderData = () => {
//     let resultado = datos.list.map((res, index) => {
//       return <>
//         <ul>
//           <li>{res.label}<span>{res.value}</span></li>

//         {console.log(res)}

//           <li>Telefonos:
//             <ul>
//               <li>Provincia de Corrientes:<br /><span>0800-888-888</span></li>
//               <li>Resto del pais:<br /><span>0800-888-888</span></li>
//             </ul>
//           </li> 

//         </ul>
//       </>
//     })
//     return resultado;
//   }
const datos = {
    titulo: "Redes Sociales",
    sub: "Comunicate y enterate de todo lo que necesitás en nuestras redes sociales",
    redes: [
        {
            label: <Button
                icons
                icon={<InstagramIcon />}
                primary
                line
                text="DGRCorrientes"
                onClick={() => alert("button")} />
        },
        {
            label: <Button
                icons
                icon={<InstagramIcon />}
                primary
                line
                text="DGRCorrientes"
                onClick={() => alert("button")} />
        },
        {
            label: <Button
                icons
                icon={<InstagramIcon />}
                primary
                line
                text="DGRCorrientes"
                onClick={() => alert("button")} />
        }],
    link:"tramitesvirtuales@dgrcorrientes.gov.ar"
}

const Template = (args) => <CardNoPresencial {...args} />;

export const CardNP = Template.bind({});


CardNP.args = {
    datos: datos,
    className: "card",
    button: <Button line text="ver mas" onClick={() => alert("button")} />,
    img: <img src={img} alt="img" />,

};