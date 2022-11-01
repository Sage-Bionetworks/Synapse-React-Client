import{a as o}from"./CardContainerLogic.4d519081.js";import{j as e}from"./jsx-runtime.50ef6bf8.js";import"./index.0305e6df.js";import"./index.c6db38ab.js";import"./iframe.ac4a915a.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.d599da1d.js";import"./index.57d09176.js";import"./withStyles.99d8f96c.js";import"./utils.7e5b3029.js";import"./Alert.2486ab7d.js";import"./createWithBsPrefix.62795558.js";import"./index.35ce73ec.js";import"./isArray.20493a87.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.2cd0146b.js";import"./sqlFunctions.2c22e579.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.eb2d96bd.js";import"./useGetInfoFromIds.0758b88c.js";import"./use-deep-compare-effect.esm.dee423e7.js";import"./uniq.ac1f7b2a.js";import"./_baseSlice.50189bc5.js";import"./toInteger.5323f36a.js";import"./isSymbol.43adfbf0.js";import"./_cacheHas.bef0b8b1.js";import"./without.6e453101.js";import"./uniqueId.04211ad5.js";import"./_Set.c7d657ad.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./Tooltip.ffc53860.js";import"./createSvgIcon.691b588b.js";import"./makeStyles.2e7d9394.js";import"./FacetNav.be08a285.js";import"./queryUtils.9bfa8c5c.js";import"./useInfiniteQuery.8f25cfcb.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.2ec5ffda.js";import"./_baseClone.b265ca04.js";import"./_getTag.78af8186.js";import"./NoSearchResults.4be92c52.js";import"./NoData.cee3d520.js";import"./unCamelCase.07e38083.js";import"./useEntity.825558b4.js";import"./useMutation.e4e41006.js";import"./pick.df12bdd0.js";import"./isEqual.26539cb1.js";import"./ElementWithTooltip.02488b67.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.c0856b54.js";import"./InfoOutlined.4d7b5d30.js";import"./Dropdown.d8a66370.js";import"./usePrevious.4453b585.js";import"./contains.35b0f50b.js";import"./usePopperMarginModifiers.0f1630d3.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.b896bf6c.js";import"./RadioGroup.5b0fe626.js";import"./moment.a565bb48.js";import"./RangeSlider.9a6983f7.js";import"./factory.3845e63e.js";import"./react-sizeme.906d5350.js";import"./Skeleton.bfc72f16.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.afd7cae5.js";import"./Typography.eb1a210b.js";import"./Modal.dba7130f.js";import"./inheritsLoose.7754793f.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.82d5d36b.js";import"./SelectionCriteriaPill.576251de.js";import"./Close.6c2ab52a.js";import"./react-select.esm.2ad3efbc.js";import"./Select-54ac8379.esm.cd4106ec.js";import"./CustomSelectWidget.e6087d02.js";import"./index.browser.a94185b6.js";import"./UserCard.0ed6abec.js";import"./IconCopy.63286479.js";import"./SkeletonTable.790b52ac.js";import"./times.87ad9c1c.js";import"./ToastMessage.5f57197e.js";import"./FullWidthAlert.039f66d3.js";import"./Overlay.d0e3e40e.js";import"./WarningModal.eb3ef3b7.js";import"./react-intersection-observer.esm.de8f511b.js";import"./DateFormatter.6c956e20.js";import"./EntityIcon.157b129d.js";import"./core.esm.7986be98.js";import"./isEmpty.34a03efa.js";import"./union.f2c1180e.js";import"./isString.08d15b5a.js";import"./useGetDownloadListStatistics.785df787.js";import"./QueryCount.15194b8b.js";import"./useGetAccessRequirement.4bae3e1f.js";import"./ManagedACTAccessRequirementStatus.08f0239f.js";import"./FileUpload.33455952.js";import"./UserSearchBox.17873701.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.6daf2605.js";import"./EntityLink.c969b58a.js";import"./SynapseVideo.14a786a4.js";import"./IconList.4ded90e0.js";import"./UserCardList.6e4e630f.js";const yo={parameters:{storySource:{source:`import React from 'react'
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
