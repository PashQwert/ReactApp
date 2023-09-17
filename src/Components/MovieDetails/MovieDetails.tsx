import React from "react";
import './MovieDetails.css';
/*
The component should take properties to receive image url, movie name, release year, rating, duration and a description. 
Alternatively,  you can specify a single property that accepts an object with all movie info.
*/

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

function  MovieDetails({movieInfo}:MovieDetailsProps): JSX.Element {
    return <>
        <img className="detailsImage" src={movieInfo.imageUrl} alt={movieInfo.movieName} />
        <label className="detailsName">{movieInfo.movieName}</label>
        <label className="detailsRating">{movieInfo.rating}</label>

        <label className="detailsGenres">{movieInfo.relevantGenres.join(', ')}</label>

        <label className="detailsYear">{movieInfo.releaseYear}</label>
        <label className="detailsDuration">{`${movieInfo.duration/60|0}h ${movieInfo.duration%60}m`}</label>

        <label className="detailsDescription">{movieInfo.description}</label>
    </>;
}

export default MovieDetails;