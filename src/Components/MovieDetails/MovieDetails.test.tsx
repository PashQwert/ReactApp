import React from 'react';
import { render, screen, fireEvent  } from '@testing-library/react';
import MovieDetails, { MovieInfo } from './MovieDetails';

const movieInfo:MovieInfo = {
    imageUrl: 'imageUrl',
    movieName: 'movieName',
    releaseYear: 2000,
    relevantGenres: ['genre1','genre2'],
    rating: 9.1,
    duration: 120,
    description: 'some desctiption'
};
const onClick = jest.fn();

test('Test that component renders all movie info passed in props', () => {
    render(<MovieDetails movieInfo={movieInfo}/>);
        
    let linkElement = screen.getByAltText(new RegExp(`${movieInfo.movieName}`));
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('src', movieInfo.imageUrl);
           
    linkElement = screen.getByText(new RegExp(`${movieInfo.movieName}`));
    expect(linkElement).toBeInTheDocument();

    linkElement = screen.getByText(new RegExp(`${movieInfo.releaseYear}`));
    expect(linkElement).toBeInTheDocument();

    linkElement = screen.getByText(new RegExp(`${movieInfo.relevantGenres.join(', ')}`));
    expect(linkElement).toBeInTheDocument();

    linkElement = screen.getByText(new RegExp(`${movieInfo.rating}`));
    expect(linkElement).toBeInTheDocument();

    linkElement = screen.getByText(new RegExp(`${movieInfo.description}`));
    expect(linkElement).toBeInTheDocument();

    linkElement = screen.getByText(new RegExp(`${movieInfo.duration/60|0}h ${movieInfo.duration%60}m`));
    expect(linkElement).toBeInTheDocument();
});