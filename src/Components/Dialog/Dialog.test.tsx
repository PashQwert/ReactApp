import React from 'react';
import { render, screen, fireEvent  } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Dialog from './Dialog';

const onClose = jest.fn();
const title = "The title";
const children = "The children";

test('Test that component renders Title passed in props', () => {
    render(<Dialog title={title} onClose={onClose}/>);
        
    fireEvent.click(screen.getByRole("button"));
    
    const linkElement = screen.getByText(new RegExp(`${title}`));
    expect(linkElement).toBeInTheDocument();
});

test('Test that component renders Title passed in props', () => {
    render(<Dialog title={title} onClose={onClose}>{children}</Dialog>);
        
    fireEvent.click(screen.getByRole("button"));
    
    const linkElement = screen.getByText(new RegExp(`${children}`));
    expect(linkElement).toBeInTheDocument();
});