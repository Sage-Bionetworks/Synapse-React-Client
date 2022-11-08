import{a as o}from"./CardContainerLogic.981340ae.js";import{j as e}from"./jsx-runtime.325e7137.js";import"./index.26ad4be5.js";import"./index.1c9fa93d.js";import"./iframe.d25110d4.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.2661b6a1.js";import"./styled.8997d4d9.js";import"./utils.373161e6.js";import"./Alert.29e6a249.js";import"./createWithBsPrefix.2155bd3d.js";import"./index.35ce73ec.js";import"./isArray.ba495a61.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.ac4cf4e1.js";import"./sqlFunctions.f22affb5.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.590cf756.js";import"./useGetInfoFromIds.243ff3e5.js";import"./use-deep-compare-effect.esm.7f3b729f.js";import"./uniq.fe60be5f.js";import"./_baseSlice.50189bc5.js";import"./toInteger.ab08c53c.js";import"./isSymbol.2f09fe74.js";import"./_cacheHas.25c52fb1.js";import"./without.122c9dff.js";import"./uniqueId.69d847eb.js";import"./_Set.a3bc86a9.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.6a2d1b44.js";import"./queryUtils.80dabcf7.js";import"./useInfiniteQuery.afe5b6da.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.c276ab46.js";import"./_baseClone.d743d757.js";import"./_getTag.f336c79f.js";import"./NoSearchResults.87a6bf00.js";import"./NoData.7c6227e7.js";import"./unCamelCase.07e38083.js";import"./useEntity.83926ac9.js";import"./useMutation.f1179de1.js";import"./pick.a485f6d7.js";import"./isEqual.f9f51665.js";import"./ElementWithTooltip.54bff3a8.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.a4adfbe0.js";import"./Tooltip.4e888661.js";import"./createSvgIcon.3ee89089.js";import"./InfoOutlined.191e0556.js";import"./Dropdown.3db05cd7.js";import"./usePrevious.b109b72f.js";import"./contains.26318f11.js";import"./usePopperMarginModifiers.f4fd333a.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.7370b8fc.js";import"./RadioGroup.1d2bcaaa.js";import"./moment.a565bb48.js";import"./RangeSlider.410d56a0.js";import"./factory.3c8144b9.js";import"./react-sizeme.0043ad26.js";import"./Skeleton.4f13b0c1.js";import"./emotion-react.browser.esm.f1e534da.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.96557e43.js";import"./Modal.ffdd738d.js";import"./inheritsLoose.fe1a6d58.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.25f83f82.js";import"./Typography.46ba432f.js";import"./SelectionCriteriaPill.180359c3.js";import"./Close.8a7ab13a.js";import"./react-select.esm.37f0bd31.js";import"./Select-54ac8379.esm.7d4435ca.js";import"./CustomSelectWidget.8aa014ba.js";import"./index.browser.d3f051c7.js";import"./UserCard.c35f579d.js";import"./IconCopy.73ef776f.js";import"./SkeletonTable.a881218b.js";import"./times.a7f9fd68.js";import"./ToastMessage.356d6e1c.js";import"./FullWidthAlert.3575feb9.js";import"./Overlay.4ea04f69.js";import"./WarningModal.d2809462.js";import"./react-intersection-observer.esm.3d7339a4.js";import"./DateFormatter.5ab10a51.js";import"./EntityIcon.214316ad.js";import"./core.esm.4df43147.js";import"./isEmpty.222398e6.js";import"./union.16201132.js";import"./isString.ccf264c0.js";import"./useGetDownloadListStatistics.309757f4.js";import"./QueryCount.761f554c.js";import"./useGetAccessRequirement.2e163384.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.cbea3817.js";import"./UserSearchBox.642720d5.js";import"./UserOrTeamBadge.100cabc8.js";import"./EntityLink.1360d713.js";import"./ButtonBase.4ea13919.js";import"./SynapseVideo.85edd752.js";import"./IconList.1e564fd3.js";import"./UserCardList.0ea15755.js";const yo={parameters:{storySource:{source:`import React from 'react'
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
\${provenance?entityList=syn12548902%2Fversion%2F34&depth=1&displayHeightPx=500&showExpand=true}`};const c=n.bind({});c.args={ownerId:"syn5585645",wikiId:"493662"};const go=["HardCodedMarkdown","WikiPage","ImageDemo","ButtonLink","ImageBySynID","Plot","SynapseTable","MarkdownProvenanceGraph","HtmlRenderingTest"];export{p as ButtonLink,r as HardCodedMarkdown,c as HtmlRenderingTest,s as ImageBySynID,a as ImageDemo,d as MarkdownProvenanceGraph,m as Plot,l as SynapseTable,i as WikiPage,go as __namedExportsOrder,yo as default};
