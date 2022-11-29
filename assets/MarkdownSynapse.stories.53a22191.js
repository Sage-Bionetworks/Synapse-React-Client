import{a as o}from"./CardContainerLogic.4025bf40.js";import{j as e}from"./jsx-runtime.9272ed69.js";import"./index.f6d21e1b.js";import"./index.dc51ea0b.js";import"./iframe.e4b610a3.js";import"./SynapseConstants.290eab74.js";import"./Button.db898533.js";import"./styled.0de421fa.js";import"./utils.6e1717b5.js";import"./TransitionGroupContext.54f3d5ea.js";import"./useTheme.75529918.js";import"./Alert.2534b0a8.js";import"./hook.0361e512.js";import"./createWithBsPrefix.9ea76fe5.js";import"./divWithClassName.c5203597.js";import"./index.35ce73ec.js";import"./Fade.cc51c470.js";import"./isArray.f757e7ba.js";import"./getEndpoint.bb7ded34.js";import"./Link.8b0bf192.js";import"./Typography.1f221702.js";import"./Button.0c0c729f.js";import"./ButtonBase.3405045f.js";import"./emotion-react.browser.esm.1c97b976.js";import"./sqlFunctions.bf9ee2ef.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.3f245f1f.js";import"./useGetInfoFromIds.5d0f54bb.js";import"./use-deep-compare-effect.esm.76ae4c34.js";import"./uniq.67510ae5.js";import"./_baseSlice.50189bc5.js";import"./toInteger.13c3eb15.js";import"./isSymbol.04dc93d5.js";import"./_cacheHas.c948dd29.js";import"./without.3345252e.js";import"./uniqueId.f24c8a17.js";import"./_Set.64acb5b6.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.cc77dfae.js";import"./queryUtils.5d31346f.js";import"./useInfiniteQuery.35cc16ee.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.80edac49.js";import"./_baseClone.2e5b05e6.js";import"./_getTag.f2a17556.js";import"./NoSearchResults.028d391e.js";import"./NoData.51daf7bd.js";import"./unCamelCase.07e38083.js";import"./useEntity.e5686c34.js";import"./useMutation.8349b664.js";import"./pick.cd7420dd.js";import"./isEqual.98aabb8c.js";import"./ElementWithTooltip.20dbece6.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.26b6f898.js";import"./Tooltip.d2aa8c40.js";import"./createSvgIcon.1c5ae5be.js";import"./InfoOutlined.cadfca07.js";import"./Dropdown.d28c57f6.js";import"./usePrevious.d34a3e2f.js";import"./contains.27e7aea9.js";import"./usePopperMarginModifiers.d53889fd.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.50f2be5d.js";import"./RadioGroup.3f6db470.js";import"./dayjs.min.18cbb91e.js";import"./RangeSlider.c22adf0d.js";import"./factory.4b720305.js";import"./react-sizeme.3704c9c8.js";import"./Skeleton.fb3032fb.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.25a02c3d.js";import"./Modal.e699c9f3.js";import"./inheritsLoose.5c9703d4.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.cd5903ac.js";import"./SelectionCriteriaPill.6e1c66c9.js";import"./Close.ed93f062.js";import"./react-select.esm.ce9948dd.js";import"./Select-54ac8379.esm.749d2aa7.js";import"./CustomSelectWidget.d1adfe40.js";import"./index.browser.7030d3f5.js";import"./UserCard.fd71ec21.js";import"./IconCopy.5eab956d.js";import"./SkeletonTable.f9509214.js";import"./times.51f590ec.js";import"./ToastMessage.c90a289b.js";import"./FullWidthAlert.5512750c.js";import"./Overlay.5bf74367.js";import"./WarningModal.5f3b7633.js";import"./react-intersection-observer.esm.e538f341.js";import"./DateFormatter.35b93fe5.js";import"./utc.03e74faf.js";import"./EntityIcon.b8ef7967.js";import"./core.esm.2083ab36.js";import"./isEmpty.663e1621.js";import"./union.ca5e4ff7.js";import"./isString.138f81b2.js";import"./relativeTime.71ec3373.js";import"./useGetDownloadListStatistics.86ed1598.js";import"./QueryCount.e191d632.js";import"./useGetAccessRequirement.8b6f0b13.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.0bd6c1ea.js";import"./UserSearchBox.5273bd2a.js";import"./UserOrTeamBadge.f00a630e.js";import"./EntityLink.35f177b6.js";import"./SynapseVideo.a0ba38da.js";import"./IconList.d92f66a0.js";import"./UserCardList.ba94391f.js";const xo={parameters:{storySource:{source:`import React from 'react'
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
