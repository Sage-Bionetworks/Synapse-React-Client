import React from 'react'
import {configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import MarkdownSynapse from 'lib/containers/MarkdownSynapse'

configure({ adapter: new Adapter() });

describe ('renders without crashing', () => {
    let SynapseClient
    
    beforeAll( () => {
        SynapseClient = require('lib/utils/SynapseClient')
        SynapseClient.getWikiAttachmentsFromEntity = jest.fn(() => Promise.resolve([""]))
        }
    )

    it ('renders a table of contents without crashing', async () => {
       SynapseClient.getEntityWiki = jest.fn(() => Promise.resolve({markdown: "${toc}\n#Heading1"}))
        const tree = await mount(
            <MarkdownSynapse
                token=""
                synapseId={""}
                wikiId={""}
            />
        )   
        expect(tree.find("div.markdown")).toHaveLength(1)
    })   
})