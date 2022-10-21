import{a as o}from"./CardContainerLogic.421e4955.js";import{j as e}from"./jsx-runtime.a232804d.js";import"./index.df4d7189.js";import"./index.ba62157d.js";import"./iframe.10584503.js";import"./Button.6d51f091.js";import"./index.57d09176.js";import"./withStyles.1db4abc8.js";import"./utils.428c4b7a.js";import"./Alert.05377b39.js";import"./index.35ce73ec.js";import"./isArray.a5a56f48.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.885aee5a.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.e6e0a308.js";import"./use-deep-compare-effect.esm.2b5691ed.js";import"./uniq.f95d5498.js";import"./_baseSlice.50189bc5.js";import"./toInteger.99850a56.js";import"./isSymbol.af0f15b0.js";import"./_cacheHas.2f6e173d.js";import"./without.49e70119.js";import"./uniqueId.42db352a.js";import"./_Set.13d8dc83.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.d798df03.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.7d220ad3.js";import"./Tooltip.d38d9e30.js";import"./createSvgIcon.2aaf66cc.js";import"./makeStyles.403aaa55.js";import"./InfoOutlined.d81a19b2.js";import"./ElementWithTooltip.6f5c5d8e.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.026e24f0.js";import"./Modal.487f443a.js";import"./useWaitForDOMRef.b691e8e9.js";import"./inheritsLoose.5977b5ad.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.2b01b6ad.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.f42b17a9.js";import"./queryUtils.9bf0fae4.js";import"./useInfiniteQuery.b7b3231b.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.7282c000.js";import"./_baseClone.1f24ee6e.js";import"./_getTag.c51a4401.js";import"./useEntity.7c42ef40.js";import"./useMutation.4f028f2a.js";import"./pick.aef66a75.js";import"./Checkbox.7ef807c5.js";import"./RadioGroup.cc16eeb1.js";import"./moment.a565bb48.js";import"./RangeSlider.62604c0d.js";import"./factory.6225fee9.js";import"./react-sizeme.aa00de7b.js";import"./Skeleton.e3b72fa9.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.01a40955.js";import"./Typography.9247f57a.js";import"./Close.c83b42bd.js";import"./react-select.esm.67e5da67.js";import"./Select-54ac8379.esm.9dfe37c4.js";import"./CustomSelectWidget.ccbb7c74.js";import"./index.browser.d89fac8c.js";import"./WarningModal.a66e9200.js";import"./react-intersection-observer.esm.d5ed9f38.js";import"./UserCard.7296873e.js";import"./IconCopy.5c84b271.js";import"./SkeletonTable.42b69551.js";import"./times.94f8f16d.js";import"./ToastMessage.b42768ca.js";import"./FullWidthAlert.5abd6e7a.js";import"./Overlay.2735c2ff.js";import"./DateFormatter.ce8cc91c.js";import"./core.esm.a7a5cd9f.js";import"./isEmpty.d7fd8764.js";import"./isEqual.18f214cb.js";import"./union.17ff043e.js";import"./isString.75f8fb7d.js";import"./useGetDownloadListStatistics.b9bf89d3.js";import"./QueryCount.ff63676b.js";import"./NoData.8f77bcd7.js";import"./useGetAccessRequirement.cd2c60ff.js";import"./ManagedACTAccessRequirementStatus.c68c8098.js";import"./FileUpload.af61c181.js";import"./UserSearchBox.7bb509e8.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.f72816e7.js";import"./EntityLink.5231b74d.js";import"./NoSearchResults.9dcecf7f.js";import"./SynapseVideo.7d27d405.js";import"./IconList.5039410a.js";import"./UserCardList.17a2ea75.js";const io={parameters:{storySource:{source:`import React from 'react'
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
