import{e as o}from"./AccessRequirementList.41faf05e.js";import{j as e}from"./jsx-runtime.a638b984.js";import"./index.b83134ec.js";import"./index.357ef824.js";import"./iframe.73217397.js";import"./SynapseConstants.aef18750.js";import"./Button.9991ffcd.js";import"./styled.d7b43787.js";import"./Tooltip.9be437e1.js";import"./SvgIcon.e74d0ad6.js";import"./useTheme.207e8da2.js";import"./TransitionGroupContext.f8911474.js";import"./FullWidthAlert.97efcbea.js";import"./hook.a59baafe.js";import"./createWithBsPrefix.86af4a28.js";import"./divWithClassName.979a7568.js";import"./index.35ce73ec.js";import"./Typography.1d6efe32.js";import"./Fade.cb073591.js";import"./isArray.dae1198f.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.9dec1c98.js";import"./IconButton.7cd1b748.js";import"./ButtonBase.bc378f3c.js";import"./emotion-react.browser.esm.3d42de74.js";import"./Link.e9eeb2e9.js";import"./Button.666a2c38.js";import"./useGetInfoFromIds.0695acf2.js";import"./use-deep-compare-effect.esm.84f86818.js";import"./uniq.a9fb9502.js";import"./_baseSlice.50189bc5.js";import"./toInteger.6100b906.js";import"./isSymbol.0dd0ac71.js";import"./_cacheHas.3d34eb58.js";import"./without.5a3916f3.js";import"./toString.42e4c32f.js";import"./_Set.7dca34f2.js";import"./_setToArray.a82100c8.js";import"./queryKeys.f96c2872.js";import"./LoadingScreen.aa28caa1.js";import"./Modal.b15b7fde.js";import"./contains.bb95d688.js";import"./inheritsLoose.239e8e0c.js";import"./usePrevious.cd07ee7a.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.1ade44a8.js";import"./UserCard.48755798.js";import"./IconCopy.9eb37407.js";import"./SkeletonTable.5915fa08.js";import"./times.6c1e506b.js";import"./Skeleton.9bd91a4d.js";import"./ToastMessage.1f086d0d.js";import"./uniqueId.409eda17.js";import"./Overlay.d99e3370.js";import"./usePopperMarginModifiers.5dd6ca76.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.acc5be8a.js";import"./useInfiniteQuery.26e1390d.js";import"./DateFormatter.d4a7e375.js";import"./dayjs.min.101fce52.js";import"./utc.b447640b.js";import"./EntityIcon.cd547dc5.js";import"./core.esm.5a39768d.js";import"./pick.8f751592.js";import"./_baseClone.fcfb79d0.js";import"./isEmpty.52a3bb94.js";import"./isEqual.e7127514.js";import"./index.browser.8d441949.js";import"./union.1918a2e6.js";import"./CustomSelectWidget.8bed6124.js";import"./Select-54ac8379.esm.6fca8758.js";import"./isString.40efef4d.js";import"./factory.54d8e23b.js";import"./sqlFunctions.32eb366f.js";import"./QueryFilter.b6981f76.js";import"./useEntity.4e3ff0bc.js";import"./useMutation.20926710.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.258625e4.js";import"./queryUtils.54998cc3.js";import"./cloneDeep.862b3fc1.js";import"./NoSearchResults.ed811a7e.js";import"./NoData.d46cdac5.js";import"./unCamelCase.07e38083.js";import"./ColumnType.744125d2.js";import"./useGetQueryResultBundle.625d0cdf.js";import"./ElementWithTooltip.9457f14f.js";import"./Dropdown.c6c87cc1.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.5012e4c0.js";import"./RadioGroup.7c25e269.js";import"./RangeSlider.18e46d9a.js";import"./react-sizeme.51f167fb.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.f7e1757b.js";import"./Close.f1e80c2b.js";import"./relativeTime.86b47aee.js";import"./useDownloadList.8311e29e.js";import"./QueryCount.eb0f2bab.js";import"./react-select.esm.1b1b0c13.js";import"./IconList.e17aeab0.js";import"./UserCardList.2e00fa1e.js";import"./useAccessRequirements.48298cfd.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.7c27e3b0.js";import"./UserSearchBox.f8b4b070.js";import"./UserOrTeamBadge.7c78ec4d.js";import"./EntityLink.4711e14a.js";import"./ErrorChip.097c7e23.js";import"./SynapseVideo.a7ab2161.js";const Mo={parameters:{storySource:{source:`import React from 'react'
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
