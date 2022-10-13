import{a as o}from"./CardContainerLogic.da758215.js";import{j as e}from"./jsx-runtime.4ed473f6.js";import"./index.f0d19726.js";import"./index.02b86482.js";import"./iframe.b5feb82b.js";import"./Button.c5f20cc4.js";import"./index.57d09176.js";import"./withStyles.78cfa842.js";import"./utils.75253d0f.js";import"./Alert.a88bb07f.js";import"./index.35ce73ec.js";import"./isArray.1c017e06.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.d67caae4.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.38c666e1.js";import"./use-deep-compare-effect.esm.6d2ce1a1.js";import"./uniq.9de4015f.js";import"./_baseSlice.50189bc5.js";import"./toInteger.7b9ab0b9.js";import"./isSymbol.24e18969.js";import"./_cacheHas.efaa38b2.js";import"./without.27a5177f.js";import"./uniqueId.021a8dc5.js";import"./_Set.daed5fd0.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.f6e82d52.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.8a81e89b.js";import"./Tooltip.eb6aee31.js";import"./createSvgIcon.691ab6d6.js";import"./makeStyles.dc0e46d4.js";import"./InfoOutlined.ab4f4d01.js";import"./ElementWithTooltip.b0001074.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.40037d76.js";import"./Modal.9b653448.js";import"./useWaitForDOMRef.8efcf25e.js";import"./inheritsLoose.770f8727.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.a69073a2.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.e19b8b94.js";import"./queryUtils.e30d5f04.js";import"./useInfiniteQuery.4e1afba3.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.b72e9c73.js";import"./_baseClone.9b5f1ba9.js";import"./_getTag.fae99e50.js";import"./useEntity.22931e79.js";import"./useMutation.fce6b629.js";import"./pick.5b898932.js";import"./Checkbox.03065006.js";import"./RadioGroup.4063cb90.js";import"./moment.a565bb48.js";import"./RangeSlider.a961b08b.js";import"./factory.4c95ade6.js";import"./react-sizeme.855188a3.js";import"./Skeleton.1c1dc171.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.a8097300.js";import"./Typography.742205fe.js";import"./Close.d121cd8d.js";import"./react-select.esm.29ffe28c.js";import"./Select-54ac8379.esm.783ef3ce.js";import"./CustomSelectWidget.df3cace7.js";import"./index.browser.3f673f01.js";import"./WarningModal.2decb7b9.js";import"./react-intersection-observer.esm.2f02f02c.js";import"./UserCard.62605ce0.js";import"./IconCopy.536ed2bb.js";import"./SkeletonTable.09b1c379.js";import"./times.c42e571b.js";import"./ToastMessage.576eb4d8.js";import"./FullWidthAlert.2db361a7.js";import"./Overlay.eafb065e.js";import"./DateFormatter.f67e8fd7.js";import"./core.esm.18dd4a62.js";import"./isEmpty.56410ed1.js";import"./isEqual.3c63a371.js";import"./union.97ae755f.js";import"./isString.c58b182a.js";import"./useGetDownloadListStatistics.e88301d5.js";import"./QueryCount.93ac4b57.js";import"./NoData.f416e565.js";import"./useGetAccessRequirement.939fa1ec.js";import"./ManagedACTAccessRequirementStatus.b9ffa0ec.js";import"./FileUpload.e909bde4.js";import"./UserSearchBox.65acd310.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.7feeccf6.js";import"./EntityLink.cc63f57a.js";import"./NoSearchResults.f7877fe5.js";import"./SynapseVideo.49a47260.js";import"./IconList.9a1ff75a.js";import"./UserCardList.4c2bc9bc.js";const io={parameters:{storySource:{source:`import React from 'react'
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
