import React from 'react';
import {configure, mount} from 'enzyme'
import Login from '../../../lib/containers/demo_components/Login';

describe("test ", () => {
  it('renders correctly', () => {
    const tree = mount(<Login />)
  });
})