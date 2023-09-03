import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './Components/Counter';
import GenreSelect from './Components/GenreSelect';
import SearchForm from './Components/SearchForm';

const genres = [
  { title: 'All', id: 0 },
  { title: 'Documentary', id: 1 },
  { title: 'Comedy', id: 2 },
  { title: 'Horror', id: 3 },
  { title: 'Crime', id: 4 },
];

function App() {
  const [selectedGenre, setSelectedGenre] = useState(0)

  const handleStartSearch = (s:string):void => {
    console.log(`String for search: ${s}`);
  }
  
  const handleGenreChange = (id:number, title:string):void => {  
    console.log(`String for search: ${title}`);
    setSelectedGenre(id);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter count={10}/>
        <br/>
        <SearchForm initialSearchString='some text to search' onSearch={handleStartSearch}/>
        <br/>
        <GenreSelect genres={genres} selectedGenre={selectedGenre} onSelect={handleGenreChange}/>
      </header>
    </div>
  );
}

export default App;
