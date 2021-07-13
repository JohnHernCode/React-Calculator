import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

describe('Home Component', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Home />);

    expect(tree).toMatchSnapshot();
  });
});
