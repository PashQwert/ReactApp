import React, { useState } from 'react';
import './MovieListPage.css';

import SearchForm from '../SearchForm';
import GenreSelect from '../GenreSelect';
import SortControl from '../SortControl';
import MovieTile from '../MovieTile';
import MovieDetails, { MovieInfo as MovieInfoForDetails } from '../MovieDetails';
import Dialog from '../Dialog';

import { useHttp } from '../../Hooks/http';

const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

interface MovieInfo {
  budget: number,
  genres: [string],
  id: number,
  overview: string
  poster_path: string
  release_date: string
  revenue: number
  runtime: number
  tagline: string
  title: string
  vote_average: number
  vote_count: number
}

type resp = {
  totalAmount: number,
  limit: number,
  offset: number,
  data: Array<MovieInfo>
};

const MovieListPage = ():React.ReactElement => {    
    const [searchQuery, setSearchQuery] = useState("");    
    const [sortCriterion, setSortCriterion] = useState("Title");
    const [activeGenre, setActiveGenre] = useState("All");
    const [selectedMovie, setSelectedMovie] = useState<string>();
    const [controller, setController] = useState(new AbortController());    

    const AbortRequest = () => { 
      controller.abort();
      setController(new AbortController());
    }

    const handleSearch = (searchString:string) => {
      AbortRequest();
      setSelectedMovie(undefined);
      setSearchQuery(searchString);
      console.log(`searchQuery: ${searchString}`);
    }

    const handleSelectGenre = (genre:string) => {
      AbortRequest();
      setSelectedMovie(undefined);
      setActiveGenre(genre);
      console.log(`activeGenre: ${genre}`);
    }

    const handleSelectSortCriterion = (criterion:string) => {
      AbortRequest();
      setSelectedMovie(undefined);
      setSortCriterion(criterion);
      console.log(`sortCriterion: ${criterion}`);
    }

    const handleSelectMovie = (movieName:string) => {
      setSelectedMovie(movieName);
      console.log(`selectedMovie: ${movieName}`);
    }

    const handleCloseDetails = () => {
      console.log(`unselected movie: ${selectedMovie}`);
      setSelectedMovie(undefined);
    }

    const url = new URL(`http://localhost:4000/movies?limit=5&sortOrder=asc&searchBy=title`
      +`&sortBy=${sortCriterion}&search=${searchQuery}&filter=${activeGenre === "All" ? "" : activeGenre}`);

    const [isLoading, fetchedData] = useHttp(
      new URL(url),
      [searchQuery, sortCriterion, activeGenre],
      controller.signal
    );

    let movieList = undefined;

    if (fetchedData) {
      const res = fetchedData as unknown as resp;
      const data = res.data.filter((a, i) => res.data.findIndex((s) => a.title === s.title) === i).map((x, index) => {
        return {
          imageUrl: x.poster_path,
          movieName: x.title,
          releaseYear: new Date(x.release_date).getFullYear(),
          relevantGenres: x.genres,
          duration: x.runtime,
          rating: x.vote_average,
          description: x.overview
        } as MovieInfoForDetails;
      });
      console.log(data);
      
      //setMovieList(data); ??? Infinity loop cicle
      movieList = data;
    }

    return <div className='movieListPage_box'>
      <div className='movieListPage_searchForm'>
        {selectedMovie === undefined && <SearchForm initialSearchString={searchQuery} onSearch={handleSearch}/>}
        {selectedMovie !== undefined && movieList && <MovieDetails movieInfo={movieList.find(x => x.movieName === selectedMovie)!} onClose={handleCloseDetails}/>}
      </div>
      <div className='movieListPage_filterForm'>
        <GenreSelect selectedGenre={activeGenre} genres={genres} onSelect={handleSelectGenre} />
        <SortControl currentSelection={sortCriterion} onChange={handleSelectSortCriterion} />
      </div>
      <div className='movieListPage_resultForm'>
        { movieList && movieList.map(movie => <MovieTile movieInfo={movie} onClick={handleSelectMovie} key={movie.movieName}/>) }
      </div>

      {selectedMovie !== undefined && movieList &&         
          <Dialog title={selectedMovie} onClose={handleCloseDetails}>
            <MovieDetails movieInfo={movieList.find(x => x.movieName === selectedMovie)!}/>
          </Dialog>
      }
    </div>
}
  
export default MovieListPage;
//export default React.memo(MovieListPage);