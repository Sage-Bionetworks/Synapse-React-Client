import{b as o}from"./HasAccessV2.977703e6.js";import{j as e}from"./jsx-runtime.43a8fcf9.js";import"./index.05d3527e.js";import"./index.91cff701.js";import"./iframe.f725ca92.js";import"./SynapseConstants.4792b5b5.js";import"./Button.1bf4e27e.js";import"./styled.76b26431.js";import"./Tooltip.9e1c2716.js";import"./SvgIcon.6442358d.js";import"./useTheme.af9f301b.js";import"./TransitionGroupContext.b91ad5da.js";import"./Alert.52cd8abc.js";import"./hook.21b06627.js";import"./createWithBsPrefix.5369d369.js";import"./divWithClassName.ce1df20c.js";import"./index.35ce73ec.js";import"./Fade.b7951dc7.js";import"./isArray.ef4abd22.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.710ae2ef.js";import"./IconButton.f195eccf.js";import"./ButtonBase.48ba7e09.js";import"./emotion-react.browser.esm.4fa41df1.js";import"./Link.fae97ed4.js";import"./Typography.1c91c940.js";import"./Button.c355b500.js";import"./useAccessRequirements.6431b8c3.js";import"./useMutation.ee241b25.js";import"./useInfiniteQuery.059ba1ba.js";import"./queryKeys.e0d3085f.js";import"./RestrictionInformation.edfbac5a.js";import"./useGetInfoFromIds.d5b3f724.js";import"./use-deep-compare-effect.esm.73b4fb0f.js";import"./uniq.bdc6ab7c.js";import"./_baseSlice.50189bc5.js";import"./toInteger.6147b6bf.js";import"./isSymbol.9cf935a3.js";import"./_cacheHas.61ea5ffc.js";import"./without.ba75708a.js";import"./uniqueId.5ab1be4f.js";import"./_Set.cd3f97a4.js";import"./_setToArray.a82100c8.js";import"./LoadingScreen.c7fc0bfd.js";import"./Modal.b5f77acd.js";import"./contains.96fd987b.js";import"./inheritsLoose.5ef7e794.js";import"./usePrevious.d85389cd.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.14fc8eae.js";import"./UserCard.85d537d7.js";import"./IconCopy.eda85edd.js";import"./SkeletonTable.2f3518f6.js";import"./times.0141f5ac.js";import"./Skeleton.2b718cf1.js";import"./ToastMessage.0277286d.js";import"./FullWidthAlert.f72a4ef7.js";import"./Overlay.e96f98b3.js";import"./usePopperMarginModifiers.498ed7f0.js";import"./WarningModal.242f7174.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.847c594c.js";import"./DateFormatter.76a82bfb.js";import"./dayjs.min.0cc1d975.js";import"./utc.662b37b0.js";import"./EntityIcon.f1b03715.js";import"./core.esm.01c35439.js";import"./pick.78dd2924.js";import"./_baseClone.89a5046c.js";import"./isEmpty.7ae9700f.js";import"./isEqual.5749f0e5.js";import"./index.browser.a697beda.js";import"./union.2a91053b.js";import"./CustomSelectWidget.bf249796.js";import"./Select-54ac8379.esm.9614dc94.js";import"./isString.a2a21200.js";import"./factory.8aa29487.js";import"./sqlFunctions.c711a305.js";import"./QueryFilter.6069a860.js";import"./useEntity.f604a81d.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.df1a8b11.js";import"./queryUtils.2c3057e1.js";import"./cloneDeep.f634b7fa.js";import"./NoSearchResults.e16db7b4.js";import"./NoData.97d35328.js";import"./unCamelCase.07e38083.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.edcdce96.js";import"./Dropdown.e99303c5.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.ed906ef1.js";import"./RadioGroup.ca2b8842.js";import"./RangeSlider.9dca656c.js";import"./react-sizeme.3edfc10c.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.3f0a723b.js";import"./Close.55deeabb.js";import"./relativeTime.c0627467.js";import"./useDownloadList.2c1c6acf.js";import"./QueryCount.94ee5a3e.js";import"./react-select.esm.357e96fb.js";import"./IconList.655fe748.js";import"./UserCardList.83c657fc.js";import"./EntityLink.ad279d6b.js";import"./UserOrTeamBadge.ab17001a.js";import"./SynapseVideo.51c7a15d.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.c74b6586.js";import"./UserSearchBox.483d6f64.js";const Lo={parameters:{storySource:{source:`import React from 'react'
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
