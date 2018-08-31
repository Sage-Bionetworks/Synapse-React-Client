import React from 'react';
import renderer from 'react-test-renderer'
import MarkdownSynapse from 'lib/containers/MarkdownSynapse';

it('renders without crashing', () => {
  const tree = renderer
    .create(
      <MarkdownSynapse
        token={""}
        markdown={"heading"}
        hasSynapseResources={false}
        />).toJSON()
  expect(tree).toMatchSnapshot()
});
