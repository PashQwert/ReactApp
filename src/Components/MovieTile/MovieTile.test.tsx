import React from 'react';
import { render, screen, fireEvent  } from '@testing-library/react';
import MovieTile, { MovieInfo } from './MovieTile';

const movieInfo:MovieInfo = {
    imageUrl: 'imageUrl',
    movieName: 'movieName',
    releaseYear: 2000,
    relevantGenres: ['genre1','genre2']
};
const onClick = jest.fn();

test('Test that component renders all movie info passed in props', () => {
    render(<MovieTile movieInfo={movieInfo} onClick={onClick}/>);
        
    let linkElement = screen.getByAltText(new RegExp(`${movieInfo.movieName}`));
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('src', movieInfo.imageUrl);
           
    linkElement = screen.getByText(new RegExp(`${movieInfo.movieName}`));
    expect(linkElement).toBeInTheDocument();

    linkElement = screen.getByText(new RegExp(`${movieInfo.releaseYear}`));
    expect(linkElement).toBeInTheDocument();

    linkElement = screen.getByText(new RegExp(`${movieInfo.relevantGenres.join(', ')}`));
    expect(linkElement).toBeInTheDocument();
});

test('Test that after a click event on a component calls "onClick" callback and passes correct movie name in arguments', () => {
    render(<MovieTile movieInfo={movieInfo} onClick={onClick}/>);
    fireEvent.click(screen.getByAltText(new RegExp(`${movieInfo.movieName}`)));

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith(movieInfo.movieName);
});