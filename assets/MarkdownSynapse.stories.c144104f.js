import{a as o}from"./CardContainerLogic.13da2bdf.js";import{j as e}from"./jsx-runtime.0db21b62.js";import"./index.90ee2b5e.js";import"./index.9eb164f8.js";import"./iframe.55601028.js";import"./SynapseConstants.290eab74.js";import"./Button.8dd67db9.js";import"./styled.04f8a540.js";import"./utils.8a121841.js";import"./TransitionGroupContext.59a59a19.js";import"./useTheme.6f96ca98.js";import"./Alert.476644bc.js";import"./hook.d21c687b.js";import"./createWithBsPrefix.cf2ded3d.js";import"./divWithClassName.9349f2fc.js";import"./index.35ce73ec.js";import"./Fade.002da28b.js";import"./isArray.051b97b8.js";import"./getEndpoint.bb7ded34.js";import"./Link.400989ff.js";import"./Typography.fc802d4f.js";import"./Button.c393a679.js";import"./ButtonBase.9b5b9b75.js";import"./emotion-react.browser.esm.e326a50f.js";import"./sqlFunctions.89b7555a.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.982fc5d7.js";import"./useGetInfoFromIds.7b424b86.js";import"./use-deep-compare-effect.esm.f1067dd3.js";import"./uniq.f7024654.js";import"./_baseSlice.50189bc5.js";import"./toInteger.82ea438a.js";import"./isSymbol.70fe8399.js";import"./_cacheHas.5f692c9b.js";import"./without.a296bf52.js";import"./uniqueId.9af27e73.js";import"./_Set.a3714456.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.6a064a63.js";import"./queryUtils.634fcbc9.js";import"./useInfiniteQuery.7f7301d1.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.3bba581d.js";import"./_baseClone.5ce35f9c.js";import"./_getTag.1403c71b.js";import"./NoSearchResults.92880f87.js";import"./NoData.e3ffa92d.js";import"./unCamelCase.07e38083.js";import"./useEntity.2b72a417.js";import"./useMutation.4b8ac845.js";import"./pick.b1b36568.js";import"./isEqual.b5a5f095.js";import"./ElementWithTooltip.b9619929.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.7ea71104.js";import"./Tooltip.137fb27a.js";import"./createSvgIcon.2669ec85.js";import"./InfoOutlined.c6dcbd99.js";import"./Dropdown.dca80b57.js";import"./usePrevious.0ecbef3d.js";import"./contains.18910bdc.js";import"./usePopperMarginModifiers.6d23a00d.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.d6973e75.js";import"./RadioGroup.5a5eea3b.js";import"./dayjs.min.8ecbf49a.js";import"./RangeSlider.9b930fc7.js";import"./factory.81f3a36b.js";import"./react-sizeme.569169d0.js";import"./Skeleton.99622f82.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.b865cf66.js";import"./Modal.6f969a6f.js";import"./inheritsLoose.39471a71.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.ada5a7ee.js";import"./SelectionCriteriaPill.099cfef4.js";import"./Close.e0c1c246.js";import"./react-select.esm.3ac9a570.js";import"./Select-54ac8379.esm.71de503d.js";import"./CustomSelectWidget.00ee46bf.js";import"./index.browser.0747d754.js";import"./UserCard.dbd6791d.js";import"./IconCopy.1118163b.js";import"./SkeletonTable.95f35468.js";import"./times.ca2e0d7b.js";import"./ToastMessage.10c98715.js";import"./FullWidthAlert.257257d5.js";import"./Overlay.8ef738fa.js";import"./WarningModal.d9006211.js";import"./react-intersection-observer.esm.0813a3ec.js";import"./DateFormatter.0a316f6d.js";import"./utc.07f25525.js";import"./EntityIcon.0216fd97.js";import"./core.esm.e5ea6d81.js";import"./isEmpty.16f2a54d.js";import"./union.09fb6ed0.js";import"./isString.2911fd8b.js";import"./relativeTime.181b1899.js";import"./useGetDownloadListStatistics.b1713c45.js";import"./QueryCount.c304061b.js";import"./useGetAccessRequirement.7d6d76d6.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.88917cdc.js";import"./UserSearchBox.140d0adb.js";import"./UserOrTeamBadge.6b5bd345.js";import"./EntityLink.af6b09fe.js";import"./SynapseVideo.2104adbb.js";import"./IconList.6b975d1e.js";import"./UserCardList.3cd94795.js";const xo={parameters:{storySource:{source:`import React from 'react'
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
