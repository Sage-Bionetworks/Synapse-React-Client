import React from 'react';
import {configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import MarkdownSynapse from '../../../../lib/containers/MarkdownSynapse';
import Bookmark from '../../../../lib/containers/widgets/Bookmarks'

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const tree = mount(
      <MarkdownSynapse
        token={""}
        markdown={""}
        hasSynapseResources={false}
        />)
  expect(tree.find(MarkdownSynapse)).toHaveLength(1)
});

describe('renders widgets ', () => {
  let SynapseClient

  beforeAll( () =>  { 
      SynapseClient = require('../../../../lib/utils/SynapseClient')
      SynapseClient.getWikiAttachmentsFromEntity = jest.fn(() => Promise.resolve([""]))
    }
  )
  
  it('renders a synapse image', async () => {
    SynapseClient.getEntityWiki = jest.fn(() => Promise.resolve({markdown: "${image?synapseId=syn7809125&align=None&responsive=true}"}))
  
    const wrapper = await mount(
        <MarkdownSynapse
        token={""}
        synapseId={""}
        wikiId={""}
        hasSynapseResources={true}/>
    );
  
    expect(wrapper.html()).toEqual(`<div class=\"markdown\"><span><span><p></p></span><img alt=\"synapse\" class=\"img-fluid\" src=\"\" style=\"float: none;\"><span><p></p>
</span></span><div></div></div>`)
    expect(wrapper.find(Bookmark)).toHaveLength(0)
  });

  
 it('renders a synapse reference', async () => {
   SynapseClient.getEntityWiki = jest.fn(() => Promise.resolve({markdown: "${reference?params}"}))
 
   const wrapper = await mount(
       <MarkdownSynapse
       token={""}
       synapseId={""}
       wikiId={""}
       hasSynapseResources={true}/>
   );

   expect(wrapper.html()).toEqual("<div class=\"markdown\"><span><span><p><a href=\"\" id=\"ref1\">[1]</a></p>\n</span></span><div></div></div>")
 });
  
})