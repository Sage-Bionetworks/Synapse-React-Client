import{a as o}from"./CardContainerLogic.8943b1aa.js";import{j as e}from"./jsx-runtime.6cb91464.js";import"./index.253aaada.js";import"./index.13becb40.js";import"./iframe.77de7a8b.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.719dc857.js";import"./styled.9d49d23e.js";import"./utils.11d89a6f.js";import"./Alert.f130f9d6.js";import"./createWithBsPrefix.c2eb45fa.js";import"./index.35ce73ec.js";import"./isArray.c85446b1.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.7bbcd48d.js";import"./sqlFunctions.1830f92f.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.3c469190.js";import"./useGetInfoFromIds.1e4ac22b.js";import"./use-deep-compare-effect.esm.7ae859ab.js";import"./uniq.1102b3bc.js";import"./_baseSlice.50189bc5.js";import"./toInteger.70d616ab.js";import"./isSymbol.116fae96.js";import"./_cacheHas.9d7b6529.js";import"./without.095365fb.js";import"./uniqueId.4f03145e.js";import"./_Set.f07c2c40.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.7c91c12d.js";import"./queryUtils.9424e4b1.js";import"./useInfiniteQuery.62a8c625.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.f408eeac.js";import"./_baseClone.21067d4e.js";import"./_getTag.23171a9a.js";import"./NoSearchResults.b263a0fc.js";import"./NoData.1a51e057.js";import"./unCamelCase.07e38083.js";import"./useEntity.eab415d6.js";import"./useMutation.3ad2be87.js";import"./pick.7b3b1cb8.js";import"./isEqual.3875cd1f.js";import"./ElementWithTooltip.a2bf3b61.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.e72d865a.js";import"./Tooltip.9b073f35.js";import"./createSvgIcon.c493b6c9.js";import"./InfoOutlined.04f2d1df.js";import"./Dropdown.a7c1bd76.js";import"./usePrevious.05e36544.js";import"./contains.6a52d65a.js";import"./usePopperMarginModifiers.8332b5d5.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.7069d805.js";import"./RadioGroup.dba2ae1a.js";import"./moment.a565bb48.js";import"./RangeSlider.9e136d78.js";import"./factory.4a76326a.js";import"./react-sizeme.87853ccd.js";import"./Skeleton.2376d7a3.js";import"./emotion-react.browser.esm.63b80b77.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.5bb8c5fe.js";import"./Modal.79aadbe2.js";import"./inheritsLoose.1e598ca9.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.8c62de15.js";import"./Typography.c072ef4f.js";import"./SelectionCriteriaPill.bf7e136e.js";import"./Close.e45ac9a4.js";import"./react-select.esm.4209b07f.js";import"./Select-54ac8379.esm.e3131d5c.js";import"./CustomSelectWidget.3cfd30a9.js";import"./index.browser.e6c4f87b.js";import"./UserCard.e4c786fd.js";import"./IconCopy.af1c96f6.js";import"./SkeletonTable.ab3ce48c.js";import"./times.231664f9.js";import"./ToastMessage.5ece0449.js";import"./FullWidthAlert.771b5ce8.js";import"./Overlay.b1b8d860.js";import"./WarningModal.d990b25d.js";import"./react-intersection-observer.esm.2bfa2c2a.js";import"./DateFormatter.6c0f3d6c.js";import"./EntityIcon.973857d5.js";import"./core.esm.a0032c0a.js";import"./isEmpty.2b3beab2.js";import"./union.d74c3967.js";import"./isString.729987f0.js";import"./useGetDownloadListStatistics.82077613.js";import"./QueryCount.47ab349c.js";import"./useGetAccessRequirement.30b0033c.js";import"./ManagedACTAccessRequirementStatus.b5318817.js";import"./FileUpload.1c9d038a.js";import"./UserSearchBox.91caec0d.js";import"./UserOrTeamBadge.7ea7b8dc.js";import"./EntityLink.fc84c7f7.js";import"./SynapseVideo.323e4355.js";import"./IconList.f8668156.js";import"./UserCardList.a366786c.js";const co={parameters:{storySource:{source:`import React from 'react'
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
\${provenance?entityList=syn12548902%2Fversion%2F34&depth=1&displayHeightPx=500&showExpand=true}`};const c=n.bind({});c.args={ownerId:"syn5585645",wikiId:"493662"};const yo=["HardCodedMarkdown","WikiPage","ImageDemo","ButtonLink","ImageBySynID","Plot","SynapseTable","MarkdownProvenanceGraph","HtmlRenderingTest"];export{p as ButtonLink,r as HardCodedMarkdown,c as HtmlRenderingTest,s as ImageBySynID,a as ImageDemo,d as MarkdownProvenanceGraph,m as Plot,l as SynapseTable,i as WikiPage,yo as __namedExportsOrder,co as default};
