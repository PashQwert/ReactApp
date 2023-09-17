import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import SortControl from './SortControl';
import { keyboard } from '@testing-library/user-event/dist/keyboard';

const options = ['Release Date','Title'];
const onChange = jest.fn();

test('Test that component renders an select with the value equal to initial value passed in props', () => {
    render(<SortControl currentSelection={options[0]} onChange ={onChange}/>);

    const linkElement = screen.getByDisplayValue(new RegExp(`${options[0]}`));
    expect(linkElement).toBeInTheDocument();
});

test('Test that after chenged selection, the "onChange" prop is called with proper value', () => {
    render(<SortControl currentSelection={options[0]} onChange ={onChange}/>);
    
    const firstOption = screen.getByDisplayValue(options[0]);
    fireEvent.change(firstOption, { target: { value: options[1] } });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(options[1]);
});