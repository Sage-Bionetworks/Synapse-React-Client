import{a as o}from"./CardContainerLogic.5169d3d4.js";import{j as e}from"./jsx-runtime.36c99582.js";import"./index.7b571c3f.js";import"./index.7dc20356.js";import"./iframe.67c9a843.js";import"./Button.4aa3a811.js";import"./index.57d09176.js";import"./withStyles.0fa6dc3f.js";import"./utils.0ebf16b5.js";import"./Alert.e200e4c1.js";import"./index.35ce73ec.js";import"./isArray.919b23ad.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.afc4513f.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.b73f5312.js";import"./use-deep-compare-effect.esm.5338fb7a.js";import"./uniq.29c95b3b.js";import"./_baseSlice.50189bc5.js";import"./toInteger.32e560ec.js";import"./isSymbol.aedffc3c.js";import"./_cacheHas.4292b1e4.js";import"./without.e37dd220.js";import"./uniqueId.4c721b80.js";import"./_Set.a179c6b8.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.03a29f5a.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.18fba2a3.js";import"./Tooltip.687fac3a.js";import"./createSvgIcon.68552f98.js";import"./makeStyles.590b227a.js";import"./InfoOutlined.3047c16b.js";import"./FacetNav.bd0737fc.js";import"./queryUtils.2ed4cdea.js";import"./useInfiniteQuery.84777ede.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.414171f8.js";import"./_baseClone.3e8cf786.js";import"./_getTag.9bfe63ce.js";import"./NoSearchResults.b94b325f.js";import"./NoData.eb78382d.js";import"./ElementWithTooltip.49b24673.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.03357e28.js";import"./Modal.f1ce3d69.js";import"./useWaitForDOMRef.8b5dbd8c.js";import"./inheritsLoose.a7020c7f.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.fffe465a.js";import"./isRequiredForA11y.20ed4857.js";import"./useEntity.bd3ff298.js";import"./useMutation.de119889.js";import"./pick.c95a2825.js";import"./Checkbox.5ca6e0a5.js";import"./RadioGroup.2a2f2220.js";import"./moment.a565bb48.js";import"./RangeSlider.300f4c78.js";import"./factory.6e9d16d0.js";import"./react-sizeme.d406ca6d.js";import"./Skeleton.8b8b9138.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.09178111.js";import"./Typography.fbe70ffe.js";import"./Close.d41787fd.js";import"./react-select.esm.b9b85b93.js";import"./Select-54ac8379.esm.f1c2f3ec.js";import"./CustomSelectWidget.d87f2325.js";import"./index.browser.e7885fe8.js";import"./WarningModal.b3ead7ed.js";import"./react-intersection-observer.esm.12b7f44c.js";import"./UserCard.07bb7dc1.js";import"./IconCopy.59a8cb20.js";import"./SkeletonTable.f0574313.js";import"./times.869ca9ec.js";import"./ToastMessage.ac6c5fb4.js";import"./FullWidthAlert.cabbd8c8.js";import"./Overlay.4fd8dcb1.js";import"./DateFormatter.69806090.js";import"./core.esm.50338a5d.js";import"./isEmpty.db49d2f4.js";import"./isEqual.4360564f.js";import"./union.c18aa702.js";import"./isString.d09d652f.js";import"./useGetDownloadListStatistics.4dbe2d04.js";import"./QueryCount.ed108438.js";import"./useGetAccessRequirement.9d56fa92.js";import"./ManagedACTAccessRequirementStatus.84d524a0.js";import"./FileUpload.bbebf8b0.js";import"./UserSearchBox.91c96416.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.0c31a016.js";import"./EntityLink.aa98aee1.js";import"./SynapseVideo.be891c0f.js";import"./IconList.09b17147.js";import"./UserCardList.d69f79e0.js";const io={parameters:{storySource:{source:`import React from 'react'
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
