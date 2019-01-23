import * as React from 'react'
import { mount } from 'enzyme'
import MarkdownSynapse from '../../../lib/containers/MarkdownSynapse'
import Bookmarks from '../../../lib/containers/widgets/Bookmarks'

it('renders without crashing', () => {
  const tree = mount(
    <MarkdownSynapse
      token={''}
      markdown={''}
      hasSynapseResources={false}
    />
  )
  expect(tree.find(MarkdownSynapse)).toHaveLength(1)
})

describe('renders widgets ', () => {
  let SynapseClient:any

  beforeAll(() =>  {
    SynapseClient = require('../../../lib/utils/SynapseClient')
    SynapseClient.getWikiAttachmentsFromEntity = jest.fn(() => Promise.resolve(['']))
  })

  it('renders a synapse image', async () => {
    SynapseClient.getEntityWiki = jest.fn(() =>
      Promise.resolve({
        markdown: '${image?synapseId=syn7809125&align=None&responsive=true}'
      })
    )

    const wrapper = await mount(
        <MarkdownSynapse
          token={''}
          ownerId={''}
          wikiId={''}
          hasSynapseResources={true}
        />
    )

    // tslint:disable-next-line
    expect(wrapper.html()).toEqual(`<div class=\"markdown\"><span><span><p></p></span><img alt=\"synapse\" class=\"img-fluid\" src=\"\" style=\"float: none;\"><span><p></p>
</span></span><div></div></div>`)
    // tslint:disable-next-line
    expect(wrapper.find(Bookmarks)).toHaveLength(0)
  })

  it('renders a synapse reference', async () => {
    // note- a reference is the anchor tag inside the text that links to the bookmark down below,
    // its an inline link
    SynapseClient.getEntityWiki = jest.fn(() => Promise.resolve({ markdown: '${reference?params}' }))

    const wrapper = await mount(
       <MarkdownSynapse
        token={''}
        ownerId={''}
        wikiId={''}
        hasSynapseResources={true}
       />
   )
   // ignore max line length, this is in unavoidable
   // tslint:disable-next-line
    expect(wrapper.html()).toEqual('<div class="markdown"><span><span><p><a href="" id="ref1">[1]</a></p>\n</span></span><div></div></div>')
  })

  it('renders a bookmark', async () => {
    // note - a bookmark is a corresponding citation for an inline reference, it provides a URL for
    // the reference.
    const wrapper = await mount(
       <MarkdownSynapse
        token={''}
        ownerId={''}
        wikiId={''}
        markdown={'text ${reference?inlineWidget=true&text=google%2Ecom}'}
        hasSynapseResources={false}
       />
   )

    expect(wrapper.find('a#bookmark0')).toBeTruthy()
  })

})
