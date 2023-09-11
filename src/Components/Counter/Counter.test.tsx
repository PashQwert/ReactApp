import React from 'react';
import { render, screen, fireEvent  } from '@testing-library/react';
import Counter from './Counter';

const initialCounterValue = 123;

test('Test that component renders initial value provided in props', () => {
    render(<Counter count={initialCounterValue}/>);
    
    const linkElement = screen.getByText(new RegExp(`Count: ${initialCounterValue}`));
    expect(linkElement).toBeInTheDocument();
});

test('Test that a click event on "increment" button increments the displayed value', () => {
    render(<Counter count={initialCounterValue}/>);
    fireEvent.click(screen.getByText("Increment"));

    const linkElement = screen.getByText(new RegExp(`Count: ${initialCounterValue + 1}`));
    expect(linkElement).toBeInTheDocument();
});

test('Test that a click event on "decrement" button decrements the displayed value', () => {
    render(<Counter count={initialCounterValue}/>);
    fireEvent.click(screen.getByText("Decriment"));
    
    const linkElement = screen.getByText(new RegExp(`Count: ${initialCounterValue - 1}`));
    expect(linkElement).toBeInTheDocument();
});