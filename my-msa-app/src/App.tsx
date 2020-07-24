import React, { useState } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import ResultGrid from './Components/ResultGrid/ResultGrid';
import { IUserInput } from './Common/Interfaces';

function App() {

  const [UserInput, setUserInput] = useState<IUserInput>({
    SearchTitle: "Breaking Bad",
    SearchYear: "",
    SearchType: "",
  });

  function SetUserInput(a: IUserInput) {
    setUserInput(a);    
  }

  return (
    <div className="App">
       <SearchBar SetUserInput={SetUserInput}/>
       <ResultGrid SearchTitle={UserInput.SearchTitle} SearchYear={UserInput.SearchYear} SearchType={UserInput.SearchType}/>
    </div>
  );
}

export default App;
