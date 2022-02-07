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
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';





const Div = styled.div`
background:white;
box-shadow: -15px 0px 40px -1px rgba(14, 31, 53, 0.2);
border-radius: 16px 0px 0px 16px;

>div>div>button{
    :hover{
        background:none;
        text-decoration:underline;
    }
}
`

const DivCards = styled.div`

&&:hover{
    background: #e8e3e2 ;
    cursor:pointer;
}
`

const StackButtons = styled(Stack)`
&&{
    display:flex;
    justify-content:space-around;
    flex-direction:row;
    padding:5px;
}
>Button{
    display:flex;
    width:30%;
    text-transform:none;
}
`

const StackPagination = styled(Stack)``


export const SidebarR = ({ disabled, datos,...props }) => {

    const [selected, setSelected] = React.useState(true);

    const [text, setText] = React.useState();
    const [filtrados, setFiltrado] = useState(datos);
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = React.useState(3);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
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
        setSelected(false)
        return setText(`${valor.id} - ${valor.description} - ${valor.alic}`)
    }



    const handleChangeCancel = () => {
        setSelected(true)

    }


    const handleChangeAceptar = () => {
        alert(text)
    }



    const renderCards = () => {
        let resultado = filtrados && filtrados.slice((page - 1) * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data, i) => {

            return <>

                <div className="container-fluid m-0" key={i} sx={{ minWidth: "auto" }} onClick={() => handleChange(data)} >
                    <DivCards className="row p-2 cards" >

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
                    </DivCards>

                </div>

            </>



        })
        return resultado;
    }
    
    return (
        <>
            {disabled === false ?
                <Div className="container-fluid m-0" >
                    <div className="row ">
                        
                        <div className="col-12"><CloseIcon className="mt-1"sx={{ fontSize: 25 }} />
                        {props.bActividad}
                        </div>
                        <div className="col">

                            <TextField
                                className="m-1"
                                fullWidth
                                placeholder='Buscar'
                                onChange={handleBuscador}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                type="search" />

                        </div>
                    </div>



                    <div className="row">

                        {renderCards()}
                        <br />


                        {selected === true ?
                            
                                <StackPagination className="m-2" id="table" spacing={0}>

                                    <Pagination

                                        count={Math.ceil(filtrados.length / 4)}
                                        size="large"
                                        page={page}
                                        color="primary"
                                        onChange={handleChangePage}
                                    />


                                </StackPagination>
                            
                            :

                            <StackButtons  id="buttons" spacing={0}>
                                <Button onClick={handleChangeCancel} variant="outlined" color="error">
                                    Cancelar
                                </Button>

                                <Button onClick={handleChangeAceptar} variant="contained" color="success" >
                                    Aceptar
                                </Button>


                            </StackButtons>}

                    </div>


                </Div>

                : null}


        </>
    )

};

