import{a as o}from"./CardContainerLogic.d77ddb9d.js";import{j as e}from"./jsx-runtime.24304d9c.js";import"./index.dc703903.js";import"./index.674f08c5.js";import"./iframe.b3940f38.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.505c8034.js";import"./styled.4d5a18a7.js";import"./utils.867613ea.js";import"./TransitionGroupContext.49f32f92.js";import"./Alert.ec6d4a4e.js";import"./createWithBsPrefix.ee70c17d.js";import"./index.35ce73ec.js";import"./isArray.9daed148.js";import"./getEndpoint.bb7ded34.js";import"./Link.3aacec77.js";import"./Typography.7f52bb2e.js";import"./Button.8a732419.js";import"./ButtonBase.6b005451.js";import"./sqlFunctions.1dfe61b0.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.afe7e184.js";import"./useGetInfoFromIds.5916050a.js";import"./use-deep-compare-effect.esm.750e65e1.js";import"./uniq.4b527a5f.js";import"./_baseSlice.50189bc5.js";import"./toInteger.6ad35d4b.js";import"./isSymbol.63d43715.js";import"./_cacheHas.c4b82072.js";import"./without.3c046ffa.js";import"./uniqueId.05165c8c.js";import"./_Set.a84dd9f9.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.9aa68480.js";import"./queryUtils.5da66a42.js";import"./useInfiniteQuery.f11f30ad.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.1399766e.js";import"./_baseClone.e4e4da47.js";import"./_getTag.744b3023.js";import"./NoSearchResults.f2796746.js";import"./NoData.5ef80598.js";import"./unCamelCase.07e38083.js";import"./useEntity.e2c763ab.js";import"./useMutation.0de7594d.js";import"./pick.a2391c74.js";import"./isEqual.8fefd1e2.js";import"./ElementWithTooltip.8d389fa2.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.cb1ea6d7.js";import"./Tooltip.5f9b84c2.js";import"./createSvgIcon.54a87752.js";import"./InfoOutlined.fc47286d.js";import"./Dropdown.78a48611.js";import"./usePrevious.c5435824.js";import"./contains.940b0fb3.js";import"./usePopperMarginModifiers.3653fc2d.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.051d39f0.js";import"./RadioGroup.a0ade424.js";import"./moment.a565bb48.js";import"./RangeSlider.62395d24.js";import"./factory.b227aa5c.js";import"./react-sizeme.b08b9bd7.js";import"./Skeleton.9c115467.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.f652220b.js";import"./Modal.bbbc0f4b.js";import"./inheritsLoose.16f7de6a.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.df4b368b.js";import"./SelectionCriteriaPill.37fae84f.js";import"./Close.89a2a211.js";import"./react-select.esm.95d762ee.js";import"./Select-54ac8379.esm.59c2c14c.js";import"./CustomSelectWidget.84eeff77.js";import"./index.browser.3fa12a57.js";import"./UserCard.cf4046aa.js";import"./IconCopy.8487c5a8.js";import"./SkeletonTable.3c0636d8.js";import"./times.afc8b914.js";import"./ToastMessage.82d4ebc5.js";import"./FullWidthAlert.ca6203e3.js";import"./Overlay.051bfe68.js";import"./WarningModal.8ca8ccad.js";import"./react-intersection-observer.esm.f3a5827a.js";import"./DateFormatter.402c75ba.js";import"./EntityIcon.93819522.js";import"./core.esm.0945b8aa.js";import"./isEmpty.227272c7.js";import"./union.832e5baa.js";import"./isString.420ca797.js";import"./useGetDownloadListStatistics.59e258f3.js";import"./QueryCount.9efc16b7.js";import"./useGetAccessRequirement.2672c514.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.c05bd529.js";import"./UserSearchBox.d583ca5c.js";import"./UserOrTeamBadge.d9817f5b.js";import"./EntityLink.d60e4d09.js";import"./SynapseVideo.065d2b06.js";import"./IconList.0411cd28.js";import"./UserCardList.e9c3cf92.js";const go={parameters:{storySource:{source:`import React from 'react'
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
