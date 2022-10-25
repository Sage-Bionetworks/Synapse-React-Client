import{a as o}from"./CardContainerLogic.70bdaa71.js";import{j as e}from"./jsx-runtime.ed0bc2e8.js";import"./index.444e3572.js";import"./index.68bd2905.js";import"./iframe.1c77586e.js";import"./Button.ead7d59a.js";import"./index.57d09176.js";import"./withStyles.5eea39d5.js";import"./utils.31a80d71.js";import"./Alert.e70a23c6.js";import"./index.35ce73ec.js";import"./isArray.69d02dee.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.1c3fe3f1.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.fc63d11c.js";import"./use-deep-compare-effect.esm.63a03aa5.js";import"./uniq.e0b70e96.js";import"./_baseSlice.50189bc5.js";import"./toInteger.c1671d6c.js";import"./isSymbol.3ae1367c.js";import"./_cacheHas.2f01a71b.js";import"./without.ae039a4c.js";import"./uniqueId.e6e71b68.js";import"./_Set.79ce457d.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.f3162245.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.af973a0c.js";import"./Tooltip.9455954b.js";import"./createSvgIcon.b88943f5.js";import"./makeStyles.83c340c0.js";import"./InfoOutlined.10c65527.js";import"./ElementWithTooltip.aa21c398.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.cea6d11d.js";import"./Modal.2df339d5.js";import"./useWaitForDOMRef.2b50b75b.js";import"./inheritsLoose.02c5cdc5.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.2ccc8168.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.244c418d.js";import"./queryUtils.b6e7a174.js";import"./useInfiniteQuery.4114925f.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.c1db8169.js";import"./_baseClone.32511df5.js";import"./_getTag.09032bbf.js";import"./useEntity.a73b6a7f.js";import"./useMutation.60a502f5.js";import"./pick.fbb2f290.js";import"./Checkbox.fc5ecb82.js";import"./RadioGroup.0bddc76f.js";import"./moment.a565bb48.js";import"./RangeSlider.e5b4fec2.js";import"./factory.ee8ba69d.js";import"./react-sizeme.22227f3d.js";import"./Skeleton.d97a08a6.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.d5fc7030.js";import"./Typography.935cd23d.js";import"./Close.2a111ba4.js";import"./react-select.esm.cd0b6178.js";import"./Select-54ac8379.esm.d5f59070.js";import"./CustomSelectWidget.aa330617.js";import"./index.browser.0b0b54ae.js";import"./WarningModal.57553bf6.js";import"./react-intersection-observer.esm.94964140.js";import"./UserCard.89349cd4.js";import"./IconCopy.82604258.js";import"./SkeletonTable.a364440a.js";import"./times.12135b85.js";import"./ToastMessage.f3c1e08b.js";import"./FullWidthAlert.7478a55e.js";import"./Overlay.d35a38e4.js";import"./DateFormatter.db43e9a9.js";import"./core.esm.241c4529.js";import"./isEmpty.c32e2e50.js";import"./isEqual.7b80062a.js";import"./union.ec09b824.js";import"./isString.e1b80b76.js";import"./useGetDownloadListStatistics.c8592017.js";import"./QueryCount.8c3d262b.js";import"./NoData.14d6f6b5.js";import"./useGetAccessRequirement.6e90b266.js";import"./ManagedACTAccessRequirementStatus.3daf4e8d.js";import"./FileUpload.7b8befbf.js";import"./UserSearchBox.d170c2a6.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.1f67599d.js";import"./EntityLink.cfbd5ae5.js";import"./NoSearchResults.826667f9.js";import"./SynapseVideo.10f842ec.js";import"./IconList.f6977954.js";import"./UserCardList.acf920eb.js";const io={parameters:{storySource:{source:`import React from 'react'
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
