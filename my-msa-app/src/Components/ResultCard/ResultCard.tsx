import React from 'react';
import { Paper, Grid, Typography, Link } from '@material-ui/core';
import noImage from '../../Common/no-image.jpg';

interface IResultCardProps {
    Title: string | undefined;
    Year: string | undefined;
    imdbID: string | undefined;
    Type: string | undefined;
    Poster: string | undefined;
}

function ResultCard(props: IResultCardProps) {

    return (
        <div>
            <p>{props.Title}</p>
            <p>{props.Year}</p>
            <p>{props.imdbID}</p>
            <p>{props.Type}</p>
            <p>{props.Poster}</p>
        </div>
    )
}

export default ResultCard;