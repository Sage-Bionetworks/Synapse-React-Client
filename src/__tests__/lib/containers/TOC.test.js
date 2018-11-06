import React from 'react'
import {configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import MarkdownSynapse from '../../../lib/containers/MarkdownSynapse'

configure({ adapter: new Adapter() });

describe ('renders without crashing', () => {
    let SynapseClient
    
    beforeAll( () => {
        SynapseClient = require('../../../lib/utils/SynapseClient')
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
        // peculiar behavior below where only usng .render() works
        expect(tree.render().find("a.link.toc-indent1")).toHaveLength(1)
        expect(tree.render().find("h1#SRC-header-1")).toHaveLength(1)
    })   

    it ('renders a table of contents with a non-toc-header header', async () => {
       SynapseClient.getEntityWiki = jest.fn(() => Promise.resolve({markdown: "${toc}\n#Heading1\n##! Don't show me!"}))
        const tree = await mount(
            <MarkdownSynapse
                token=""
                synapseId={""}
                wikiId={""}
            />
        )   
        expect(tree.find("div.markdown")).toHaveLength(1)
        expect(tree.render().find("h2")).toHaveLength(1)
        expect(tree.render().find("h2#SRC-header-2")).toHaveLength(0)
    })   
})