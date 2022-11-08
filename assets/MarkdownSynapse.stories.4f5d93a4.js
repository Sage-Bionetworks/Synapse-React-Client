import{a as o}from"./CardContainerLogic.fbcd19ea.js";import{j as e}from"./jsx-runtime.e755df9d.js";import"./index.f37f3b8f.js";import"./index.46e2a3d6.js";import"./iframe.2151c0e3.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.ce5d2622.js";import"./styled.134e90bd.js";import"./utils.61686747.js";import"./Alert.7ac348fd.js";import"./createWithBsPrefix.c5475a12.js";import"./index.35ce73ec.js";import"./isArray.32035835.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.26fd4209.js";import"./sqlFunctions.3408ddc8.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.b61a1724.js";import"./useGetInfoFromIds.6e925b42.js";import"./use-deep-compare-effect.esm.700faf33.js";import"./uniq.c55e1e59.js";import"./_baseSlice.50189bc5.js";import"./toInteger.44f4879c.js";import"./isSymbol.449c22fe.js";import"./_cacheHas.b6de7e15.js";import"./without.5e5c6054.js";import"./uniqueId.05b48118.js";import"./_Set.d710ebae.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.171c80c2.js";import"./queryUtils.27e3106c.js";import"./useInfiniteQuery.c9dc13c8.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.483ff71d.js";import"./_baseClone.fd352cb5.js";import"./_getTag.14203c81.js";import"./NoSearchResults.b7a683d4.js";import"./NoData.e2e0c918.js";import"./unCamelCase.07e38083.js";import"./useEntity.9a17e87f.js";import"./useMutation.65911f81.js";import"./pick.1f6196bd.js";import"./isEqual.67a4cf08.js";import"./ElementWithTooltip.7f730674.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.0451ffde.js";import"./Tooltip.68fb53f0.js";import"./createSvgIcon.4e7dae8f.js";import"./InfoOutlined.f6c28811.js";import"./Dropdown.7542d4d3.js";import"./usePrevious.8c9f92a6.js";import"./contains.c7dcff34.js";import"./usePopperMarginModifiers.64be5d9c.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.baff3041.js";import"./RadioGroup.774f5d0b.js";import"./moment.a565bb48.js";import"./RangeSlider.de41329b.js";import"./factory.1dee65e3.js";import"./react-sizeme.a8b68a27.js";import"./Skeleton.902d2113.js";import"./emotion-react.browser.esm.888ec03a.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.917a8a73.js";import"./Modal.48855f51.js";import"./inheritsLoose.9a3334e1.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.1fc5c6db.js";import"./Typography.c9ad912d.js";import"./SelectionCriteriaPill.b7ddbbed.js";import"./Close.a18d69c2.js";import"./react-select.esm.50c96607.js";import"./Select-54ac8379.esm.b2296e53.js";import"./CustomSelectWidget.0ac8a1af.js";import"./index.browser.d8058921.js";import"./UserCard.b4b4f075.js";import"./IconCopy.ada7cf84.js";import"./SkeletonTable.dac7e5fd.js";import"./times.005fd51b.js";import"./ToastMessage.3b077507.js";import"./FullWidthAlert.4c671361.js";import"./Overlay.f4f68cfe.js";import"./WarningModal.8f047f4c.js";import"./react-intersection-observer.esm.4be7d989.js";import"./DateFormatter.6da88380.js";import"./EntityIcon.04844139.js";import"./core.esm.7e8172f3.js";import"./isEmpty.04c7f13d.js";import"./union.5abedccb.js";import"./isString.0cef2332.js";import"./useGetDownloadListStatistics.1930ac0b.js";import"./QueryCount.1182ef9c.js";import"./useGetAccessRequirement.0c246789.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.d2f3f41f.js";import"./UserSearchBox.d4ba7e19.js";import"./UserOrTeamBadge.663cdd4f.js";import"./EntityLink.7e97f287.js";import"./ButtonBase.ee0cae3d.js";import"./SynapseVideo.cc515add.js";import"./IconList.447b5f75.js";import"./UserCardList.fc1bceb8.js";const yo={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"hard-coded-markdown":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"wiki-page":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"image-demo":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"button-link":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"image-by-syn-id":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},plot:{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"synapse-table":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"markdown-provenance-graph":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"html-rendering-test":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}}}}},title:"Markdown/MarkdownSynapse",component:o,argTypes:{}},n=t=>e(o,{...t}),r=n.bind({});r.args={markdown:"*markdown* given to the **component**"};const i=n.bind({});i.args={ownerId:"syn12666371",wikiId:"585317",loadingSkeletonRowCount:20};const a=n.bind({});a.args={ownerId:"syn18142975"};const p=n.bind({});p.args={markdown:`Button link demo 


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
\${provenance?entityList=syn12548902%2Fversion%2F34&depth=1&displayHeightPx=500&showExpand=true}`};const c=n.bind({});c.args={ownerId:"syn5585645",wikiId:"493662"};const go=["HardCodedMarkdown","WikiPage","ImageDemo","ButtonLink","ImageBySynID","Plot","SynapseTable","MarkdownProvenanceGraph","HtmlRenderingTest"];export{p as ButtonLink,r as HardCodedMarkdown,c as HtmlRenderingTest,s as ImageBySynID,a as ImageDemo,d as MarkdownProvenanceGraph,m as Plot,l as SynapseTable,i as WikiPage,go as __namedExportsOrder,yo as default};
