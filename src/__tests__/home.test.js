import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

describe('Home', () => {
  beforeEach(() => {
    render(<Home />);
  });

  test('renders Home correctly', () => {
    expect(screen.getByText(/WE LOVE MATH/)).toBeInTheDocument();
  });

  test('renders only the home page', () => {
    expect(screen.queryByText(/Quote of the day/)).not.toBeInTheDocument();
  });
});
