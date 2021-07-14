import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';
// import { shallow } from 'enzyme';
// describe('renders correctly', () => {
//   let wrapper;
//
//   beforeEach(() => {
//     wrapper = shallow(<App />);
//   });
//
//   it('Contains the Navbar component', () => {
//     expect(wrapper.find('Navbar')).toBeTruthy();
//   });
//
//   it('Contains the Display component', () => {
//     expect(wrapper.find('Display')).toBeTruthy();
//   });
//
//   it('Contains the ButtonPanel component', () => {
//     expect(wrapper.find('ButtonPanel')).toBeTruthy();
//   });
// });

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
