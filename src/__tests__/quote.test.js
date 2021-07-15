import React from 'react';
import { render, screen } from '@testing-library/react';
import Quote from '../components/Quote';

describe('Quote', () => {
  beforeEach(() => {
    render(<Quote />);
  });

  test('renders Quote page correctly', () => {
    expect(screen.getByText(/Quote of the day/)).toBeInTheDocument();
  });

  test('renders only the Quote component', () => {
    expect(screen.queryByText(/We Love Math/)).not.toBeInTheDocument();
  });
});
