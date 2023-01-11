import{e as o}from"./AccessRequirementList.817e3656.js";import{j as e}from"./jsx-runtime.8deabff4.js";import"./index.7e720d98.js";import"./index.57c4b3f6.js";import"./iframe.9a9f3456.js";import"./SynapseConstants.71946a35.js";import"./Button.7f145214.js";import"./styled.4ed13d54.js";import"./Tooltip.1a090672.js";import"./SvgIcon.68c0612f.js";import"./useTheme.4dbd8795.js";import"./TransitionGroupContext.f0e5bdf3.js";import"./FullWidthAlert.5c7c6876.js";import"./hook.1ef6fcec.js";import"./createWithBsPrefix.10b29307.js";import"./divWithClassName.17daa550.js";import"./index.35ce73ec.js";import"./Typography.d2c075af.js";import"./Fade.5eff05c6.js";import"./isArray.60ef1f80.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.c37effa3.js";import"./IconButton.88d7d90d.js";import"./ButtonBase.f183321e.js";import"./emotion-react.browser.esm.3c5e03a0.js";import"./Link.150a4582.js";import"./Button.eb6e2031.js";import"./useGetInfoFromIds.31729f6a.js";import"./use-deep-compare-effect.esm.d674fd6b.js";import"./uniq.001d5121.js";import"./_baseSlice.50189bc5.js";import"./toInteger.5c373204.js";import"./isSymbol.0aefb815.js";import"./_cacheHas.3e10b9ea.js";import"./without.2bdc7411.js";import"./uniqueId.d83e1a92.js";import"./_Set.efe7ce99.js";import"./_setToArray.a82100c8.js";import"./queryKeys.e0d3085f.js";import"./LoadingScreen.d8050d22.js";import"./Modal.8812f470.js";import"./contains.28185ff5.js";import"./inheritsLoose.1bd8d1a6.js";import"./usePrevious.1aaea82b.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.c2404935.js";import"./UserCard.c70cf940.js";import"./IconCopy.fec0e03b.js";import"./SkeletonTable.d18d0ed3.js";import"./times.bce2a9cd.js";import"./Skeleton.75c9e7ec.js";import"./ToastMessage.0865ace5.js";import"./Overlay.0adb623b.js";import"./usePopperMarginModifiers.008c5a4d.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.1f53a19c.js";import"./useInfiniteQuery.7899d034.js";import"./DateFormatter.cae52781.js";import"./dayjs.min.98c05744.js";import"./utc.4f3f9a8c.js";import"./EntityIcon.1c3aa2c3.js";import"./core.esm.61a3890e.js";import"./pick.c46cc8e3.js";import"./_baseClone.42d84618.js";import"./isEmpty.57a750a7.js";import"./isEqual.ae5ef449.js";import"./index.browser.a7937415.js";import"./union.16123856.js";import"./CustomSelectWidget.c237440f.js";import"./Select-54ac8379.esm.6d25abbe.js";import"./isString.aafd0bdb.js";import"./factory.aa9033b5.js";import"./sqlFunctions.9f009227.js";import"./QueryFilter.2f81cd8b.js";import"./useEntity.a8ca5bca.js";import"./useMutation.1145132d.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.beb51b71.js";import"./queryUtils.da582c94.js";import"./cloneDeep.ad631675.js";import"./NoSearchResults.64813bfd.js";import"./NoData.c6c08618.js";import"./unCamelCase.07e38083.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.77cbdb9a.js";import"./Dropdown.313b39ce.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.a8a5985b.js";import"./RadioGroup.d2e54988.js";import"./RangeSlider.6336bea5.js";import"./react-sizeme.19b651a3.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.ca478ed5.js";import"./Close.33c9f782.js";import"./relativeTime.2a9aa701.js";import"./useDownloadList.da07dda4.js";import"./QueryCount.42db340b.js";import"./react-select.esm.3b319a5d.js";import"./IconList.6aa6455f.js";import"./UserCardList.984aaece.js";import"./useAccessRequirements.3fb1eea2.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.64bea603.js";import"./UserSearchBox.143f00a6.js";import"./UserOrTeamBadge.c2dd3799.js";import"./EntityLink.e95bcbe1.js";import"./SynapseVideo.e9faf7fd.js";const uo={parameters:{storySource:{source:`import React from 'react'
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
\${provenance?entityList=syn12548902%2Fversion%2F34&depth=1&displayHeightPx=500&showExpand=true}`};const c=n.bind({});c.args={ownerId:"syn5585645",wikiId:"493662"};const y=n.bind({});y.args={markdown:"${iduReport?accessRestrictionId=9605700}"};const bo=["HardCodedMarkdown","WikiPage","ImageDemo","ButtonLink","ImageBySynID","Plot","SynapseTable","MarkdownProvenanceGraph","HtmlRenderingTest","MarkdownIDUReport"];export{p as ButtonLink,r as HardCodedMarkdown,c as HtmlRenderingTest,s as ImageBySynID,a as ImageDemo,y as MarkdownIDUReport,d as MarkdownProvenanceGraph,m as Plot,l as SynapseTable,i as WikiPage,bo as __namedExportsOrder,uo as default};
