import React from 'react';
import ReactDOM from 'react-dom';
import MarkdownSynapse from 'lib/containers/MarkdownSynapse';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <MarkdownSynapse
        token={""}
        markdown={"heading"}
        hasSynapseResources={false}
        />, div);
});
