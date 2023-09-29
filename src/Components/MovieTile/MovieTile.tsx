import React from "react";
import './MovieTile.css';

export interface MovieInfo{
    imageUrl: string,
    movieName: string,
    releaseYear: number,
    relevantGenres: string[]
}

interface MovieTileProps {
    movieInfo: MovieInfo,
    onClick: (movieName: string) => void
}

function  MovieTile({movieInfo, onClick}:MovieTileProps): React.ReactElement {
    return <div className="movieTile" onClick={() => onClick(movieInfo.movieName)}>
        <img className="movieImage" src={movieInfo.imageUrl} alt={movieInfo.movieName} />
        <div className="movieName">{movieInfo.movieName}</div>
        <div className="releaseYear">{movieInfo.releaseYear}</div>
        <div className="relevantGenres">{movieInfo.relevantGenres.join(', ')}</div>
    </div>;
}

export default MovieTile;