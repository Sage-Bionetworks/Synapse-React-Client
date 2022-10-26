import{a as o}from"./CardContainerLogic.98894317.js";import{j as e}from"./jsx-runtime.7534b5a0.js";import"./index.6f245744.js";import"./index.5a0550e3.js";import"./iframe.cb5f3f40.js";import"./Button.facab635.js";import"./index.57d09176.js";import"./withStyles.ecbbcd0d.js";import"./utils.b18b59db.js";import"./Alert.9c82c23c.js";import"./index.35ce73ec.js";import"./isArray.1150e90d.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.9b76f9a1.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.e6138c4f.js";import"./use-deep-compare-effect.esm.2a6c3723.js";import"./uniq.6c649ecc.js";import"./_baseSlice.50189bc5.js";import"./toInteger.39442f31.js";import"./isSymbol.c1d6cf65.js";import"./_cacheHas.a9d5a489.js";import"./without.a4f2b18e.js";import"./uniqueId.4137f4c9.js";import"./_Set.59d94647.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.e8ac8b46.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.2709626b.js";import"./Tooltip.71890e59.js";import"./createSvgIcon.ae6f4177.js";import"./makeStyles.c0018ba8.js";import"./InfoOutlined.9d5ad8e8.js";import"./FacetNav.68e2e97f.js";import"./queryUtils.c5ae8bea.js";import"./useInfiniteQuery.854b3fbd.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.2186185d.js";import"./_baseClone.68d80d11.js";import"./_getTag.869c3065.js";import"./ElementWithTooltip.53528b31.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.2de0199f.js";import"./Modal.8b35f6b6.js";import"./useWaitForDOMRef.fac5222c.js";import"./inheritsLoose.e3c56dfc.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.c83e318d.js";import"./isRequiredForA11y.20ed4857.js";import"./useEntity.6d6dfed4.js";import"./useMutation.0d7d79e8.js";import"./pick.8f9c58a0.js";import"./Checkbox.05c4ef02.js";import"./RadioGroup.257cc3bc.js";import"./moment.a565bb48.js";import"./RangeSlider.fbfcda1f.js";import"./factory.98d7723c.js";import"./react-sizeme.13268b50.js";import"./Skeleton.30b9665e.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.c9aad435.js";import"./Typography.31b00c6c.js";import"./Close.395e9cfd.js";import"./react-select.esm.31863e7a.js";import"./Select-54ac8379.esm.3b7e103b.js";import"./CustomSelectWidget.afbf761e.js";import"./index.browser.a5240fd0.js";import"./WarningModal.dc8cc109.js";import"./react-intersection-observer.esm.34d12358.js";import"./UserCard.aa295333.js";import"./IconCopy.66e91ea0.js";import"./SkeletonTable.7dcdf0c1.js";import"./times.837d97f6.js";import"./ToastMessage.1747dfd4.js";import"./FullWidthAlert.95dc5339.js";import"./Overlay.47a63549.js";import"./DateFormatter.9c6e31b5.js";import"./core.esm.5679147d.js";import"./isEmpty.9fb21cb5.js";import"./isEqual.48960a41.js";import"./union.e2f08ad6.js";import"./isString.82bb0f68.js";import"./useGetDownloadListStatistics.cea76857.js";import"./QueryCount.801e943d.js";import"./NoData.fcbdd942.js";import"./useGetAccessRequirement.b3079609.js";import"./ManagedACTAccessRequirementStatus.7664a4b0.js";import"./FileUpload.9a9ca2ef.js";import"./UserSearchBox.b5f0b053.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.1764fb26.js";import"./EntityLink.0e836274.js";import"./NoSearchResults.41d27d5b.js";import"./SynapseVideo.b07f4970.js";import"./IconList.7e68ad95.js";import"./UserCardList.6506239b.js";const io={parameters:{storySource:{source:`import React from 'react'
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
