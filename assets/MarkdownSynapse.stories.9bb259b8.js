import{a as o}from"./CardContainerLogic.dd3b6d75.js";import{j as e}from"./jsx-runtime.e5135412.js";import"./index.71230ff4.js";import"./index.42a076b6.js";import"./iframe.4ad064c2.js";import"./SynapseConstants.290eab74.js";import"./Button.63ea176a.js";import"./styled.a3d17504.js";import"./utils.1cb744a4.js";import"./TransitionGroupContext.772c7333.js";import"./useTheme.2346f1e9.js";import"./Alert.4963c7c8.js";import"./hook.85ae367a.js";import"./createWithBsPrefix.315d8008.js";import"./divWithClassName.1423062f.js";import"./index.35ce73ec.js";import"./Fade.d1d2b883.js";import"./isArray.bee4a7aa.js";import"./getEndpoint.bb7ded34.js";import"./Link.1aa3c056.js";import"./Typography.1aa4ae65.js";import"./Button.e272e789.js";import"./ButtonBase.ace65aea.js";import"./emotion-react.browser.esm.078eca06.js";import"./sqlFunctions.57836cf5.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.f6f25762.js";import"./useGetInfoFromIds.f42eb5d5.js";import"./use-deep-compare-effect.esm.8703b180.js";import"./uniq.a6b08cac.js";import"./_baseSlice.50189bc5.js";import"./toInteger.5990edab.js";import"./isSymbol.0f809a04.js";import"./_cacheHas.9fb171dd.js";import"./without.26bee3cb.js";import"./uniqueId.c448d212.js";import"./_Set.994e97c6.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.e3964af5.js";import"./queryUtils.8210254b.js";import"./useInfiniteQuery.b7e5a6aa.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.ef561af6.js";import"./_baseClone.dcb08082.js";import"./_getTag.fbf18d30.js";import"./NoSearchResults.44968580.js";import"./NoData.9d11c959.js";import"./unCamelCase.07e38083.js";import"./useEntity.38c12d6c.js";import"./useMutation.3762bbaa.js";import"./pick.7210121c.js";import"./isEqual.54206e34.js";import"./ElementWithTooltip.6c0350ba.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.c42d8cfc.js";import"./Tooltip.512cb681.js";import"./createSvgIcon.a94a426c.js";import"./InfoOutlined.1b7aba21.js";import"./Dropdown.23d7d6c9.js";import"./usePrevious.6b2d96e9.js";import"./contains.6f7ec0ab.js";import"./usePopperMarginModifiers.f1f361c8.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.6b247052.js";import"./RadioGroup.0f192c4c.js";import"./dayjs.min.546fe469.js";import"./RangeSlider.bf782f2e.js";import"./factory.b6e552e4.js";import"./react-sizeme.4a820ce0.js";import"./Skeleton.6f010adf.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.e187fc8f.js";import"./Modal.ea5ae4d0.js";import"./inheritsLoose.c10d0fd3.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.9e9d0981.js";import"./SelectionCriteriaPill.b5c5a042.js";import"./Close.9a15ec8f.js";import"./react-select.esm.e600ae2b.js";import"./Select-54ac8379.esm.ecc76f78.js";import"./CustomSelectWidget.61cecce6.js";import"./index.browser.14eee51c.js";import"./UserCard.f43fc2a4.js";import"./IconCopy.d207b265.js";import"./SkeletonTable.d5a10fc2.js";import"./times.92d567ce.js";import"./ToastMessage.14ac3753.js";import"./FullWidthAlert.dbd163b4.js";import"./Overlay.0cf59319.js";import"./WarningModal.68f6a016.js";import"./react-intersection-observer.esm.28d6b5d3.js";import"./DateFormatter.c57874a5.js";import"./utc.1ed3407a.js";import"./EntityIcon.b4c3d0c8.js";import"./core.esm.06b27e4f.js";import"./isEmpty.236d890e.js";import"./union.93498efa.js";import"./isString.582e0c86.js";import"./relativeTime.358f1b58.js";import"./useGetDownloadListStatistics.99b5f817.js";import"./QueryCount.482d314d.js";import"./useGetAccessRequirement.b8c42ad8.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.eadf91ed.js";import"./UserSearchBox.f5cec04f.js";import"./UserOrTeamBadge.1462357f.js";import"./EntityLink.f56b75a3.js";import"./SynapseVideo.46108d56.js";import"./IconList.11961a8c.js";import"./UserCardList.d28c131b.js";const xo={parameters:{storySource:{source:`import React from 'react'
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

export const MarkdownIDUReport = Template.bind({})
MarkdownIDUReport.args = {
  markdown: '\${iduReport?accessRestrictionId=9605700}',
}
`,locationsMap:{"hard-coded-markdown":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"wiki-page":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"image-demo":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"button-link":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"image-by-syn-id":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},plot:{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"synapse-table":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"markdown-provenance-graph":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"html-rendering-test":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"markdown-idu-report":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}}}}},title:"Markdown/MarkdownSynapse",component:o,argTypes:{}},n=t=>e(o,{...t}),r=n.bind({});r.args={markdown:"*markdown* given to the **component**"};const i=n.bind({});i.args={ownerId:"syn12666371",wikiId:"585317",loadingSkeletonRowCount:20};const a=n.bind({});a.args={ownerId:"syn18142975"};const p=n.bind({});p.args={markdown:`Button link demo 


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
\${provenance?entityList=syn12548902%2Fversion%2F34&depth=1&displayHeightPx=500&showExpand=true}`};const c=n.bind({});c.args={ownerId:"syn5585645",wikiId:"493662"};const y=n.bind({});y.args={markdown:"${iduReport?accessRestrictionId=9605700}"};const Bo=["HardCodedMarkdown","WikiPage","ImageDemo","ButtonLink","ImageBySynID","Plot","SynapseTable","MarkdownProvenanceGraph","HtmlRenderingTest","MarkdownIDUReport"];export{p as ButtonLink,r as HardCodedMarkdown,c as HtmlRenderingTest,s as ImageBySynID,a as ImageDemo,y as MarkdownIDUReport,d as MarkdownProvenanceGraph,m as Plot,l as SynapseTable,i as WikiPage,Bo as __namedExportsOrder,xo as default};
