import * as React from 'react'
import { mount } from 'enzyme'
import MarkdownSynapse from '../../../lib/containers/MarkdownSynapse'
import { delay } from '../../../lib/utils/SynapseClient'
import { _TIME_DELAY } from '../../../lib/utils/SynapseConstants'
import { SynapseTestContext } from '../../../mocks/MockSynapseContext'
describe('renders without crashing', () => {
  let SynapseClient: any
  beforeAll(() => {
    SynapseClient = require('../../../lib/utils/SynapseClient')
    SynapseClient.getWikiAttachmentsFromEntity = jest.fn(() =>
      Promise.resolve(['']),
    )
  })
  const mockOwnerId = 'mock_owner_id'
  const mockWikiId = 'mock_wiki_id'

  it('renders a table of contents without crashing', async () => {
    SynapseClient.getEntityWiki = jest.fn(() =>
      Promise.resolve({ markdown: '${toc}\n#Heading1' }),
    )
    const tree = await mount(
      <SynapseTestContext>
        <MarkdownSynapse ownerId={mockOwnerId} wikiId={mockWikiId} />
      </SynapseTestContext>,
    )
    await delay(_TIME_DELAY)
    expect(tree.find('div.markdown')).toHaveLength(1)
    // peculiar behavior below where only usng .render() works
    expect(tree.render().find('a.link.toc-indent1')).toHaveLength(1)
    expect(tree.render().find('h1#SRC-header-1')).toHaveLength(1)
  })

  it('renders a table of contents with a non-toc-header header', async () => {
    SynapseClient.getEntityWiki = jest.fn(() =>
      Promise.resolve({ markdown: "${toc}\n#Heading1\n##! Don't show me!" }),
    )
    const tree = await mount(
      <SynapseTestContext>
        <MarkdownSynapse ownerId={mockOwnerId} wikiId={mockWikiId} />
      </SynapseTestContext>,
    )
    await delay(_TIME_DELAY)
    expect(tree.find('div.markdown')).toHaveLength(1)
    expect(tree.render().find('h2')).toHaveLength(1)
    expect(tree.render().find('h2#SRC-header-2')).toHaveLength(0)
  })
})
