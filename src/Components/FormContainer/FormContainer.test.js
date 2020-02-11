import React from 'react';
import { shallow } from 'enzyme';
import FormContainer from './FormContainer';

describe('FormContainer', () => {
 
it('should match the FormContainer snapshot', () => {
    let wrapper = shallow(<FormContainer />);
    expect(wrapper).toMatchSnapshot();
  })
})