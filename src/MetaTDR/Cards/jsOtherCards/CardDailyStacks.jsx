import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import styled from "styled-components";


const ComponentCardDaily = styled(Card)`
   &&{
    background: #FFFFFF;
    box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
    border-radius: 22.8683px;
   }   
   .tag{
    width: 450px;
    height: auto;
    text-align:center;

   }
`

const CardDailyStacks = (props) => {

    const renderCards = () => {

        let resultado = props.datosDailyStack.map((res, i) => {

            return <>
                <CardContent className="d-flex">
                    <Typography
                        className="name"
                    >

                        {res.hora}

                    </Typography>
                    <Chip
                        className="tag d-block p-0"
                        color={res.tagColor}
                        icon={res.iconTags}
                        label={res.horaTags}

                    />

                </CardContent>

            </>

        })

        return resultado
    }


    return (
        <ComponentCardDaily >






            {renderCards()}







        </ComponentCardDaily>
    )
}

export default CardDailyStacks