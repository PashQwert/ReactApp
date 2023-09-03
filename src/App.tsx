import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './Components/Counter';
import GenreSelect from './Components/GenreSelect';
import SearchForm from './Components/SearchForm';

const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

function App() {
  const [selectedGenre, setSelectedGenre] = useState('All')

  const handleStartSearch = (s:string):void => {
    console.log(`String for search: ${s}`);
    if(s.trimStart().length > 0){
      alert(`The searched text "${s.trim()}" was not found.`)
    }
  }
  
  const handleGenreChange = (genre:string):void => {  
    console.log(`String for search: ${genre}`);
    setSelectedGenre(genre);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter count={10}/>
        <SearchForm initialSearchString='some text to search' onSearch={handleStartSearch}/>
        <GenreSelect genres={genres} selectedGenre={selectedGenre} onSelect={handleGenreChange}/>
      </header>
    </div>
  );
}

export default App;
