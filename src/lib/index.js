import * as SynapseClient from './utils/SynapseClient';
import * as SynapseConstants from './utils/SynapseConstants';
import MarkdownSynapse from './containers/MarkdownSynapse'
import QueryWrapper from './containers/QueryWrapper'
import StaticQueryWrapper from './containers/StaticQueryWrapper'
import {Facets} from './containers/Facets';
import StackedRowHomebrew from './containers/StackedRowHomebrew';
import SynapseTable from './containers/SynapseTable'

import './style/Portal.css'

let SynapseComponents = {
    Markdown: MarkdownSynapse,
    QueryWrapper,
    Facets,
    StackedRowHomebrew,
    SynapseTable,
    StaticQueryWrapper
}

export { SynapseClient, SynapseConstants, SynapseComponents };