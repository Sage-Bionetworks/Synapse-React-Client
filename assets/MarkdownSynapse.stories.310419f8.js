import{a as o}from"./CardContainerLogic.a44526c0.js";import{j as e}from"./jsx-runtime.31268528.js";import"./index.22d2125e.js";import"./index.d5f32449.js";import"./iframe.c7567c2d.js";import"./SynapseConstants.290eab74.js";import"./Button.3eb9449f.js";import"./styled.0bfd4c69.js";import"./utils.033d23ab.js";import"./TransitionGroupContext.43d26755.js";import"./useTheme.910eaec3.js";import"./Alert.d1d035f0.js";import"./hook.78e5dc31.js";import"./createWithBsPrefix.4103f011.js";import"./divWithClassName.a05c647c.js";import"./index.35ce73ec.js";import"./Fade.4ca82ca8.js";import"./isArray.e45ce668.js";import"./getEndpoint.bb7ded34.js";import"./Link.df009298.js";import"./Typography.7deb443e.js";import"./Button.5756842c.js";import"./ButtonBase.34890086.js";import"./emotion-react.browser.esm.d60ec8ed.js";import"./sqlFunctions.d0deafe9.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.90a1a7eb.js";import"./useGetInfoFromIds.5e8bec87.js";import"./use-deep-compare-effect.esm.b33b0620.js";import"./uniq.f8b89bad.js";import"./_baseSlice.50189bc5.js";import"./toInteger.93a4e178.js";import"./isSymbol.32cdb41a.js";import"./_cacheHas.93c5766b.js";import"./without.6ba87f76.js";import"./uniqueId.23cb78c9.js";import"./_Set.87305464.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.5627db8b.js";import"./queryUtils.3c459226.js";import"./useInfiniteQuery.c6eed216.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.edfd3e7e.js";import"./_baseClone.dc0316e6.js";import"./_getTag.005e7532.js";import"./NoSearchResults.9e332b6e.js";import"./NoData.aa30cbc5.js";import"./unCamelCase.07e38083.js";import"./useEntity.e61a2fe2.js";import"./useMutation.9a2bc2f1.js";import"./pick.a80537e5.js";import"./isEqual.81f70372.js";import"./ElementWithTooltip.c6b5d0bb.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.1a319e23.js";import"./Tooltip.5176c19c.js";import"./createSvgIcon.f7c19e7b.js";import"./InfoOutlined.1c97ae19.js";import"./Dropdown.8938a9f4.js";import"./usePrevious.638ecd05.js";import"./contains.861fc71b.js";import"./usePopperMarginModifiers.7853b5dc.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.b2ac944e.js";import"./RadioGroup.b4a59787.js";import"./dayjs.min.fa03b112.js";import"./RangeSlider.cbd19d00.js";import"./factory.f5aa0ef3.js";import"./react-sizeme.631dea86.js";import"./Skeleton.855acef4.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.f5aeb847.js";import"./Modal.befa9583.js";import"./inheritsLoose.58664c58.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.f228876d.js";import"./SelectionCriteriaPill.5c36fa2b.js";import"./Close.a4816efa.js";import"./react-select.esm.61342118.js";import"./Select-54ac8379.esm.73afc0b0.js";import"./CustomSelectWidget.695d030e.js";import"./index.browser.62786e23.js";import"./UserCard.0f3fab61.js";import"./IconCopy.47bd251d.js";import"./SkeletonTable.8b5a914e.js";import"./times.97f8800e.js";import"./ToastMessage.a10582c4.js";import"./FullWidthAlert.0f9fa90d.js";import"./Overlay.4f4ca7b6.js";import"./WarningModal.0aedfe85.js";import"./react-intersection-observer.esm.12900737.js";import"./DateFormatter.5cb85eed.js";import"./utc.8b3d5b7c.js";import"./EntityIcon.69a6cf7b.js";import"./core.esm.7a354c66.js";import"./isEmpty.7ec601bf.js";import"./union.8e76d114.js";import"./isString.53ba3e66.js";import"./relativeTime.d35cf3f2.js";import"./useGetDownloadListStatistics.3d14c4e1.js";import"./QueryCount.2f8a0495.js";import"./useGetAccessRequirement.b2c1473c.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.399fb39e.js";import"./UserSearchBox.0e6910a6.js";import"./UserOrTeamBadge.86c3eff2.js";import"./EntityLink.fd06899a.js";import"./SynapseVideo.7d3137d8.js";import"./IconList.bef16bba.js";import"./UserCardList.3cb51c31.js";const xo={parameters:{storySource:{source:`import React from 'react'
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
