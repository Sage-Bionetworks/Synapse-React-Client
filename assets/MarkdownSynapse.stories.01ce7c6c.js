import{a as o}from"./CardContainerLogic.cb33a7b8.js";import{j as e}from"./jsx-runtime.ed9254b2.js";import"./index.09dc23e8.js";import"./index.6a4b5ee2.js";import"./iframe.99e068ca.js";import"./SynapseConstants.290eab74.js";import"./Button.f70cf9a8.js";import"./styled.83fecbff.js";import"./utils.ce7a07fb.js";import"./TransitionGroupContext.335c91bc.js";import"./useTheme.fd34ae61.js";import"./Alert.5c7a73ee.js";import"./hook.8985ff56.js";import"./createWithBsPrefix.a83dfdb4.js";import"./divWithClassName.2b7a9e20.js";import"./index.35ce73ec.js";import"./isArray.9c9c9c65.js";import"./getEndpoint.bb7ded34.js";import"./Link.4533b1ea.js";import"./Typography.754ee5d4.js";import"./Button.3c46c29a.js";import"./ButtonBase.7ff40024.js";import"./emotion-react.browser.esm.c3af8cc3.js";import"./sqlFunctions.be81fc47.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.b62d2248.js";import"./useGetInfoFromIds.b374d08a.js";import"./use-deep-compare-effect.esm.d4fdc855.js";import"./uniq.4166e015.js";import"./_baseSlice.50189bc5.js";import"./toInteger.b20f9fa9.js";import"./isSymbol.18579460.js";import"./_cacheHas.9a7f07e6.js";import"./without.1a3a79a3.js";import"./uniqueId.0aa69bea.js";import"./_Set.fd0aa824.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.ef4231a4.js";import"./queryUtils.3ff51778.js";import"./useInfiniteQuery.800a5497.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.63504d31.js";import"./_baseClone.01d9004e.js";import"./_getTag.fbcd92ef.js";import"./NoSearchResults.1be5e0bb.js";import"./NoData.c4f1764e.js";import"./unCamelCase.07e38083.js";import"./useEntity.d2c714dc.js";import"./useMutation.60f0d665.js";import"./pick.962abfc3.js";import"./isEqual.bed5d254.js";import"./ElementWithTooltip.5cb18982.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.f9657569.js";import"./Tooltip.f5ebbadc.js";import"./createSvgIcon.90f6b4eb.js";import"./InfoOutlined.2dc079e8.js";import"./Dropdown.b2b7957d.js";import"./usePrevious.92366a31.js";import"./contains.7d4be39e.js";import"./usePopperMarginModifiers.a98822d9.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.7810a3a9.js";import"./RadioGroup.c62491ea.js";import"./dayjs.min.33c1da17.js";import"./RangeSlider.9dc64f2c.js";import"./factory.8feb3a1e.js";import"./react-sizeme.eea81253.js";import"./Skeleton.5cb63a0f.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.61a6cd73.js";import"./Modal.c698b2fc.js";import"./inheritsLoose.c118f853.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.053cb997.js";import"./SelectionCriteriaPill.56572b2d.js";import"./Close.925f78cd.js";import"./react-select.esm.9c102701.js";import"./Select-54ac8379.esm.8e533a13.js";import"./CustomSelectWidget.99a5d587.js";import"./index.browser.38d62754.js";import"./UserCard.07bf50f3.js";import"./IconCopy.952aa6c8.js";import"./SkeletonTable.1f898edc.js";import"./times.d13dc2b1.js";import"./ToastMessage.2604ce43.js";import"./FullWidthAlert.adc5f173.js";import"./Overlay.60675e59.js";import"./WarningModal.45183711.js";import"./react-intersection-observer.esm.c3cafa92.js";import"./DateFormatter.f3e72c7c.js";import"./utc.9490955d.js";import"./EntityIcon.2341fbe2.js";import"./core.esm.1308c590.js";import"./isEmpty.12e3e69f.js";import"./union.7c2f104c.js";import"./isString.737fff8b.js";import"./relativeTime.35d2831e.js";import"./useGetDownloadListStatistics.b06129ff.js";import"./QueryCount.a2409428.js";import"./useGetAccessRequirement.1983a1b6.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.0a5e9b6d.js";import"./UserSearchBox.3a770103.js";import"./UserOrTeamBadge.6dd7e061.js";import"./EntityLink.35fcf10a.js";import"./SynapseVideo.56518c38.js";import"./IconList.1c1b0b76.js";import"./UserCardList.f4976604.js";const Mo={parameters:{storySource:{source:`import React from 'react'
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
