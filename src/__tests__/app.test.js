import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders home component by default', () => {
    expect(screen.getByText(/WE LOVE MATH/)).toBeInTheDocument();
  });

  test('renders nav component', () => {
    expect(screen.getByText(/Quote/)).toBeInTheDocument();
  });
  test('renders only the home page', () => {
    expect(screen.queryByText(/Quote of the day/)).not.toBeInTheDocument();
  });
});
