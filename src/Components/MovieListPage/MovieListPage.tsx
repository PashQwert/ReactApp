import React, { useState, useEffect } from 'react';
import './MovieListPage.css';

import SearchForm from '../SearchForm';
import GenreSelect from '../GenreSelect';
import SortControl from '../SortControl';
import MovieTile, { MovieInfo as MovieInfoForTile} from '../MovieTile';
import MovieDetails, { MovieInfo as MovieInfoForDetails } from '../MovieDetails';
import Dialog from '../Dialog';

import { useHttp } from '../../Hooks/http';

import logo from '../../logo.svg';
import image from '../MovieDetails/PulpFiction.png'

const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

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
    const [movieList, setMovieList] = useState<Array<MovieInfoForDetails>>();
    const [selectedMovie, setSelectedMovie] = useState<string>();

    const handleSearch = (searchString:string) => {
      setSearchQuery(searchString);
      console.log(`searchQuery: ${searchString}`);
    }

    const handleSelectGenre = (genre:string) => {
      setActiveGenre(genre);
      console.log(`activeGenre: ${genre}`);
    }

    const handleSelectSortCriterion = (criterion:string) => {
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
/*
    const [isLoading, fetchedData] = useHttp(
      new URL('http://localhost:4000/movies?limit=10'),
      [searchQuery, sortCriterion, activeGenre]
    );

    if (fetchedData) {
      const res = fetchedData as unknown as resp;
      const data = res.data.map((x, index) => {
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
      
      //setMovieList(data);
    }
*/

  useEffect(() => {
    console.log('useEffect runs');
    
    const url = new URL(`http://localhost:4000/movies?limit=5&sortOrder=asc&searchBy=title`
      +`&sortBy=${sortCriterion}&search=${searchQuery}&filter=${activeGenre === "All" ? "" : activeGenre}`);
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch.');
        }
        return response.json();
      })
      .then(data => {
        const respo = data as resp;
        
        const ml = respo.data.map((x, index) => {
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

        setSelectedMovie(undefined);
        setMovieList(ml);
      })
      .catch(err => {
        console.log(err);
      });
    }, [searchQuery, sortCriterion, activeGenre]);

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

      {selectedMovie !== undefined &&         
          <Dialog title={selectedMovie} onClose={handleCloseDetails}>
            <MovieDetails movieInfo={movieDetails[0]}/>
          </Dialog>
      }
    </div>
}
  
export default MovieListPage;
//export default React.memo(MovieListPage);