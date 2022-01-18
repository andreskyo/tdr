import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Pagination from '@mui/material/Pagination';
import Paper from "@material-ui/core/Paper";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


  const Datos=[{
    id:'1',
    description:'Servicios de organizaciones y órganos extraterritoriales.',
    alic:'Alic.: 1.5'
},{
    id:'2',
    description:'Servicios de organizaciones y órganos extraterritoriales.',
    alic:'Alic.: 1.5'
},
{
    id:'3',
    description:'Servicios de organizaciones y órganos extraterritoriales.',
    alic:'Alic.: 1.5'
},
{
  id:'4',
  description:'Servicios de organizaciones y órganos extraterritoriales.',
  alic:'Alic.: 1.5'
},
{
  id:'5',
  description:'Servicios de organizaciones y órganos extraterritoriales.',
  alic:'Alic.: 1.5'
},
{
  id:'5',
  description:'Servicios de organizaciones y órganos extraterritoriales.',
  alic:'Alic.: 1.5'
}

]

export const Tablee = () => {
  const [usuarios, setUsuarios]= useState([]);
  const [tablaUsuarios, setTablaUsuarios]= useState([]);
  const [busqueda, setBusqueda]= useState("");

const peticionGet=async()=>{
  await axios.get("https://jsonplaceholder.typicode.com/users")
  .then(response=>{
    setUsuarios(response.data);
    setTablaUsuarios(response.data);
  }).catch(error=>{
    console.log(error);
  })
}

const handleChange=e=>{
  setBusqueda(e.target.value);
  filtrar(e.target.value);
}

const filtrar=(terminoBusqueda)=>{
  var resultadosBusqueda=tablaUsuarios.filter((elemento)=>{
    if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    || elemento.company.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    ){
      return elemento;
    }
  });
  setUsuarios(resultadosBusqueda);
}

useEffect(()=>{
peticionGet();
},[])
       

    
        


    return (
      <div className="App">
      <div className="containerInput">
        <input
          className="form-control inputBuscar"
          value={busqueda}
          placeholder="Búsqueda por Nombre o Empresa"
          onChange={handleChange}
        />
        <button className="btn btn-success">
          
        </button>
      </div>

     <div className="table-responsive">
       <table className="table table-sm table-bordered">
         <thead>
           <tr>
             <th>ID</th>
             <th>Nombre</th>
             <th>Teléfono</th>
             <th>Nombre de Usuario</th>
             <th>Correo</th>
             <th>Sitio Web</th>
             <th>Ciudad</th>
             <th>Empresa</th>
           </tr>
         </thead>

         <tbody>
           {usuarios && 
           usuarios.map((usuario)=>(
             <tr key={usuario.id}>
               <td>{usuario.id}</td>
               <td>{usuario.name}</td>
               <td>{usuario.phone}</td>
               <td>{usuario.username}</td>
               <td>{usuario.email}</td>
               <td>{usuario.website}</td>
               <td>{usuario.address.city}</td>
               <td>{usuario.company.name}</td>
             </tr>
           ))}
         </tbody>

       </table>

     </div>
    </div>
    )

};
