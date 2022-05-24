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
  .yzFfc.yzFfc{
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
  .cardContent{
      
      margin-left:-20px;
  }
 
`

const CardAcceso = (props) => {
    return (
        <CardComponentAcceso>


            <CardHeader
              
                avatar={
                    props.datosAcceso.icon ?
                    <Avatar
                        className="icon"
                        alt="Remy Sharp"
                        sx={{ width:80, height: 80 }}
                    
                    > {props.datosAcceso.icon}</Avatar>
                    :null
                }
            />
      

      
            <CardContent className="row p-2 cardContent">
                <Typography
                    className="titulo"
                >
                    {props.datosAcceso.titulo}
                </Typography>

                <Typography
                    className="descripcion"
                >
                    {props.datosAcceso.descripcion}
                </Typography>

                <CardActions>
                    <Buttons
                        contained
                        primary
                        outlined
                        onClick={props.datosAcceso.onClick}
                        text={props.datosAcceso.button} />
                </CardActions>

            </CardContent>

        </CardComponentAcceso>
    )
}

export default CardAcceso