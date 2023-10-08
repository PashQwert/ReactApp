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
    movieInfo: MovieInfo,
    onClose?: () => void
}

function  MovieDetails({movieInfo, onClose=() => {}}:MovieDetailsProps): React.ReactElement {
    return <div className="movieDetails">
        <img className="detailsImage" src={movieInfo.imageUrl} alt={movieInfo.movieName} />
        <div className="detailsName">{movieInfo.movieName}</div>
        <div className="detailsRating">{movieInfo.rating}</div>
        <div className="movieDetails_close" onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
                <circle cx="18.5" cy="10.5" r="9.5" stroke="#F65261" strokeWidth="2"/>
                <path d="M10.5 19.5L1.5 28.5" stroke="#F65261" strokeWidth="2" strokeLinecap="square"/>
            </svg>
        </div>

        <div className="detailsGenres">{movieInfo.relevantGenres.join(', ')}</div>

        <div className="detailsYear">{movieInfo.releaseYear}</div>
        <div className="detailsDuration">{`${movieInfo.duration/60|0}h ${movieInfo.duration%60}m`}</div>

        <p className="detailsDescription">{movieInfo.description}</p>
    </div>;
}

export default MovieDetails;