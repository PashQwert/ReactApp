import React, { useState } from 'react';
import './MovieListPage.css';

import SearchForm from '../SearchForm';
import GenreSelect from '../GenreSelect';
import SortControl from '../SortControl';
import MovieTile, { MovieInfo as MovieInfoForTile} from '../MovieTile';
import MovieDetails, { MovieInfo as MovieInfoForDetails } from '../MovieDetails';
import Dialog from '../Dialog';

import logo from '../../logo.svg';
import image from '../MovieDetails/PulpFiction.png'

const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
const movies:Array<MovieInfoForTile> = Array.from({length:5}).map((x, index) => {
    return {
      imageUrl: logo,
      movieName: "Bohemian Rhapsody " + index,
      releaseYear: 2003,
      relevantGenres: ['Drama', 'Biography', 'Music']
    } as MovieInfoForTile;
  }
);
const movieDetails:Array<MovieInfoForDetails> = Array.from({length:5}).map((x, index) => {
    return {
      imageUrl: image,
        movieName: 'Pulp Fiction ' + index,
        releaseYear: 1994,
        relevantGenres: ['Action & Adventure'],
        duration: 154,
        rating: 8.9,
        description: 'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra'
    } as MovieInfoForDetails;
  }
);

const MovieListPage = ():React.ReactElement => {    
    const [searchQuery, setSearchQuery] = useState("");    
    const [sortCriterion, setSortCriterion] = useState("Title");
    const [activeGenre, setActiveGenre] = useState("All");
    const [movieList, setMovieList] = useState<Array<MovieInfoForTile>>(movies);
    const [selectedMovie, setSelectedMovie] = useState<string>();
    //const [] = useState();

    const handleSearch = (searchString:string) => {
      setSearchQuery(searchString);
      console.log(`searchQuery: ${searchQuery}`);
    }

    const handleSelectGenre = (genre:string) => {
      setActiveGenre(genre);
      console.log(`activeGenre: ${activeGenre}`);
    }

    const handleSelectSortCriterion = (criterion:string) => {
      setSortCriterion(criterion);
      console.log(`sortCriterion: ${sortCriterion}`);
    }

    const handleSelectMovie = (movieName:string) => {
      setSelectedMovie(movieName);
      console.log(`selectedMovie: ${selectedMovie}`);
    }

    const handleCloseDetails = () => {
      console.log(`unselected movie: ${selectedMovie}`);
      setSelectedMovie(undefined);
    }

    //console.log(`selectedMovie: ${selectedMovie}`) 

    return <div className='movieListPage_box'>
      <div className='movieListPage_searchForm'>
        <SearchForm initialSearchString={searchQuery} onSearch={handleSearch}/>
      </div>
      <div className='movieListPage_filterForm'>
        <GenreSelect selectedGenre={activeGenre} genres={genres} onSelect={handleSelectGenre} />
        <SortControl currentSelection={sortCriterion} onChange={handleSelectSortCriterion} />
      </div>
      <div className='movieListPage_resultForm'>
        { movieList.map(movie => <MovieTile movieInfo={movie} onClick={handleSelectMovie} key={movie.movieName}/>) }
      </div>

      {selectedMovie !== undefined &&         
          <Dialog title={selectedMovie} onClose={handleCloseDetails}>
            <MovieDetails movieInfo={movieDetails[0]}/>
          </Dialog>
      }
    </div>
}
  
export default MovieListPage;