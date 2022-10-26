import{a as o}from"./CardContainerLogic.61d570e4.js";import{j as e}from"./jsx-runtime.eafcb716.js";import"./index.1b5679ea.js";import"./index.c8a02fae.js";import"./iframe.5b9ef2ae.js";import"./Button.2a9ceb49.js";import"./index.57d09176.js";import"./withStyles.58225468.js";import"./utils.57f84b27.js";import"./Alert.3a69b0d7.js";import"./index.35ce73ec.js";import"./isArray.58b2754e.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.b014c401.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.dcdb7bde.js";import"./use-deep-compare-effect.esm.32d4302a.js";import"./uniq.a7654786.js";import"./_baseSlice.50189bc5.js";import"./toInteger.877b19a2.js";import"./isSymbol.4226a630.js";import"./_cacheHas.4d761572.js";import"./without.ba9da4ea.js";import"./uniqueId.6b2e4177.js";import"./_Set.a93a6693.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.51f27a34.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.625594e1.js";import"./Tooltip.96a18513.js";import"./createSvgIcon.01cb2ea7.js";import"./makeStyles.ba00c68d.js";import"./InfoOutlined.f91cf818.js";import"./FacetNav.ff7b4976.js";import"./queryUtils.dade1562.js";import"./useInfiniteQuery.0ce0255d.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.e13ce5b9.js";import"./_baseClone.705a7ff1.js";import"./_getTag.35a70f0d.js";import"./NoSearchResults.c9c55f7c.js";import"./NoData.6637f170.js";import"./ElementWithTooltip.fe39892b.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.7162bc12.js";import"./Modal.b6a2ef3c.js";import"./useWaitForDOMRef.883e5955.js";import"./inheritsLoose.bfa631c4.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.8d1cac1c.js";import"./isRequiredForA11y.20ed4857.js";import"./useEntity.bf1c9bc1.js";import"./useMutation.884ae33f.js";import"./pick.359c1a4c.js";import"./Checkbox.6d5555ef.js";import"./RadioGroup.e5def0a0.js";import"./moment.a565bb48.js";import"./RangeSlider.f407560b.js";import"./factory.a50674f0.js";import"./react-sizeme.dd262d7d.js";import"./Skeleton.7d351d4d.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.c34152cb.js";import"./Typography.049c6864.js";import"./Close.0b1926a3.js";import"./react-select.esm.b2d311d5.js";import"./Select-54ac8379.esm.349182a5.js";import"./CustomSelectWidget.881b9f9a.js";import"./index.browser.4cb65851.js";import"./WarningModal.c3d992db.js";import"./react-intersection-observer.esm.a05776db.js";import"./UserCard.a35d5b7e.js";import"./IconCopy.f88536dd.js";import"./SkeletonTable.aa50450b.js";import"./times.5f1a3032.js";import"./ToastMessage.a4b76c0b.js";import"./FullWidthAlert.a684bfe0.js";import"./Overlay.ae4ca009.js";import"./DateFormatter.ac7d7939.js";import"./core.esm.70554193.js";import"./isEmpty.31b01d03.js";import"./isEqual.f5035d64.js";import"./union.44090b51.js";import"./isString.19ecf57a.js";import"./useGetDownloadListStatistics.b986f94a.js";import"./QueryCount.6c5b0a28.js";import"./useGetAccessRequirement.d431fc61.js";import"./ManagedACTAccessRequirementStatus.53c8ed1d.js";import"./FileUpload.aa6d26aa.js";import"./UserSearchBox.52f13629.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.98cec68e.js";import"./EntityLink.777bfa8f.js";import"./SynapseVideo.4a63498d.js";import"./IconList.289dc51f.js";import"./UserCardList.0a47a3c6.js";const io={parameters:{storySource:{source:`import React from 'react'
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
