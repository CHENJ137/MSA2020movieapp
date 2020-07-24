import React, { useState, useEffect } from 'react';
import ResultCard from '../ResultCard/ResultCard';
import { Grid } from '@material-ui/core';
import './ResultGrid.css';

interface IState {
    Title: string | undefined;
    Year: string | undefined;
    imdbID: string | undefined;
    Type: string | undefined;
    Poster: string | undefined;
}
interface IResultGridProps {
    SearchTitle: (string | null);
    SearchYear: (String | null);
    SearchType: (String | null);
}
function ResultGrid(props: IResultGridProps) {

    const [ItemArray, setItemArray] = useState<IState[]>([{
        Title: "",
        Year: "",
        imdbID: "",
        Type: "",
        Poster: ""
    }]);

    const apikey = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        fetch('http://www.omdbapi.com/?apikey=' + apikey + '&s=' + props.SearchTitle + '&y=' + props.SearchYear + '&type=' + props.SearchType)
            .then(response => response.json())
            .then(response => {
                // console.log(response.Search);
                if (response.Search) {
                    setItemArray(response.Search)
                }else{
                    setItemArray([{
                        Title: "",
                        Year: "",
                        imdbID: "",
                        Type: "",
                        Poster: ""
                    }])
                };
            }).catch(() => console.log("it didn't work")
            );
    }, [props.SearchTitle]);

    console.log(ItemArray);

    let Cards: JSX.Element[] = [];

    if ( !ItemArray[0]["Title"] ) {
        Cards = [<h3>No results found.</h3>];
        console.log(Cards);
    } else {
        ItemArray.forEach((el: IState, i: Number) => {
            if (!el || !el.Title) {
                return;
            } else {
                Cards.push(
                    <Grid key={"card_" + i} item sm={6} md={4} lg={3} className="MediaGridCard">
                        <ResultCard Title={el["Title"]} Year={el["Year"]} imdbID={el["imdbID"]} Type={el["Type"]} Poster={el["Poster"]} />
                    </Grid>)
            }
        })
    }

    return (
        <div className="GridContainer" >
            {Cards}
        </div>
    )
}

export default ResultGrid;