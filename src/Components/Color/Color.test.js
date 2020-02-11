import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('Color', () => {
 
it('should match the Color snapshot', () => {
    let wrapper = shallow(<Color />);
    expect(wrapper).toMatchSnapshot();
  })
})