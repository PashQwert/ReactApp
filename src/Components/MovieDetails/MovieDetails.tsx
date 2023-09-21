import React from "react";
import './MovieDetails.css';

export interface MovieInfo{
    imageUrl: string,
    movieName: string,
    releaseYear: number,
    relevantGenres: string[],
    rating: number,
    duration: number,
    description: string
}

interface MovieDetailsProps {
    movieInfo: MovieInfo
}

function  MovieDetails({movieInfo}:MovieDetailsProps): React.ReactElement {
    return <div className="movieDetails">
        <img className="detailsImage" src={movieInfo.imageUrl} alt={movieInfo.movieName} />
        <div className="detailsName">{movieInfo.movieName}</div>
        <div className="detailsRating">{movieInfo.rating}</div>

        <div className="detailsGenres">{movieInfo.relevantGenres.join(', ')}</div>

        <div className="detailsYear">{movieInfo.releaseYear}</div>
        <div className="detailsDuration">{`${movieInfo.duration/60|0}h ${movieInfo.duration%60}m`}</div>

        <p className="detailsDescription">{movieInfo.description}</p>
    </div>;
}

export default MovieDetails;