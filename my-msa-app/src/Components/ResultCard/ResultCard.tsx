import React from 'react';
import { Typography, Link, Card, CardActionArea, CardContent, CardMedia } from '@material-ui/core';
import './ResultCard.css';

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
            <Card >
                <CardActionArea className="CardContainer" >
                    <CardMedia
                        component="img"
                        alt="N/A"
                        className="CardImage"
                        image={props.Poster}
                        title="Contemplative Reptile"
                    />
                    <CardContent className="CardInfo" >
                        <Typography gutterBottom variant="h5" component="h3">
                            {props.Title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Released Year: {props.Year}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Type: {props.Type}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            IMDbID: <Link href={"https://www.imdb.com/title/" + props.imdbID} >{props.imdbID}</Link>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default ResultCard;