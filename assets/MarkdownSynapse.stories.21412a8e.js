import{a as o}from"./CardContainerLogic.80e28a7a.js";import{j as e}from"./jsx-runtime.076c7567.js";import"./index.53b0413e.js";import"./index.3dd8c113.js";import"./iframe.dc9e500a.js";import"./SynapseConstants.290eab74.js";import"./Button.a0002af7.js";import"./styled.65df53fb.js";import"./Tooltip.b4ed2e26.js";import"./TransitionGroupContext.9598a495.js";import"./useTheme.6d85215f.js";import"./Alert.052d6dda.js";import"./hook.fb6ae99a.js";import"./createWithBsPrefix.125a71ed.js";import"./divWithClassName.d855987b.js";import"./index.35ce73ec.js";import"./Fade.476b0ff7.js";import"./isArray.b8ce881a.js";import"./getEndpoint.bb7ded34.js";import"./IconSvg.94aeb20a.js";import"./IconButton.81618d29.js";import"./ButtonBase.49fff140.js";import"./emotion-react.browser.esm.74b64aae.js";import"./Link.fd8fbf97.js";import"./Typography.18dd9738.js";import"./Button.855954d3.js";import"./sqlFunctions.6aa94ea0.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.391fb5d9.js";import"./useGetInfoFromIds.1688b736.js";import"./use-deep-compare-effect.esm.2f8a811e.js";import"./uniq.5f9327c6.js";import"./_baseSlice.50189bc5.js";import"./toInteger.92753527.js";import"./isSymbol.353ed4c3.js";import"./_cacheHas.59262266.js";import"./without.87978f51.js";import"./uniqueId.0acb56b3.js";import"./_Set.650372d5.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.40bc2638.js";import"./queryUtils.9c901ffd.js";import"./useInfiniteQuery.0a9647d8.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.dd48b18e.js";import"./_baseClone.81813b93.js";import"./_getTag.14e0b047.js";import"./NoSearchResults.aff925db.js";import"./NoData.b071b2e4.js";import"./unCamelCase.07e38083.js";import"./useEntity.06da6e35.js";import"./useMutation.7eb34ba2.js";import"./pick.e04e17ce.js";import"./isEqual.2f7c36d1.js";import"./ElementWithTooltip.d02c84fa.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.909fc8e8.js";import"./usePrevious.7f44450b.js";import"./contains.3362c067.js";import"./usePopperMarginModifiers.a23c4ed0.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.0bdec9b4.js";import"./RadioGroup.ac30b43c.js";import"./dayjs.min.20a3de16.js";import"./RangeSlider.f1ddbf5e.js";import"./factory.d6f460bc.js";import"./react-sizeme.7456e7a4.js";import"./Skeleton.83217f13.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.693ddaa7.js";import"./Modal.6a4db761.js";import"./inheritsLoose.9e861b2b.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.dbc78690.js";import"./SelectionCriteriaPill.81441fbe.js";import"./Close.9952fafd.js";import"./react-select.esm.e1b9a3ee.js";import"./Select-54ac8379.esm.96245f62.js";import"./CustomSelectWidget.466b5f45.js";import"./index.browser.19d490ee.js";import"./UserCard.51dc49e5.js";import"./IconCopy.1b045a7b.js";import"./SkeletonTable.3dd63b5b.js";import"./times.2784b383.js";import"./ToastMessage.f480df01.js";import"./FullWidthAlert.c3c066c4.js";import"./Overlay.07d52eac.js";import"./WarningModal.fe9b8157.js";import"./react-intersection-observer.esm.e649c397.js";import"./DateFormatter.1f96b822.js";import"./utc.b83b7030.js";import"./EntityIcon.f7bcc06a.js";import"./core.esm.2116ac3e.js";import"./isEmpty.cb1c6f75.js";import"./union.b6ea78a3.js";import"./isString.53dbadb5.js";import"./relativeTime.c2bdff91.js";import"./useGetDownloadListStatistics.e285079b.js";import"./QueryCount.ea9a5992.js";import"./useGetAccessRequirement.08a1ff59.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.8127d6f3.js";import"./UserSearchBox.782f64fa.js";import"./UserOrTeamBadge.48c906a7.js";import"./EntityLink.5eeecbce.js";import"./SynapseVideo.a31f0d5c.js";import"./IconList.1dbbdfac.js";import"./UserCardList.305661b8.js";const Lo={parameters:{storySource:{source:`import React from 'react'
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
\${provenance?entityList=syn12548902%2Fversion%2F34&depth=1&displayHeightPx=500&showExpand=true}`};const c=n.bind({});c.args={ownerId:"syn5585645",wikiId:"493662"};const y=n.bind({});y.args={markdown:"${iduReport?accessRestrictionId=9605700}"};const Mo=["HardCodedMarkdown","WikiPage","ImageDemo","ButtonLink","ImageBySynID","Plot","SynapseTable","MarkdownProvenanceGraph","HtmlRenderingTest","MarkdownIDUReport"];export{p as ButtonLink,r as HardCodedMarkdown,c as HtmlRenderingTest,s as ImageBySynID,a as ImageDemo,y as MarkdownIDUReport,d as MarkdownProvenanceGraph,m as Plot,l as SynapseTable,i as WikiPage,Mo as __namedExportsOrder,Lo as default};
