import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import SearchForm from './SearchForm';

const initialSearchString = 'Mama was washing a frame';
const onSearch = jest.fn();

test('Test that component renders an input with the value equal to initial value passed in props', () => {
    render(<SearchForm initialSearchString={initialSearchString} onSearch={onSearch}/>);

    const linkElement = screen.getByDisplayValue(new RegExp(`${initialSearchString}`));
    expect(linkElement).toBeInTheDocument();
});

test('Test that after typing to the input and a "click" event on the Submit button, the "onChange" prop is called with proper value', () => {
    render(<SearchForm initialSearchString={''} onSearch={onSearch}/>);
    act(() => {
        userEvent.type(screen.getByRole("textbox"), "JavaScript");
    });
    fireEvent.click(screen.getByRole("button"));

    expect(onSearch).toHaveBeenCalledTimes(1);
    expect(onSearch).toHaveBeenCalledWith("JavaScript");
});

test('Test that after typing to the input and pressing Enter key, the "onChange" prop is called with proper value', () => {
    render(<SearchForm initialSearchString={''} onSearch={onSearch}/>);
    act(() => {
        userEvent.type(screen.getByRole("textbox"), "JavaScript{enter}");
    });

    expect(onSearch).toHaveBeenCalledTimes(1);
    expect(onSearch).toHaveBeenCalledWith("JavaScript");
});