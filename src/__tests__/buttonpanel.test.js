import React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonPanel from '../components/ButtonPanel';

const clickHandler = () => ({ total: '', next: '', operation: '' });

describe('ButtonPanel', () => {
  beforeEach(() => {
    render(<ButtonPanel clickHandler={clickHandler} />);
  });

  test('renders ButtonPanel correctly', () => {
    expect(screen.getByText(/AC/)).toBeInTheDocument();
  });

  test('renders only the ButtonPanel component', () => {
    expect(screen.queryByText(/Quote of the day/)).not.toBeInTheDocument();
  });
});
