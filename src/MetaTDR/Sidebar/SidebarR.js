import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Collapse from '@mui/material/Collapse';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TablePagination from "@material-ui/core/TablePagination";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';





const Boxxx = styled(Box)`

    &&{
        
        width:400px;
        
        background:white;
        box-shadow: -15px 0px 40px -1px rgba(14, 31, 53, 0.2);
        border-radius: 16px 0px 0px 16px;
        @media (max-width:568px)  {
        
              }
    }
`
const BoxHeader = styled(Box)`
&&{
    display:flex;
    width:auto;
    height:auto;
    padding:15px;
}
>a{
margin:2px 0px;
font-family: Nunito;
font-style: normal;
font-weight:bold;
font-size: 18px;
line-height: 25px;
color: #124596;}
>a:hover{
   text-decoration:underline;
   cursor:pointer;
   }


`
const BoxSearch = styled(Box)`
&&{
    margin:auto;
    width:90%;
}
.search{
    width:100%;
    margin:auto;
    background: #F6F8FA;
    border-radius: 5px;
}
`
const BoxCards = styled(Box)`
 width:100%;
`


const CardContentt = styled(CardContent)`
&&:hover{
    background: #e8e3e2 ;
    cursor:pointer;
}
`
const IconButtonn = styled(IconButton)`
&&{
    
    display:flex;
    flex-direction:row-reverse;
    border:0px;
}

`
const StackButtons=styled(Stack)`
&&{display:none}`

const StackPagination=styled(Stack)``


export const SidebarR = ({ disabled,datos }) => {
    
    
    const [text, setText] = React.useState();
    
    


    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = React.useState(3);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

  



    const [filtrados, setFiltrado] = useState(datos);



    const handleBuscador = (e) => {
        const cadena = e.target.value.toLowerCase();
        let tmpArray = [];
        const limite = datos.length;

        for (let index = 0; index < limite; index++) {

            const description = datos[index].description.toLowerCase();
            const id = datos[index].id;

            const patt = new RegExp(cadena)
            const res = patt.test(description)
            const ress = patt.test(id)


            if (res || ress) {
                tmpArray.push(datos[index])
            }

        }
        setFiltrado(tmpArray);
        setPage(1);

    }

  


    const handleChange = (e) => {
        let valor = e;
        return setText(valor.id + valor.alic + valor.description)
        

        

    }



    const handleChangeCancel = () => {
        


    }


    const handleChangeAceptar = () => {
        
   alert(text)

    }


    
    const renderCards = () => {
        let resultado = filtrados && filtrados.slice((page -1) * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data, i) => {
            
            return <>

                <Card key={i} sx={{ minWidth: "auto" }} onClick={()=>handleChange(data)} >
                    <CardContentt >

                        <Typography variant="h5" component="div">
                            {data.id}

                        </Typography>
                        <Typography  sx={{ mb: 1.5 }} color="text.secondary">
                            {data.description}
                        </Typography>
                        <Typography variant="body2">
                            {data.alic}
                            <br />

                        </Typography>
                    </CardContentt>

                </Card>

            </>



        })
        return resultado;
    }

    return (
        <>
        {disabled===false?
             <Boxxx id="box">
                <BoxHeader>
                    <IconButtonn aria-label="close" size="small" ><CloseIcon  fontSize="small" /> </IconButtonn> <a onClick={() => alert('hola')}>Agregar Actividad   </a>
                </BoxHeader>

                <BoxSearch>
                    <TextField
                        className="search"
                        placeholder='Buscar'
                        size="small"
                        onChange={handleBuscador}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        type="search" />
                </BoxSearch>

                <BoxCards>
            
                    {renderCards()}
                    <br />
                    <StackPagination id="table" spacing={0}>
                   
                        <Pagination
                        
                            count={Math.ceil(filtrados.length/4)}
                            size="medium"
                            page={page}
                            color="primary"
                            onChange={handleChangePage}
                        />


                    </StackPagination>


                </BoxCards>
                <StackButtons  id="buttons" spacing={0}>
                    <Button  variant="outlined" color="error">
                        Cancelar
                    </Button>

                    <Button onClick={handleChangeAceptar} variant="contained" color="success" >
                        Aceptar
                    </Button>


                </StackButtons>
            </Boxxx>

:null}
            
            
        </>
    )

};

