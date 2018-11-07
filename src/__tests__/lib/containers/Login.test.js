import React from 'react';
import {configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import Login from '../../../lib/containers/Login';

configure({ adapter: new Adapter() });


describe("test ", () => {
  it('renders correctly', () => {
    const tree = mount(<Login />)
  });
})