import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './Components/Counter';
import GenreSelect from './Components/GenreSelect';
import SearchForm from './Components/SearchForm';
import MovieTile, {MovieInfo} from './Components/MovieTile';

const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
const movie1: MovieInfo = {
  imageUrl: logo,
  movieName: "Bohemian Rhapsody",
  releaseYear: 2003,
  relevantGenres: ['Drama', 'Biography', 'Music']
}

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

  const handleMovieTileClick = (movieName:string):void => {  
    console.log(`Click on movie: ${movieName}`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MovieTile movieInfo={movie1} onClick={handleMovieTileClick}/>
        <Counter count={10}/>
        <SearchForm initialSearchString='some text to search' onSearch={handleStartSearch}/>
        <GenreSelect genres={genres} selectedGenre={selectedGenre} onSelect={handleGenreChange}/>
      </header>
    </div>
  );
}

export default App;
