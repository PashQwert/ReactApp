import React from "react";
import './GenreSelect.css';

function GenreSelect ({genres=[{id:0, title:''}], selectedGenre=0, onSelect=(id:number, title:string):void=>{}}){  
  function handleGenreClick(id:number, title: string){
    onSelect(id,title);
  }

  const listItems = genres.map(genre =>
    <li className="tab"
      key={genre.id} 
      onClick={() => handleGenreClick(genre.id, genre.title)}>
      {genre.title}
      <div style={{border: genre.id === selectedGenre ?'2px solid #F65261' : 'none'}}></div>
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