import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../../../lib/containers/Login';

describe("test ", () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Login />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})