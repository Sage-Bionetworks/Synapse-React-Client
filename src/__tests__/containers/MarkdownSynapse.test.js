import React from 'react';
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer'; // ES6
import MarkdownSynapse from 'lib/containers/MarkdownSynapse';
import SynapseImage from 'lib/containers/widgets/SynapseImage'
import Reference from 'lib/containers/widgets/Reference'
import Bookmark from 'lib/containers/widgets/Bookmarks'

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const tree = renderer
    .create(
      <MarkdownSynapse
        token={""}
        markdown={""}
        hasSynapseResources={false}
        />).toJSON()
  expect(tree).toMatchSnapshot()
});

describe('renders widgets ', () => {
  let SynapseClient

  beforeAll( () =>  { 
      SynapseClient = require('lib/utils/SynapseClient')
      SynapseClient.getWikiAttachmentsFromEntity = jest.fn(() => Promise.resolve([""]))
    }
  )
  
  it('renders a synapse image', async () => {
    SynapseClient.getEntityWiki = jest.fn(() => Promise.resolve({markdown: "${image?synapseId=syn7809125&align=None&responsive=true}"}))
  
    const wrapper = await shallow(
        <MarkdownSynapse
        token={""}
        synapseId={""}
        wikiId={""}
        hasSynapseResources={true}/>
    );
  
    expect(wrapper.find(SynapseImage)).toHaveLength(1)
    expect(wrapper.find(Bookmark)).toHaveLength(0)
  });

  
 it('renders a synapse reference', async () => {
   SynapseClient.getEntityWiki = jest.fn(() => Promise.resolve({markdown: "${reference?params}"}))
 
   const wrapper = await shallow(
       <MarkdownSynapse
       token={""}
       synapseId={""}
       wikiId={""}
       hasSynapseResources={true}/>
   );
   expect(wrapper.find(Reference)).toHaveLength(1)
 });
  
})