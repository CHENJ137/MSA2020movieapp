import React, { useState, useEffect } from 'react';
import ResultCard from '../ResultCard/ResultCard';
import { Grid } from '@material-ui/core';

interface IState {
    links: any[];
    data: any[];
}
interface IMediaGridProps {
    SearchQuery: (string | null);
    StartDate: (Date | null);
    EndDate: (Date | null);
}
function ResultGrid() {

    const apikey = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        fetch('http://www.omdbapi.com/?apikey=' + apikey + '&s=the perks of being a wallflower')
            .then(response => response.json())
            .then(response => {
                console.log(response);
                // setItemArray(response.collection.items)
            })
            .catch(() => console.log("it didn't work")
            );

    }, []);

    return (
        <div>
            <ResultCard/>
        </div>
    )
}

export default ResultGrid;