import React from 'react';
import renderer from 'react-test-renderer';
import Login from 'lib/containers/Login';

it('renders correctly', () => {
  const tree = renderer
    .create(<Login />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});