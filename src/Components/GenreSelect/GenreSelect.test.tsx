import React from 'react';
import { render, screen, fireEvent  } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import GenreSelect from './GenreSelect';

const genres = ['genre1', 'genre2', 'genre3'];
const onSelect = jest.fn();

test('Test that component renders all genres passed in props', () => {
    render(<GenreSelect genres={genres}/>);
    
    genres.forEach(x => {        
        const linkElement = screen.getByText(new RegExp(`${x}`));
        expect(linkElement).toBeInTheDocument();
    });
});

test('Test that component highlights a selected genre passed in props', () => {
    const selectedGenre = genres[1];
    const { container } = render(<GenreSelect genres={genres} selectedGenre={selectedGenre}/>);

    const selectedItem = screen.getByText(selectedGenre);
    const highlights = container.getElementsByClassName('selectedItem')[0]

    expect(highlights.parentElement).toEqual(selectedItem);
});

test('Test that after a click event on a genre button component calls "onChange" callback and passes correct genre in arguments', () => {
    render(<GenreSelect genres={genres} onSelect={onSelect}/>);
    const selectedItem = genres[1];
    fireEvent.click(screen.getByText(selectedItem));

    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(onSelect).toHaveBeenCalledWith(selectedItem);
});