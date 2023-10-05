import React from "react";
import './GenreSelect.css';

function GenreSelect ({genres=[''], selectedGenre='', onSelect=(genre:string):void=>{}}){  
  function handleGenreClick(genre: string){
    onSelect(genre);
  }

  const listItems = genres.map(genre =>
    <li className="tab"
      key={genre} 
      onClick={() => handleGenreClick(genre)}>
      {genre}
      <div className={genre === selectedGenre ? 'selectedItem' : ''}></div>
    </li>
  );

  return (<div className="genreSelect_box">    
    <ul className="tabs">{listItems}</ul>
    </div>
  )
  // <div className="line1"></div>
  // <div className="line2"></div>
}

export default GenreSelect;