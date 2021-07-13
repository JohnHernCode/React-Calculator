import React from 'react';

import { shallow } from 'enzyme';
import App from '../components/App';

describe('renders correctly', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('Contains the Navbar component', () => {
    expect(wrapper.find('Navbar')).toBeTruthy();
  });

  it('Contains the Display component', () => {
    expect(wrapper.find('Display')).toBeTruthy();
  });

  it('Contains the ButtonPanel component', () => {
    expect(wrapper.find('ButtonPanel')).toBeTruthy();
  });
});
