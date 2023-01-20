import{e as o}from"./AccessRequirementList.bce081ba.js";import{j as e}from"./jsx-runtime.590681cd.js";import"./index.bb7b660b.js";import"./index.220fbbb9.js";import"./iframe.d3c6f1d5.js";import"./SynapseConstants.aef18750.js";import"./Button.d3c811d3.js";import"./styled.1c864c13.js";import"./Tooltip.0f7aeb46.js";import"./SvgIcon.01f2428a.js";import"./useTheme.fa81c060.js";import"./TransitionGroupContext.e7de7ea1.js";import"./FullWidthAlert.8cff24d3.js";import"./hook.5f699942.js";import"./createWithBsPrefix.4b46c4d7.js";import"./divWithClassName.638b701c.js";import"./index.35ce73ec.js";import"./Typography.62f204bb.js";import"./Fade.dfa4b9be.js";import"./isArray.b759bc77.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.88997e16.js";import"./IconButton.7622d68d.js";import"./ButtonBase.c831f7af.js";import"./emotion-react.browser.esm.a07d05d9.js";import"./Link.3f8a0a55.js";import"./Button.6aee65d4.js";import"./useGetInfoFromIds.fe484232.js";import"./use-deep-compare-effect.esm.e5e25a62.js";import"./uniq.1eb55587.js";import"./_baseSlice.50189bc5.js";import"./toInteger.4e5bd8ec.js";import"./isSymbol.acb677d8.js";import"./_cacheHas.c3ef5294.js";import"./without.3cab2d82.js";import"./toString.e4762266.js";import"./_Set.13ddd322.js";import"./_setToArray.a82100c8.js";import"./queryKeys.f96c2872.js";import"./LoadingScreen.8ce9c0f0.js";import"./Modal.4704072e.js";import"./contains.5e789a3e.js";import"./inheritsLoose.16461593.js";import"./usePrevious.a5299ce0.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.1c0cdf8b.js";import"./UserCard.f8a4e9c0.js";import"./IconCopy.a05a23c9.js";import"./SkeletonTable.69520a2f.js";import"./times.58442ccf.js";import"./Skeleton.95aeb5c4.js";import"./ToastMessage.06f6548f.js";import"./uniqueId.ac4a52ef.js";import"./Overlay.08bde75f.js";import"./usePopperMarginModifiers.fa06e499.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.6d171a39.js";import"./useInfiniteQuery.582193b6.js";import"./DateFormatter.5dc1cf20.js";import"./dayjs.min.fc41a394.js";import"./utc.d4722960.js";import"./EntityIcon.f20fbcec.js";import"./core.esm.dff18696.js";import"./pick.cd3085d6.js";import"./_baseClone.5541a1cb.js";import"./isEmpty.ffb8061e.js";import"./isEqual.6e289403.js";import"./index.browser.c38bfbad.js";import"./union.96ffd9ca.js";import"./CustomSelectWidget.019e7101.js";import"./Select-54ac8379.esm.b77d0c67.js";import"./isString.0b29996a.js";import"./factory.f9864e7a.js";import"./sqlFunctions.7c5ea660.js";import"./QueryFilter.ee6936f9.js";import"./useEntity.e9c8ccf5.js";import"./useMutation.fbb1c8e7.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.ed2cb769.js";import"./queryUtils.b6571b13.js";import"./cloneDeep.399b0d62.js";import"./NoSearchResults.76b8e076.js";import"./NoData.43470a81.js";import"./unCamelCase.07e38083.js";import"./ColumnType.0fc7f115.js";import"./useGetQueryResultBundle.42b5d08f.js";import"./ElementWithTooltip.8e8a071c.js";import"./Dropdown.ebc0212b.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.adb21e17.js";import"./RadioGroup.63697a5f.js";import"./RangeSlider.be60d483.js";import"./react-sizeme.4669bd7b.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.d3927ba9.js";import"./Close.fe4e1b6f.js";import"./relativeTime.810a453b.js";import"./useDownloadList.92dbf79d.js";import"./QueryCount.eb0c34ec.js";import"./react-select.esm.0e965a92.js";import"./IconList.b09a9d03.js";import"./UserCardList.988f8d92.js";import"./useAccessRequirements.e8d4b6d5.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.48f16211.js";import"./UserSearchBox.03bb705a.js";import"./UserOrTeamBadge.b7d40120.js";import"./EntityLink.edd798d8.js";import"./ErrorChip.ab8c6b0c.js";import"./SynapseVideo.cbf89cbf.js";const Mo={parameters:{storySource:{source:`import React from 'react'
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
\${provenance?entityList=syn12548902%2Fversion%2F34&depth=1&displayHeightPx=500&showExpand=true}`};const c=n.bind({});c.args={ownerId:"syn5585645",wikiId:"493662"};const y=n.bind({});y.args={markdown:"${iduReport?accessRestrictionId=9605700}"};const xo=["HardCodedMarkdown","WikiPage","ImageDemo","ButtonLink","ImageBySynID","Plot","SynapseTable","MarkdownProvenanceGraph","HtmlRenderingTest","MarkdownIDUReport"];export{p as ButtonLink,r as HardCodedMarkdown,c as HtmlRenderingTest,s as ImageBySynID,a as ImageDemo,y as MarkdownIDUReport,d as MarkdownProvenanceGraph,m as Plot,l as SynapseTable,i as WikiPage,xo as __namedExportsOrder,Mo as default};
