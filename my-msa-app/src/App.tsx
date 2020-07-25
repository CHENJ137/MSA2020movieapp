import React, { useState } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import ResultGrid from './Components/ResultGrid/ResultGrid';
import { IUserInput } from './Common/Interfaces';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})


function App() {

  const [UserInput, setUserInput] = useState<IUserInput>({
    SearchTitle: "Harry Potter",
    SearchYear: "",
    SearchType: "",
  });

  function SetUserInput(a: IUserInput) {
    setUserInput(a);
  }

  return (
    <div className="App">
      <MuiThemeProvider theme={theme} >
        <SearchBar SetUserInput={SetUserInput} />
        <ResultGrid SearchTitle={UserInput.SearchTitle} SearchYear={UserInput.SearchYear} SearchType={UserInput.SearchType} />
      </MuiThemeProvider>
    </div>
  );
};

export default App;
