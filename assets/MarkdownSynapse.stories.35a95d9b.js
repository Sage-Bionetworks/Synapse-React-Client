import{e as o}from"./AccessRequirementList.41da6f0a.js";import{j as e}from"./jsx-runtime.b9dbe3f2.js";import"./index.5da0c2fe.js";import"./index.1d295946.js";import"./iframe.daa7e99b.js";import"./SynapseConstants.aef18750.js";import"./Button.5e8fef04.js";import"./styled.b8523d56.js";import"./Tooltip.48a3285f.js";import"./SvgIcon.07fafc9f.js";import"./useTheme.0510b97a.js";import"./TransitionGroupContext.550f3593.js";import"./FullWidthAlert.4c795642.js";import"./hook.8a461b2d.js";import"./createWithBsPrefix.e49426e0.js";import"./divWithClassName.39a68f1e.js";import"./index.35ce73ec.js";import"./Typography.67fe2a50.js";import"./Fade.79c18b91.js";import"./isArray.cd664950.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.e161b9ac.js";import"./IconButton.92911f6e.js";import"./ButtonBase.a93e0872.js";import"./emotion-react.browser.esm.c079a2eb.js";import"./Link.da3e8d7d.js";import"./Button.7c5736c7.js";import"./useGetInfoFromIds.df5d54b4.js";import"./use-deep-compare-effect.esm.29b168ec.js";import"./uniq.cebce7b4.js";import"./_baseSlice.50189bc5.js";import"./toInteger.ac9e6667.js";import"./isSymbol.0dd8f9e4.js";import"./_cacheHas.59c4bb78.js";import"./without.42fc4fba.js";import"./toString.e4b44ed1.js";import"./_Set.469d2b08.js";import"./_setToArray.a82100c8.js";import"./queryKeys.f96c2872.js";import"./LoadingScreen.a4b87421.js";import"./Modal.d5b47340.js";import"./contains.c92a1cab.js";import"./inheritsLoose.68af5c28.js";import"./usePrevious.3e9a9e11.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.a0e6e40c.js";import"./UserCard.4bb4c375.js";import"./IconCopy.e1e77b1a.js";import"./SkeletonTable.4e7a5f80.js";import"./times.0d4bfec0.js";import"./Skeleton.e124e8e4.js";import"./ToastMessage.3861395a.js";import"./uniqueId.dbc9074b.js";import"./Overlay.b50e2181.js";import"./usePopperMarginModifiers.df9835fb.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.a3a9e472.js";import"./useInfiniteQuery.d3f40dc1.js";import"./DateFormatter.d642ffb3.js";import"./dayjs.min.299ad3a1.js";import"./utc.fbb5bd49.js";import"./EntityIcon.2ca31f4b.js";import"./core.esm.e765a482.js";import"./pick.c984aa8c.js";import"./_baseClone.ef57de12.js";import"./isEmpty.d81e9f95.js";import"./isEqual.e5ecbe9a.js";import"./index.browser.877b1983.js";import"./union.70e21edc.js";import"./CustomSelectWidget.428424ed.js";import"./Select-54ac8379.esm.708df6a0.js";import"./isString.7debb151.js";import"./factory.6a31a56b.js";import"./sqlFunctions.32cb4e2b.js";import"./QueryFilter.89fbadd0.js";import"./useEntity.bc266fa3.js";import"./useMutation.17976629.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.3a80d784.js";import"./queryUtils.5d78ee18.js";import"./cloneDeep.18f0269c.js";import"./NoSearchResults.cf2c2af3.js";import"./NoData.f256ee32.js";import"./unCamelCase.07e38083.js";import"./ColumnType.0fc7f115.js";import"./useGetQueryResultBundle.c6cba393.js";import"./ElementWithTooltip.974896e1.js";import"./Dropdown.d53923ab.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.b6409fc8.js";import"./RadioGroup.798ea8f4.js";import"./RangeSlider.7b6de83e.js";import"./react-sizeme.61f4b5d1.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.8cea27a1.js";import"./Close.51c782db.js";import"./relativeTime.a1b54a10.js";import"./useDownloadList.bf5786ba.js";import"./QueryCount.e531dd90.js";import"./react-select.esm.a57c6cc0.js";import"./IconList.cb121091.js";import"./UserCardList.a1e65843.js";import"./useAccessRequirements.04427f1b.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.5c37e200.js";import"./UserSearchBox.c2dd0710.js";import"./UserOrTeamBadge.b05f03b8.js";import"./EntityLink.c18672b0.js";import"./ErrorChip.b2a17b81.js";import"./SynapseVideo.9513cdaa.js";const Mo={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import MarkdownSynapse from './MarkdownSynapse'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Markdown/MarkdownSynapse',
  component: MarkdownSynapse,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof MarkdownSynapse>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MarkdownSynapse> = args => (
  <MarkdownSynapse {...args} />
)

export const HardCodedMarkdown = Template.bind({})
HardCodedMarkdown.args = {
  markdown: '*markdown* given to the **component**',
}

export const WikiPage = Template.bind({})
WikiPage.args = {
  ownerId: 'syn12666371',
  wikiId: '585317',
  loadingSkeletonRowCount: 20,
}

export const ImageDemo = Template.bind({})
ImageDemo.args = {
  ownerId: 'syn18142975',
}

export const ButtonLink = Template.bind({})
ButtonLink.args = {
  markdown: \`Button link demo \\n

\\\${buttonlink?text=Align%20Left&align=left} \\n

\\\${buttonlink?text=Align%20Right&align=right} \\n

\\\${buttonlink?text=Align%20Center&align=center} \\n

\\\${buttonlink?text=Highlight&highlight=true} \\n

Links to synapse: \\n
\\\${buttonlink?text=This%20Button%20Links%20to%20Synapse&url=https://synapse.org/}
  \`,
}

export const ImageBySynID = Template.bind({})
ImageBySynID.args = {
  markdown:
    'Note: you must be signed in to see this image\\n\${image?synapseId=syn36695878}',
}

export const Plot = Template.bind({})
Plot.args = {
  markdown:
    '\${plot?query=select "id"%2C "createdOn" from syn23567477&title=&type=BAR&barmode=GROUP&horizontal=false&showlegend=true}',
}

export const SynapseTable = Template.bind({})
SynapseTable.args = {
  markdown:
    '# Synapse Table\\nModify the markdown control to change the parameters\\n\${synapsetable?query=SELECT %2A FROM syn26302617&showquery=false&tableonly=false}',
}

export const MarkdownProvenanceGraph = Template.bind({})
MarkdownProvenanceGraph.args = {
  markdown:
    '# Provenance Graphs\\nMultiple start nodes\\n\${provenance?entityList=syn12548902%2Csyn33344762&depth=3&displayHeightPx=800&showExpand=false}\\nSpecify the entity version\\n\${provenance?entityList=syn12548902%2Fversion%2F34&depth=1&displayHeightPx=500&showExpand=true}',
}

export const HtmlRenderingTest = Template.bind({})
HtmlRenderingTest.args = {
  ownerId: 'syn5585645',
  wikiId: '493662',
}

export const MarkdownIDUReport = Template.bind({})
MarkdownIDUReport.args = {
  markdown: '\${iduReport?accessRestrictionId=9605700}',
}
`,locationsMap:{"hard-coded-markdown":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"wiki-page":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"image-demo":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"button-link":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"image-by-syn-id":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},plot:{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"synapse-table":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"markdown-provenance-graph":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"html-rendering-test":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"markdown-idu-report":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}}}}},title:"Markdown/MarkdownSynapse",component:o,argTypes:{}},n=t=>e(o,{...t}),r=n.bind({});r.args={markdown:"*markdown* given to the **component**"};const i=n.bind({});i.args={ownerId:"syn12666371",wikiId:"585317",loadingSkeletonRowCount:20};const a=n.bind({});a.args={ownerId:"syn18142975"};const p=n.bind({});p.args={markdown:`Button link demo 


\${buttonlink?text=Align%20Left&align=left} 


\${buttonlink?text=Align%20Right&align=right} 


\${buttonlink?text=Align%20Center&align=center} 


\${buttonlink?text=Highlight&highlight=true} 


Links to synapse: 

\${buttonlink?text=This%20Button%20Links%20to%20Synapse&url=https://synapse.org/}
  `};const s=n.bind({});s.args={markdown:"Note: you must be signed in to see this image\n${image?synapseId=syn36695878}"};const m=n.bind({});m.args={markdown:'${plot?query=select "id"%2C "createdOn" from syn23567477&title=&type=BAR&barmode=GROUP&horizontal=false&showlegend=true}'};const l=n.bind({});l.args={markdown:`# Synapse Table
Modify the markdown control to change the parameters
\${synapsetable?query=SELECT %2A FROM syn26302617&showquery=false&tableonly=false}`};const d=n.bind({});d.args={markdown:`# Provenance Graphs
Multiple start nodes
\${provenance?entityList=syn12548902%2Csyn33344762&depth=3&displayHeightPx=800&showExpand=false}
Specify the entity version
\${provenance?entityList=syn12548902%2Fversion%2F34&depth=1&displayHeightPx=500&showExpand=true}`};const c=n.bind({});c.args={ownerId:"syn5585645",wikiId:"493662"};const y=n.bind({});y.args={markdown:"${iduReport?accessRestrictionId=9605700}"};const xo=["HardCodedMarkdown","WikiPage","ImageDemo","ButtonLink","ImageBySynID","Plot","SynapseTable","MarkdownProvenanceGraph","HtmlRenderingTest","MarkdownIDUReport"];export{p as ButtonLink,r as HardCodedMarkdown,c as HtmlRenderingTest,s as ImageBySynID,a as ImageDemo,y as MarkdownIDUReport,d as MarkdownProvenanceGraph,m as Plot,l as SynapseTable,i as WikiPage,xo as __namedExportsOrder,Mo as default};
