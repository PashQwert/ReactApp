import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  //screen.debug();
  const linkElement = screen.getByText(/Count: 10/i);
  expect(linkElement).toBeInTheDocument();
});
