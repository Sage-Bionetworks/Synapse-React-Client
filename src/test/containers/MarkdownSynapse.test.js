import React from 'react';
import ReactDOM from 'react-dom';
import MarkdownSynapse from 'lib/containers/MarkdownSynapse';

it('renders without crashing', async () => {
  const div = document.createElement('div');
  await ReactDOM.render(<div>
      <MarkdownSynapse
        token={""}
        markdown={"heading"}
        hasSynapseResources={false}
        />
      </div>, div);
});
