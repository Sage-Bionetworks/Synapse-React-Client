import * as SynapseClient from './utils/SynapseClient';
import * as SynapseConstants from './utils/SynapseConstants';
import MarkdownSynapse from './containers/MarkdownSynapse';
import QueryWrapper from './containers/QueryWrapper';
import { Facets } from './containers/Facets';
import StackedRowHomebrew from './containers/StackedRowHomebrew';
import SynapseTable from './containers/SynapseTable';

import './style/Portal.css';

var SynapseComponents = {
    Markdown: MarkdownSynapse,
    QueryWrapper: QueryWrapper,
    Facets: Facets,
    StackedRowHomebrew: StackedRowHomebrew,
    SynapseTable: SynapseTable
};

export { SynapseClient, SynapseConstants, SynapseComponents };