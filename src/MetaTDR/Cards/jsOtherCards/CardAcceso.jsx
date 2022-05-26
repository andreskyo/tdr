import React from 'react'
import styled from "styled-components";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Buttons } from '../../Buttons/Butttons/Buttons'


const CardComponentAcceso = styled(Card)`
     &&{
       background: #FFFFFF;
       box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
       border-radius: 16px;
       display:flex;
  } 
  .button{
       margin-left:5px;
       border: 1px solid #124596;
       border-radius: 8px;
       text-transform:none ;
       :hover{
           background:#124596;
           color:white;
       }
  }

  .icon{
       
       background:white;
       color:#78716C;
       border: 1.14341px solid #78716C;
       
  } 

  .css-i4bv87-MuiSvgIcon-root{
      font-size:40px;
  }
  .titulo{
       font-family: 'SF UI Text';
       font-style: normal;
       font-weight: 600;
       color: #272727;
       margin-top: 20px;
  }
  .descripcion{
       font-family: 'SF UI Text';
       font-style: normal;
       font-weight: 400;
       color: #272727;
  }
 
 
`

const CardAcceso = (props) => {
    return (
        <CardComponentAcceso>

            {props.datosAcceso.icon ?
                <CardHeader
                    avatar={
                        props.datosAcceso.icon ?
                            <Avatar
                                className="icon"
                                alt="Remy Sharp"
                                sx={{ width: 80, height: 80 }}

                            > {props.datosAcceso.icon}</Avatar>
                            : null
                    }
                />
                : null}

            <CardContent className="row p-2 cardContent">
                {props.datosAcceso.titulo ?
                    <Typography
                        className="titulo"
                    >
                        {props.datosAcceso.titulo}
                    </Typography>
                    : null}
                {props.datosAcceso.descripcion ?
                    <Typography
                        className="descripcion"
                    >
                        {props.datosAcceso.descripcion}
                    </Typography>
                    : null}
                {props.datosAcceso.button ?
                    <CardActions>
                        <div className="container-button">
                            {props.datosAcceso.button}
                        </div>
                    </CardActions>
                    : null}
            </CardContent>

        </CardComponentAcceso>
    )
}

export default CardAcceso