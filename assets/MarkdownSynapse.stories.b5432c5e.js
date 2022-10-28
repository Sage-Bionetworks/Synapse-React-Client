import{a as o}from"./CardContainerLogic.e1f41888.js";import{j as e}from"./jsx-runtime.4eaffca0.js";import"./index.e08ca228.js";import"./index.48154df0.js";import"./iframe.f6ed0eb4.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.9f15dabf.js";import"./index.57d09176.js";import"./withStyles.21c7e80a.js";import"./utils.2281a9d6.js";import"./Alert.27b9a701.js";import"./createWithBsPrefix.735cbed5.js";import"./index.35ce73ec.js";import"./isArray.33858a1d.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.4d40d0c3.js";import"./sqlFunctions.a660c34a.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.c3d3eddf.js";import"./TypeUtils.a2c41307.js";import"./useGetInfoFromIds.2169a105.js";import"./use-deep-compare-effect.esm.7fe1b1d8.js";import"./uniq.ad76c02f.js";import"./_baseSlice.50189bc5.js";import"./toInteger.27d529dc.js";import"./isSymbol.fff1a0c2.js";import"./_cacheHas.eddc2d4e.js";import"./without.84ea84a3.js";import"./uniqueId.93f128ba.js";import"./_Set.8d919665.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.aefaf146.js";import"./IconSvg.9da8b4b8.js";import"./Tooltip.baf92203.js";import"./createSvgIcon.d152a531.js";import"./makeStyles.c1994d74.js";import"./InfoOutlined.489c1b42.js";import"./FacetNav.c3f6239d.js";import"./queryUtils.f5372232.js";import"./useInfiniteQuery.0db4af83.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.cd46457d.js";import"./_baseClone.342ff797.js";import"./_getTag.8907a9e9.js";import"./NoSearchResults.11fe86a6.js";import"./NoData.e6e41d35.js";import"./unCamelCase.07e38083.js";import"./useEntity.a5145ae3.js";import"./useMutation.b1729f81.js";import"./pick.a82409fa.js";import"./isEqual.f7b39916.js";import"./ElementWithTooltip.62fd30fe.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.c384e17c.js";import"./usePrevious.ba24858a.js";import"./contains.589a7733.js";import"./usePopperMarginModifiers.ec086152.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.43177b93.js";import"./RadioGroup.32425fa1.js";import"./moment.a565bb48.js";import"./RangeSlider.adef42b0.js";import"./factory.39ac0861.js";import"./react-sizeme.d5cbc0eb.js";import"./Skeleton.3c162426.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.0426ab40.js";import"./Typography.95636964.js";import"./Modal.a3764183.js";import"./inheritsLoose.f7a58397.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.26d65963.js";import"./SelectionCriteriaPill.4b691a97.js";import"./Close.0089b012.js";import"./react-select.esm.58fb1bbe.js";import"./Select-54ac8379.esm.3acfea25.js";import"./CustomSelectWidget.6cc1e305.js";import"./index.browser.37a67034.js";import"./WarningModal.5cc0586c.js";import"./react-intersection-observer.esm.5423f88d.js";import"./UserCard.73a822b2.js";import"./IconCopy.2759b8ec.js";import"./SkeletonTable.862e92ab.js";import"./times.025024a4.js";import"./ToastMessage.a51dddf9.js";import"./FullWidthAlert.e49b83f6.js";import"./Overlay.9f8bd32d.js";import"./DateFormatter.88c823e4.js";import"./core.esm.89dc9796.js";import"./isEmpty.e173c07d.js";import"./union.3221e458.js";import"./isString.7b237ac2.js";import"./useGetDownloadListStatistics.2dd86e99.js";import"./QueryCount.7dcd4a3b.js";import"./useGetAccessRequirement.adc2edf4.js";import"./ManagedACTAccessRequirementStatus.1a4b03b8.js";import"./FileUpload.ca13bd57.js";import"./UserSearchBox.53d689e3.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.88f72842.js";import"./EntityLink.7f21612e.js";import"./SynapseVideo.66a6b772.js";import"./IconList.5a836e6c.js";import"./UserCardList.12b6408b.js";const go={parameters:{storySource:{source:`import React from 'react'
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
\${provenance?entityList=syn12548902%2Fversion%2F34&depth=1&displayHeightPx=500&showExpand=true}`};const c=n.bind({});c.args={ownerId:"syn5585645",wikiId:"493662"};const ko=["HardCodedMarkdown","WikiPage","ImageDemo","ButtonLink","ImageBySynID","Plot","SynapseTable","MarkdownProvenanceGraph","HtmlRenderingTest"];export{p as ButtonLink,r as HardCodedMarkdown,c as HtmlRenderingTest,s as ImageBySynID,a as ImageDemo,d as MarkdownProvenanceGraph,m as Plot,l as SynapseTable,i as WikiPage,ko as __namedExportsOrder,go as default};
