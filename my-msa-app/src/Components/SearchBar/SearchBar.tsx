import React, { useState } from 'react';
import { Grid, TextField, MenuItem, Button } from '@material-ui/core';
import { IUserInput } from '../../Common/Interfaces';
import './SearchBar.css';

interface ISearchBarProps {
    SetUserInput: (a: IUserInput) => void;
};

function SearchBar(props: ISearchBarProps) {

    const [SearchTitle, setSearchTitle] = useState<string | null>("");
    const handleSearchTitleChange = (s: string | null) => {
        setSearchTitle(s);
    };

    const [SearchYear, setSearchYear] = useState<string | null>("");
    const handleSearchYearChange = (s: string) => {
        setSearchYear(s);
    };

    const [SearchType, setSearchType] = useState<string>("");
    const handleSearchTypeChange = (s: string) => {
        setSearchType(s);
    };

    const [HasFocus, setHasFocus] = useState<boolean>(false);

    const handleSubmit = () => {
        console.log(SearchTitle + SearchType);

        if (SearchTitle?.length !== 0 && SearchTitle !== null && SearchTitle !== "") {
            let UserInput: IUserInput = {
                SearchTitle: SearchTitle,
                SearchYear: SearchYear,
                SearchType: SearchType,
            }
            props.SetUserInput(UserInput);
        } else {
            setHasFocus(true);
        }
    }

    return <div className="SearchBarContainer">
        <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
                <TextField
                    required
                    id="outlined-required"
                    label="Title"
                    variant="outlined"
                    error={HasFocus && SearchTitle === ""}
                    onClick={() => setHasFocus(true)}
                    value={SearchTitle}
                    onChange={e => handleSearchTitleChange(e.target.value)}
                />
            </Grid>
            <Grid item xs={6} sm={3}>
                <TextField
                    type="number"
                    id="outlined-required"
                    label="Year"
                    variant="outlined"
                    onClick={() => setHasFocus(true)}
                    value={SearchYear}
                    onChange={e => handleSearchYearChange(e.target.value)}
                />
            </Grid>
            <Grid item xs={6} sm={3} >
                <TextField
                    select
                    id="outlined-required"
                    label="Type"
                    variant="outlined"
                    className="MenuItem" 
                    onClick={() => setHasFocus(true)}
                    value={SearchType}
                    onChange={e => handleSearchTypeChange(e.target.value)}
                >
                    <MenuItem value="" >
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"movie"} >Movie</MenuItem>
                    <MenuItem value={"series"} >TV series</MenuItem>
                    <MenuItem value={"episode"} >Episode</MenuItem>
                </TextField>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Search
                </Button>
            </Grid>
        </Grid>
    </div>

};

export default SearchBar;