import{a as o}from"./CardContainerLogic.4c8f9153.js";import{j as e}from"./jsx-runtime.bdebd148.js";import"./index.8be8b52c.js";import"./index.131112ec.js";import"./iframe.92685df1.js";import"./Button.2b7fb582.js";import"./index.57d09176.js";import"./withStyles.d0c35d1c.js";import"./utils.d8861539.js";import"./Alert.2a491573.js";import"./index.35ce73ec.js";import"./isArray.b696739b.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.2b88c9a1.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.54ee0d46.js";import"./use-deep-compare-effect.esm.2dfbd593.js";import"./uniq.056f9926.js";import"./_baseSlice.50189bc5.js";import"./toInteger.22de24ba.js";import"./isSymbol.a301e13d.js";import"./_cacheHas.e0293e09.js";import"./without.204274b0.js";import"./uniqueId.fdacb119.js";import"./_Set.2b9007a5.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.1d29964e.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.a57df8e4.js";import"./Tooltip.3d6e7019.js";import"./createSvgIcon.27bceae9.js";import"./makeStyles.93952b3f.js";import"./InfoOutlined.ca5de4f0.js";import"./FacetNav.1a892f7b.js";import"./queryUtils.99411522.js";import"./useInfiniteQuery.9cb7f5d5.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.aa016315.js";import"./_baseClone.75dc9cad.js";import"./_getTag.e1fa0f07.js";import"./NoSearchResults.8b2199dc.js";import"./NoData.b23bcc77.js";import"./ElementWithTooltip.5b0694b8.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.25528ff3.js";import"./Modal.60354409.js";import"./useWaitForDOMRef.dab4e6d9.js";import"./inheritsLoose.527ef04e.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.0915379d.js";import"./isRequiredForA11y.20ed4857.js";import"./useEntity.77df8c34.js";import"./useMutation.1500ce23.js";import"./pick.a9d9bf93.js";import"./Checkbox.fb42547f.js";import"./RadioGroup.d56761a7.js";import"./moment.a565bb48.js";import"./RangeSlider.fd30989a.js";import"./factory.4a43f97c.js";import"./react-sizeme.05e754cb.js";import"./Skeleton.8bc2d5f2.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.28c0e808.js";import"./Typography.d5646d3f.js";import"./Close.d00cbbee.js";import"./react-select.esm.0625bbd9.js";import"./Select-54ac8379.esm.8753c42f.js";import"./CustomSelectWidget.7ad0e8fd.js";import"./index.browser.db319661.js";import"./WarningModal.0f4a4892.js";import"./react-intersection-observer.esm.08213148.js";import"./UserCard.19c84b60.js";import"./IconCopy.115b585f.js";import"./SkeletonTable.c9ae53bc.js";import"./times.e0d233ea.js";import"./ToastMessage.9511113a.js";import"./FullWidthAlert.25897ee9.js";import"./Overlay.73c56702.js";import"./DateFormatter.27d18384.js";import"./core.esm.ce4666d3.js";import"./isEmpty.35441d6b.js";import"./isEqual.ce2b8e36.js";import"./union.ce29ba8a.js";import"./isString.3ef0182d.js";import"./useGetDownloadListStatistics.798be5b7.js";import"./QueryCount.c365d2a3.js";import"./useGetAccessRequirement.71137bf5.js";import"./ManagedACTAccessRequirementStatus.498e8b29.js";import"./FileUpload.e44301e8.js";import"./UserSearchBox.7e92c17a.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.a9c78c07.js";import"./EntityLink.2f7211ce.js";import"./SynapseVideo.fc658890.js";import"./IconList.7dfc4b7c.js";import"./UserCardList.821fae22.js";const io={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"hard-coded-markdown":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"wiki-page":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"image-demo":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"button-link":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"image-by-syn-id":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},plot:{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"synapse-table":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"markdown-provenance-graph":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"html-rendering-test":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}}}}},title:"Markdown/MarkdownSynapse",component:o,argTypes:{}},n=t=>e(o,{...t}),r=n.bind({});r.args={markdown:"*markdown* given to the **component**"};const i=n.bind({});i.args={ownerId:"syn12666371",wikiId:"585317",loadingSkeletonRowCount:20};const a=n.bind({});a.args={ownerId:"syn18142975"};const p=n.bind({});p.args={markdown:`Button link demo 


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
\${provenance?entityList=syn12548902%2Fversion%2F34&depth=1&displayHeightPx=500&showExpand=true}`};const c=n.bind({});c.args={ownerId:"syn5585645",wikiId:"493662"};const ao=["HardCodedMarkdown","WikiPage","ImageDemo","ButtonLink","ImageBySynID","Plot","SynapseTable","MarkdownProvenanceGraph","HtmlRenderingTest"];export{p as ButtonLink,r as HardCodedMarkdown,c as HtmlRenderingTest,s as ImageBySynID,a as ImageDemo,d as MarkdownProvenanceGraph,m as Plot,l as SynapseTable,i as WikiPage,ao as __namedExportsOrder,io as default};
