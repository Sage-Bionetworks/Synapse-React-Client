import{a as o}from"./CardContainerLogic.5708db66.js";import{j as e}from"./jsx-runtime.4c3515e4.js";import"./index.9501be1c.js";import"./index.e847bba9.js";import"./iframe.37f2588a.js";import"./Alert.54d65423.js";import"./Button.28efd16b.js";import"./index.57d09176.js";import"./Transition.840176b2.js";import"./index.35ce73ec.js";import"./isArray.7ff8d0ef.js";import"./withStyles.9c7b3093.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.d7dd9197.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.22f02f58.js";import"./use-deep-compare-effect.esm.c8b81a3e.js";import"./uniq.a9f39746.js";import"./_baseSlice.50189bc5.js";import"./toInteger.010334bc.js";import"./isSymbol.6b184f44.js";import"./_cacheHas.53644ed3.js";import"./without.c05f29e9.js";import"./uniqueId.129d2094.js";import"./_Set.bda6b03e.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.bbc58c26.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.c8b7f299.js";import"./Tooltip.92206031.js";import"./createSvgIcon.8e9e6f8f.js";import"./useTheme.5faeeca8.js";import"./makeStyles.96934dd6.js";import"./InfoOutlined.20c203c5.js";import"./ElementWithTooltip.d6818df7.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.de6d85a9.js";import"./Modal.728c56cb.js";import"./useWaitForDOMRef.261cbd7a.js";import"./inheritsLoose.1ddc474e.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.bef4af84.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.d51baf06.js";import"./queryUtils.2fb7203a.js";import"./useInfiniteQuery.b0fd5972.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.e32a16c9.js";import"./_baseClone.ad7eae0e.js";import"./_getTag.81a6b460.js";import"./useEntity.06e3375e.js";import"./useMutation.ea7a4bb4.js";import"./pick.8c1990ef.js";import"./Checkbox.595559f6.js";import"./Collapse.5eb33ae1.js";import"./RadioGroup.cee220e2.js";import"./moment.a565bb48.js";import"./RangeSlider.875b2c80.js";import"./factory.f3a74e63.js";import"./react-sizeme.b45ab793.js";import"./Skeleton.dccb1004.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.e019a26a.js";import"./Typography.48c24744.js";import"./react-select.esm.be81d946.js";import"./Select-54ac8379.esm.4527fff6.js";import"./CustomSelectWidget.2071af3c.js";import"./index.browser.11d6a0ee.js";import"./WarningModal.509f858a.js";import"./react-intersection-observer.esm.6734a5fd.js";import"./UserCard.8b720891.js";import"./IconCopy.b18e1da4.js";import"./SkeletonTable.0b50ae3a.js";import"./times.224503e4.js";import"./ToastMessage.9b5c3655.js";import"./FullWidthAlert.c9de56f1.js";import"./Overlay.9b2a4e52.js";import"./DateFormatter.e82037eb.js";import"./core.esm.c8d2fb38.js";import"./isEmpty.95a5d68b.js";import"./isEqual.50f256ae.js";import"./union.d28f2d6a.js";import"./isString.8dcca74c.js";import"./useGetDownloadListStatistics.76f3c559.js";import"./QueryCount.a71e18d1.js";import"./NoData.7b164148.js";import"./useGetAccessRequirement.9b9918ba.js";import"./ManagedACTAccessRequirementStatus.c3ccc32c.js";import"./FileUpload.84bb18b9.js";import"./UserSearchBox.6bc136c7.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.c4bcdce7.js";import"./EntityLink.3624bc06.js";import"./NoSearchResults.ce6c9f83.js";import"./SynapseVideo.27c84693.js";import"./IconList.8e7dd342.js";import"./UserCardList.fef008a0.js";const ao={parameters:{storySource:{source:`import React from 'react'
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
\${provenance?entityList=syn12548902%2Fversion%2F34&depth=1&displayHeightPx=500&showExpand=true}`};const c=n.bind({});c.args={ownerId:"syn5585645",wikiId:"493662"};const po=["HardCodedMarkdown","WikiPage","ImageDemo","ButtonLink","ImageBySynID","Plot","SynapseTable","MarkdownProvenanceGraph","HtmlRenderingTest"];export{p as ButtonLink,r as HardCodedMarkdown,c as HtmlRenderingTest,s as ImageBySynID,a as ImageDemo,d as MarkdownProvenanceGraph,m as Plot,l as SynapseTable,i as WikiPage,po as __namedExportsOrder,ao as default};
