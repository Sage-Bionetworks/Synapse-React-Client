import{a as o}from"./CardContainerLogic.97af0146.js";import{j as e}from"./jsx-runtime.02a28547.js";import"./index.4fdef5f4.js";import"./index.a309e2be.js";import"./iframe.0b294b31.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.47e26dba.js";import"./styled.2f449268.js";import"./utils.34aadcdd.js";import"./TransitionGroupContext.70688128.js";import"./Alert.3df3eb36.js";import"./createWithBsPrefix.c66fa874.js";import"./index.35ce73ec.js";import"./isArray.46d1af5d.js";import"./getEndpoint.bb7ded34.js";import"./Link.4b81c1ee.js";import"./Typography.67a640f4.js";import"./Button.1972b2d6.js";import"./ButtonBase.9cc6b40c.js";import"./sqlFunctions.ead23534.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.d8464a8f.js";import"./useGetInfoFromIds.258331ba.js";import"./use-deep-compare-effect.esm.7ded1864.js";import"./uniq.69f3520c.js";import"./_baseSlice.50189bc5.js";import"./toInteger.d773cbc0.js";import"./isSymbol.f23d6818.js";import"./_cacheHas.2b87484d.js";import"./without.a4daf102.js";import"./uniqueId.77032a6a.js";import"./_Set.323c8e8c.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.bff1bb1e.js";import"./queryUtils.7f349eb5.js";import"./useInfiniteQuery.47c688b2.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.ab339cb4.js";import"./_baseClone.be7945a8.js";import"./_getTag.eceaa81f.js";import"./NoSearchResults.3298bc25.js";import"./NoData.aba686a4.js";import"./unCamelCase.07e38083.js";import"./useEntity.518b6229.js";import"./useMutation.76b94172.js";import"./pick.ae4dc1a6.js";import"./isEqual.a8d1bf93.js";import"./ElementWithTooltip.a41fbda5.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.19fd41bf.js";import"./Tooltip.edd9e9f0.js";import"./createSvgIcon.d569702c.js";import"./InfoOutlined.88356fd8.js";import"./Dropdown.c4adefef.js";import"./usePrevious.769406c5.js";import"./contains.81250605.js";import"./usePopperMarginModifiers.129c8d3b.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.cf382583.js";import"./RadioGroup.b47f6073.js";import"./moment.a565bb48.js";import"./RangeSlider.4e835942.js";import"./factory.6b033540.js";import"./react-sizeme.b9df939a.js";import"./Skeleton.441b86fc.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.5743cf69.js";import"./Modal.a86dbf9d.js";import"./inheritsLoose.d59fe2ec.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.030a4d07.js";import"./SelectionCriteriaPill.e9c5356b.js";import"./Close.18e94b90.js";import"./react-select.esm.79446879.js";import"./Select-54ac8379.esm.0973ae43.js";import"./CustomSelectWidget.d7e54740.js";import"./index.browser.f5189fc5.js";import"./UserCard.8e05b9f1.js";import"./IconCopy.4f34e504.js";import"./SkeletonTable.71120aff.js";import"./times.0912663f.js";import"./ToastMessage.a8e621dc.js";import"./FullWidthAlert.4f5282fe.js";import"./Overlay.f4a71f57.js";import"./WarningModal.e3204aa1.js";import"./react-intersection-observer.esm.15c9b8c9.js";import"./DateFormatter.aa2aa69b.js";import"./EntityIcon.2959aa7e.js";import"./core.esm.181bea6f.js";import"./isEmpty.796beee9.js";import"./union.b8f595c3.js";import"./isString.12e1a271.js";import"./useGetDownloadListStatistics.5a7566b6.js";import"./QueryCount.5c6cac7e.js";import"./useGetAccessRequirement.98d533d9.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.b1fb6521.js";import"./UserSearchBox.d6476648.js";import"./UserOrTeamBadge.dfa3bce5.js";import"./EntityLink.763851bf.js";import"./SynapseVideo.7ac2064d.js";import"./IconList.8e64c16b.js";import"./UserCardList.352af1af.js";const go={parameters:{storySource:{source:`import React from 'react'
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
\${provenance?entityList=syn12548902%2Fversion%2F34&depth=1&displayHeightPx=500&showExpand=true}`};const c=n.bind({});c.args={ownerId:"syn5585645",wikiId:"493662"};const y=n.bind({});y.args={markdown:"${iduReport?accessRestrictionId=9605700}"};const ko=["HardCodedMarkdown","WikiPage","ImageDemo","ButtonLink","ImageBySynID","Plot","SynapseTable","MarkdownProvenanceGraph","HtmlRenderingTest","MarkdownIDUReport"];export{p as ButtonLink,r as HardCodedMarkdown,c as HtmlRenderingTest,s as ImageBySynID,a as ImageDemo,y as MarkdownIDUReport,d as MarkdownProvenanceGraph,m as Plot,l as SynapseTable,i as WikiPage,ko as __namedExportsOrder,go as default};
