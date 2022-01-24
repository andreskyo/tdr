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
        height:auto;
        background:white;
        box-shadow: -15px 0px 40px -1px rgba(14, 31, 53, 0.2);
        border-radius: 16px 0px 0px 16px;
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
const Div=styled.div`
>div>button{
    background:blue;
}

`


export const SidebarR = ({ datos }) => {
    var data;

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };



    const [filtrados, setFiltrado] = useState(null);

    useEffect(() => {
        setup();
    }, [])


    const setup = () => {
        data = datos
        setFiltrado(data)

    }

    const handleBuscador = (e) => {

      


        const cadena = e.target.value.toLowerCase();
        let tmpArray = [];
        const limite = datos.length;

        for (let index = 0; index < limite; index++) {
            const id = datos[index].id;
            const description = datos[index].description.toLowerCase();
            const alic = datos[index].alic;

            const patt = new RegExp(cadena)
            const res = patt.test(description)
            const ress = patt.test(id)
            const resss = patt.test(alic)

            if (res) {
                tmpArray.push(datos[index])
            }
            if (ress) {
                tmpArray.push(datos[index])
            }

            if (resss) {
                tmpArray.push(datos[index])
            }

        }
        setFiltrado(tmpArray);

    }

    const renderCards = () => {
        let resultado = filtrados && filtrados.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data, i) => {
            return <>
                <Card key={i} sx={{ minWidth: "auto" }}>
                    <CardContentt onClick={() => { alert(data.accion) }}>

                        <Typography variant="h5" component="div">
                            {data.id}

                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
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
        <Div>
            <Button variant="contained" className="MuiButtonBase-root"size="small" onClick={handleOpen}>Agregar Actividad</Button>

            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >


                <Collapse in={open} >
                    <Boxxx>
                        <BoxHeader>
                        <IconButtonn aria-label="close" size="small" onClick={() => { setOpen(false) }}><CloseIcon fontSize="small" /> </IconButtonn> <a onClick={()=>alert('hola')}>Agregar Actividad   </a>
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
                                <Stack spacing={0}>
                            
                                </Stack>
                        </BoxCards>
                    </Boxxx>
                </Collapse>
            </Modal>
        </Div>
    )

};

