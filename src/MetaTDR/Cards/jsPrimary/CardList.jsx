import React from 'react';
import styled from "styled-components";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CardComponentList = styled(Card)`
    
    &&{
    background: #FFFFFF;
    box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
    border-radius: 16px;
}

.id{
    padding:2px;
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 500;
    color: #78716C;
}

.servicios{
    padding:2px;
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: #27272A;
}

.alic{
    padding:2px;
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 400;
    color: #8B5CF6;
}
`

const CardList = (props) => {
    return (
        <CardComponentList >

            <CardContent>

                <Typography className="id">
                    {props.datosList.id}
                </Typography>

                <Typography className="servicios">
                    {props.datosList.servicios}
                </Typography>

                <Typography className="alic">
                    {props.datosList.alic}
                </Typography>

            </CardContent>

        </CardComponentList>
    )
}

export default CardList