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
>div>div>div>div>div>svg{
    position:absolute;
    margin-left: 12px;
    margin-top:19px;
}



>div>div>div>div>input{
background: #F6F8FA;
border-radius: 5px;
padding-left: 50px;
margin-top:20px;
margin-left:-20px;

}
>div>div>div>div>fieldset{
border:none;

border-radius: 5px;

}

>div>div>p{
font-family: Nunito;
font-style: normal;
font-weight: bold;
font-size: 25px;
color: #124596;
margin-top:21px;
margin-left:20px;
text-transform:none;
:hover{
    background:none;
    
}
}
`

const DivCards = styled.div`
margin-top: 22px;
border-bottom:1px solid #F4F6F9;
height: 100%;
.id{
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 16px;
color: #858C94;
}
.description{
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 18px;
color: #09101D;
}
.alic{
font-family: Nunito;
font-style: normal;
font-weight: bold;
font-size: 19px;
line-height: 16px;
color: purple;
}
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
>.aceptar{
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    color: white;
    line-height: 25px;
    text-transform:none;
    padding:10px;
    width:30%;
    :hover{
        
        
        background:green;
    }
}
>.cancel{
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    color: red;
    line-height: 25px;
    text-transform:none;
    padding:10px;
    width:30%;
    :hover{
        
        
        background:none;
    }
}
`

const Div2=styled.div`

.active{
    width:100%;
    background: #e8e3e2 }
`

const StackPagination = styled(Stack)``


export const SidebarR = ({ disabled, datos, ...props }) => {

    const [selected, setSelected] = React.useState(true);
    const [selectedItem,setselecteditem]=React.useState();

    const [text, setText] = React.useState();
    const [filtrados, setFiltrado] = useState(datos);
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = React.useState(3);

    const handleChangePage = (event, newPage) => {
        setselecteditem();
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
        console.log(e)
        setSelected(false)
        return setText(`${valor.id} - ${valor.description} - ${valor.alic}`)
    }



    const handleChangeCancel = () => {
        setSelected(true)
        setselecteditem()
    }


    const handleChangeAceptar = () => {
        alert(text)
    }



    const renderCards = () => {
        let resultado = filtrados && filtrados.slice((page - 1) * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data, i) => {

            return <div style={{height:"100%"}}>

                <div className={selectedItem===i?"active container-fluid m-0":"container-fluid m-0"} key={i} sx={{ minWidth: "auto" }} onClick={() =>{setselecteditem(i);handleChange(data)}} >
                    <DivCards className="row p-2 cards" style={{height:"100%"}} >

                        <Typography sx={{ mb: 1.5 }} component="div" className="id">
                            {data.id}

                        </Typography>
                        <Typography sx={{ mb: 1.5 }} className="description" color="text.secondary">
                            {data.description}
                        </Typography>
                        <Typography variant="body2" className="alic">
                            {data.alic}
                            <br />

                        </Typography>
                    </DivCards>

                </div>

            </div>



        })
        return resultado;
    }

    return (
        <>
            {disabled === false ?
                <Div className="container-fluid m-0" >
                    <div className="row ">

                        <div className="col-12 d-flex" style={{borderBottom:"1px solid #F4F6F9"}}>


                            <CloseIcon className="mt-4" sx={{ fontSize: 30 }} />


                            {props.bActividad}




                        </div>


                        <div className="col">

                            <TextField

                                
                                fullWidth
                                placeholder='Buscar...'
                                onChange={handleBuscador}
                                InputProps={{
                                    startAdornment: 
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ,
                                }}
                                type="search" />
                        </div>
                    </div>



                    <Div2 className="row">

                        {renderCards()}
                        <br />


                        {selected === true ?

                            <StackPagination className="mt-5" id="table" spacing={0}>

                                <Pagination

                                    count={Math.ceil(filtrados.length / 4)}
                                    size="large"
                                    page={page}
                                    color="primary"
                                    onChange={handleChangePage}
                                />


                            </StackPagination>

                            :

                            <StackButtons className="mt-5" spacing={0}>
                                <Button onClick={handleChangeCancel} disableRipple variant="outlined" color="error" className="cancel">
                                    Cancelar
                                </Button>

                                <Button onClick={handleChangeAceptar} disableRipple variant="contained" color="success" className="aceptar"  >
                                    Aceptar
                                </Button>


                            </StackButtons>}

                    </Div2>


                </Div>

                : null}


        </>
    )

};

