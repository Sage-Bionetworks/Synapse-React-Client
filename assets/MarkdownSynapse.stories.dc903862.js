import{a as o}from"./CardContainerLogic.8a51ae9f.js";import{j as e}from"./jsx-runtime.e45f5946.js";import"./index.84caca20.js";import"./index.2f057391.js";import"./iframe.db0e90de.js";import"./SynapseConstants.290eab74.js";import"./Button.85a360c3.js";import"./styled.11fa6590.js";import"./utils.e1966123.js";import"./TransitionGroupContext.0404639f.js";import"./useTheme.c90b1c5e.js";import"./Alert.93c2217c.js";import"./hook.5e6c5d16.js";import"./createWithBsPrefix.a2136416.js";import"./divWithClassName.ba47b910.js";import"./index.35ce73ec.js";import"./isArray.8bc8137e.js";import"./getEndpoint.bb7ded34.js";import"./Link.7e8c9dbf.js";import"./Typography.33698c6c.js";import"./Button.67173b22.js";import"./ButtonBase.95f62226.js";import"./emotion-react.browser.esm.1d99b462.js";import"./sqlFunctions.cedc0d99.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.68a47eb2.js";import"./useGetInfoFromIds.b7e31f92.js";import"./use-deep-compare-effect.esm.6947367c.js";import"./uniq.1d7ae387.js";import"./_baseSlice.50189bc5.js";import"./toInteger.836ec642.js";import"./isSymbol.564875b4.js";import"./_cacheHas.a4903518.js";import"./without.046078f0.js";import"./uniqueId.c6c12783.js";import"./_Set.5d4d075d.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.b1ef8918.js";import"./queryUtils.5b9bb8c0.js";import"./useInfiniteQuery.8572f9ef.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.53475be9.js";import"./_baseClone.7677870c.js";import"./_getTag.adac27b6.js";import"./NoSearchResults.7acf193a.js";import"./NoData.a9d8f4b7.js";import"./unCamelCase.07e38083.js";import"./useEntity.87d22d65.js";import"./useMutation.33a42727.js";import"./pick.44941d26.js";import"./isEqual.989f48ab.js";import"./ElementWithTooltip.ca2e949f.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.fd56a75b.js";import"./Tooltip.2f932cf4.js";import"./createSvgIcon.25fceae1.js";import"./InfoOutlined.c1b233d2.js";import"./Dropdown.6d186adc.js";import"./usePrevious.820aff42.js";import"./contains.82fe9acc.js";import"./usePopperMarginModifiers.40113aa3.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.7c7046f9.js";import"./RadioGroup.83968d9b.js";import"./moment.a565bb48.js";import"./RangeSlider.973fdfc9.js";import"./factory.371506bb.js";import"./react-sizeme.e3a57323.js";import"./Skeleton.d7dd8f63.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.2ae08f91.js";import"./Modal.3cf810c4.js";import"./inheritsLoose.01564ab7.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.fd0babf1.js";import"./SelectionCriteriaPill.5950976b.js";import"./Close.bd4ed5e0.js";import"./react-select.esm.f2c082aa.js";import"./Select-54ac8379.esm.1506e5bc.js";import"./CustomSelectWidget.afd0ca63.js";import"./index.browser.e3fed4e8.js";import"./UserCard.8473dff8.js";import"./IconCopy.9bac9114.js";import"./SkeletonTable.3b39696e.js";import"./times.dc5c8712.js";import"./ToastMessage.dffa6777.js";import"./FullWidthAlert.1145dd98.js";import"./Overlay.2b8a7b39.js";import"./WarningModal.b9cdddf8.js";import"./react-intersection-observer.esm.69fbb5ff.js";import"./DateFormatter.a9cbfa7c.js";import"./EntityIcon.6b3ffc55.js";import"./core.esm.d3bdc97d.js";import"./isEmpty.c7d7f52e.js";import"./union.7d62ae42.js";import"./isString.b5efd261.js";import"./useGetDownloadListStatistics.69268546.js";import"./QueryCount.a23c9445.js";import"./useGetAccessRequirement.0efba7a1.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.3dfa701d.js";import"./UserSearchBox.84eaecbc.js";import"./UserOrTeamBadge.0dc6e448.js";import"./EntityLink.3232d5b6.js";import"./SynapseVideo.b76f842e.js";import"./IconList.7e9376dc.js";import"./UserCardList.45c04af5.js";const bo={parameters:{storySource:{source:`import React from 'react'
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
\${provenance?entityList=syn12548902%2Fversion%2F34&depth=1&displayHeightPx=500&showExpand=true}`};const c=n.bind({});c.args={ownerId:"syn5585645",wikiId:"493662"};const y=n.bind({});y.args={markdown:"${iduReport?accessRestrictionId=9605700}"};const Lo=["HardCodedMarkdown","WikiPage","ImageDemo","ButtonLink","ImageBySynID","Plot","SynapseTable","MarkdownProvenanceGraph","HtmlRenderingTest","MarkdownIDUReport"];export{p as ButtonLink,r as HardCodedMarkdown,c as HtmlRenderingTest,s as ImageBySynID,a as ImageDemo,y as MarkdownIDUReport,d as MarkdownProvenanceGraph,m as Plot,l as SynapseTable,i as WikiPage,Lo as __namedExportsOrder,bo as default};
