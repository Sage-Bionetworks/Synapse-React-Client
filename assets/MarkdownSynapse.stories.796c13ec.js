import{a as o}from"./CardContainerLogic.3396ec86.js";import{j as e}from"./jsx-runtime.2b71273f.js";import"./index.3d089af5.js";import"./index.7aa8b9f8.js";import"./iframe.2ab16825.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.9a34c287.js";import"./styled.ffa42780.js";import"./utils.4bc122e2.js";import"./TransitionGroupContext.ec9d4526.js";import"./Alert.dab3d922.js";import"./createWithBsPrefix.64e0cb3b.js";import"./index.35ce73ec.js";import"./isArray.f3e4211e.js";import"./getEndpoint.bb7ded34.js";import"./Link.fcffcbaa.js";import"./Typography.e75e6cdf.js";import"./Button.f0ab2e0d.js";import"./ButtonBase.1d993e3f.js";import"./sqlFunctions.18713ca7.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.d1a5c2d4.js";import"./useGetInfoFromIds.5f634da8.js";import"./use-deep-compare-effect.esm.44ef78ce.js";import"./uniq.ef833a9e.js";import"./_baseSlice.50189bc5.js";import"./toInteger.b7a3730e.js";import"./isSymbol.6a44fdec.js";import"./_cacheHas.0114790d.js";import"./without.e0a6465c.js";import"./uniqueId.775c431b.js";import"./_Set.bc19c004.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.cbcf4a48.js";import"./queryUtils.d71455d5.js";import"./useInfiniteQuery.9dc12884.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.d5cf2850.js";import"./_baseClone.4e49c1b9.js";import"./_getTag.46bb0c58.js";import"./NoSearchResults.f592033b.js";import"./NoData.9ac0d394.js";import"./unCamelCase.07e38083.js";import"./useEntity.20292701.js";import"./useMutation.a0a78509.js";import"./pick.64e130de.js";import"./isEqual.18b445fb.js";import"./ElementWithTooltip.0ea67f43.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.31630328.js";import"./Tooltip.7c243246.js";import"./createSvgIcon.8400397d.js";import"./InfoOutlined.49fd3aca.js";import"./Dropdown.86cfdcd3.js";import"./usePrevious.c75e8e8b.js";import"./contains.7e5b5926.js";import"./usePopperMarginModifiers.a1dad7e0.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.ee3fd59e.js";import"./RadioGroup.b7c3164f.js";import"./moment.a565bb48.js";import"./RangeSlider.4c50112e.js";import"./factory.4925aa2f.js";import"./react-sizeme.dcf8c0d4.js";import"./Skeleton.aec42867.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.9c8df6fc.js";import"./Modal.76abb664.js";import"./inheritsLoose.ec7bf850.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.45bec7c5.js";import"./SelectionCriteriaPill.e52c1527.js";import"./Close.5cfe5581.js";import"./react-select.esm.c1d11ad8.js";import"./Select-54ac8379.esm.e1f0cef1.js";import"./CustomSelectWidget.68c08cc6.js";import"./index.browser.a16f7b2f.js";import"./UserCard.2ecf62d0.js";import"./IconCopy.24e1b7a1.js";import"./SkeletonTable.257b688b.js";import"./times.99997936.js";import"./ToastMessage.486f16ec.js";import"./FullWidthAlert.d57a412d.js";import"./Overlay.b78a7481.js";import"./WarningModal.b01b5a03.js";import"./react-intersection-observer.esm.ede5d37f.js";import"./DateFormatter.656c0705.js";import"./EntityIcon.7fcfa9cd.js";import"./core.esm.c770b2d9.js";import"./isEmpty.0de19e08.js";import"./union.6af1fe91.js";import"./isString.b6bf14ae.js";import"./useGetDownloadListStatistics.1c84e0b3.js";import"./QueryCount.bf26b7bc.js";import"./useGetAccessRequirement.ac090de8.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.96b74be5.js";import"./UserSearchBox.95a380da.js";import"./UserOrTeamBadge.66876747.js";import"./EntityLink.6339cd5b.js";import"./SynapseVideo.7424b0a8.js";import"./IconList.c0271e14.js";import"./UserCardList.52b6e9ed.js";const go={parameters:{storySource:{source:`import React from 'react'
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
