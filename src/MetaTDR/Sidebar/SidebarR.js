import React, { useState } from 'react';
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


const IconButtonn = styled(IconButton)`
&&{
    
    display:flex;
    flex-direction:row-reverse;
    border:0px;
}

`
const Boxx = styled(Box)`
display:flex;
>p{
    font-family: Nunito;
font-weight:600
font-size: 14px;
line-height: 25px;



/* Action Primary/Default */

color: #124596;
}

`

export const SidebarR = ({ ...props }) => {
    const [open, setOpen] = React.useState(false);
    const [page, setPage] = useState(0);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(4);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

    const renderCard = () => {
        let resultado = props.Datos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data) => {

            return <>
                <Card sx={{ minWidth: "auto" }}>
                    <CardContent>

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
                    </CardContent>

                </Card>

            </>

        });
        return resultado;
    };



    return (
        <div>
            <Button variant="contained" size="small" onClick={handleOpen}>Agregar Actividad</Button>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >


                <Collapse in={open}>
                    <Stack spacing={2}>
                        <Box sx={{
                            width: 600,
                            height: 'auto',
                            margin: 'auto',
                            backgroundColor: 'white',

                        }} >
                            <Boxx sx={{ width: 'auto', height: 'auto' }}>



                                <IconButtonn aria-label="close" size="small" onClick={() => { setOpen(false) }}><CloseIcon fontSize="small" /> </IconButtonn> <p>Agregar Actividad   </p>


                            </Boxx>


                            <Box sx={{ width: 'auto', height: 'auto' }}>
                                {renderCard()}
                                <br />
                                <Stack spacing={2}>
                                <TablePagination


                                    color="primary"
                                    count={props.Datos.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onChangePage={handleChangePage}
                                    onChangeRowsPerPage={handleChangeRowsPerPage}
                                />
                                </Stack>
                            </Box>



                        </Box>
                    </Stack>
                </Collapse>

            </Modal>
        </div>
    )

};
