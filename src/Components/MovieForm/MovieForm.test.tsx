import React from 'react';
import { render, screen, fireEvent  } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import MovieForm, { MovieInfo } from './MovieForm';

const onSubmit = jest.fn();
const movieInfo:MovieInfo = {
    title: "Movie name",
    release: "2023-09-07",
    url: "https://posters.ru/1235486.png",
    relevantGenres: ["Comedy"],
    runtime: 125,
    rating: 8.5,
    overview: "A lot of text A lot of text A lot of text A lot of text A lot of text A lot of text A lot of text"
}

test('Test that component renders movie info passed in props', () => {
    render(<MovieForm movieInfo={movieInfo} onSubmint={onSubmit}/>);
    
    let linkElement = screen.getByDisplayValue(new RegExp(`${movieInfo.title}`));
    expect(linkElement).toBeInTheDocument();

    linkElement = screen.getByDisplayValue(new RegExp(`${movieInfo.url}`));
    expect(linkElement).toBeInTheDocument();

    linkElement = screen.getByDisplayValue(new RegExp(`${movieInfo.runtime}`));
    expect(linkElement).toBeInTheDocument();

    linkElement = screen.getByDisplayValue(new RegExp(`${movieInfo.rating}`));
    expect(linkElement).toBeInTheDocument();

    linkElement = screen.getByDisplayValue(new RegExp(`${movieInfo.overview}`));
    expect(linkElement).toBeInTheDocument();

    linkElement = screen.getByDisplayValue(new RegExp(`${movieInfo.release}`));
    expect(linkElement).toBeInTheDocument();

    linkElement = screen.getByDisplayValue(new RegExp(`${movieInfo.relevantGenres.join(', ')}`));
    expect(linkElement).toBeInTheDocument();
});

test('Test that component returns movie input on press submit button', () => {
    render(<MovieForm movieInfo={movieInfo} onSubmint={onSubmit}/>);
        
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));
    
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({        
        title: "Movie name",
        release: "2023-09-07",
        url: "https://posters.ru/1235486.png",
        genre: "Comedy",
        runtime: "125",
        rating: "8.5",
        overview: "A lot of text A lot of text A lot of text A lot of text A lot of text A lot of text A lot of text"
    });
});