import React from 'react';

import { shallow } from 'enzyme';
import ButtonPanel from '../components/ButtonPanel';

const clickHandler = () => ({ total: '', next: '', operation: '' });

describe('ButtonPanel component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ButtonPanel clickHandler={clickHandler} />);
  });

  it('contains class group', () => {
    expect(wrapper.find('.group')).toBeTruthy();
  });

  it('contains the Button component', () => {
    expect(wrapper.find('Button')).toBeTruthy();
  });
});
