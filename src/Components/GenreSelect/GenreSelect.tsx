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
      <div style={{border: genre === selectedGenre ?'2px solid #F65261' : 'none'}}></div>
    </li>
  );

  return (<>    
    <ul className="tabs">{listItems}</ul>
    <div className="line1"></div>
    <div className="line2"></div>
    </>
  )
}

export default GenreSelect;