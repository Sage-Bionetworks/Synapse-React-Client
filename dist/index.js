import * as SynapseClient from './utils/SynapseClient';
import * as SynapseConstants from './utils/SynapseConstants';
import MarkdownSynapse from './containers/MarkdownSynapse';
import React from 'react';

var SynapseComponents = {
    Markdown: MarkdownSynapse
};

export { SynapseClient, SynapseConstants, SynapseComponents };