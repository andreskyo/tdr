import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Menu from "@mui/material/Menu";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";


const ListItemm = styled(ListItem)`

&&.active{
    
    
}
&&.inactive{
    
    background-color: rgba(14, 31, 53, 0.08);
    
}

.textHora{
font-family:'Nunito';
font-style: normal;
font-weight: 400;
font-size: 13px;
margin-top:-9px;
line-height: 14px;
font-feature-settings: 'ss07' on;
color: #6D7580;
opacity: 0.64;
}
.textMulta{
font-family: 'Nunito';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 18px;
font-feature-settings: 'ss07' on;
color: #6D7580;
}
.textVencimiento{
font-family: 'Nunito';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
font-feature-settings: 'ss07' on;
color: #09101D;

}


`
const Menuu = styled(Menu)`
height:100%;



`



export const MenuInputDos = ({ ...props }) => {
    const [datos,setDatos]=React.useState(props.datosCards)
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

  
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl();
    };

    const cambiar = (i) => {
        
       
        setDatos( (prev) => Object.assign([], { ...prev, [i]: Object.assign( {}, {...prev[i], leido: true} )}));
        
    }

    const renderPrueba = () => {
        
        let resultado = datos.map((result, i) => {

            return <>
                <div className="row-fluid m-auto p-0 "
                >
                    <List  
                    className="p-0 col-12 m-0">


                        <ListItemm

                            button
                            disableRipple
                            key={i}
                            className={result.leido ? "active " : "inactive"}
                            onClick={()=>{cambiar(i)}}
                            
                        >
                            <ListItemAvatar  >
                                {result.imagen}
                            </ListItemAvatar>
                            <ListItemText
                             style={{ marginTop: "15px", padding: "0px" }} 
                             >
                                {result.textHora}
                                {result.textMulta}
                                {result.textVencimiento}
                                

                            </ListItemText>


                        </ListItemm>







                    </List>


                </div>



            </>


        })



        return resultado;

    };



    return (

        <React.Fragment className="container-fluid m-0">
            
            <div className="row col-12 m-0 p-0 "
            >
                <IconButton
                    className="IconNotificacion "
                    disableRipple
                    onClick={handleClick}

                         
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}

                >
                    
                    <Badge badgeContent={datos.filter(x=>x.leido===false).length} color="primary" >
                        <MailOutlineIcon style={{ color: "black" }}></MailOutlineIcon>
                    </Badge>
                    
                </IconButton>
            </div>
            

                <Menuu
                    className="row col-12 p-0 "
                    
                    anchorEl={anchorEl}
                    disableRipple
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    MenuListProps={{
                        "aria-labelledby": "basic-button"
                    }}
                    PaperProps={{

                        sx: {
                            filter: "0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.08);",
                            ml: 0,
                            background: "#FFFFFF",
                            borderRadius: "8px"
                        }
                    }}
                >


                    {props.datosCards.length ? renderPrueba() :
                        <div className="container-fluid ml-0 p-0" >
                            {props.imagen}
                            {props.notificacion}
                            {props.subNotificacion}
                        </div>

                    }
                    
                    <div className="container-fluid" style={{ position: 'fixed', top: "0", margin: "auto", background: "white", width: "100%",padding:"10px" }}>
                     <div className="row-fluid d-flex">
                    <div className=" col-10" > {props.iconImgMail}   {props.verNotificaciones}  </div>
                    <div className=" col-2" style={{background:"#22AADE",width:"auto",height:30,borderRadius:8,color: "#FFFFFF",fontSize:12,padding:5,fontFamily:"Nunito"}}>  {datos.filter(x=>x.leido===false).length } nuevos</div>
                    </div>
                        <ListItemText />
                    </div>
                    
                </Menuu>



            
        </React.Fragment >
    )

};
