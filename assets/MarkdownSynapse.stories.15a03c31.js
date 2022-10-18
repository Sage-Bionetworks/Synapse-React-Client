import{a as o}from"./CardContainerLogic.836d5c1f.js";import{j as e}from"./jsx-runtime.a4497586.js";import"./index.845be1a0.js";import"./index.917fd15d.js";import"./iframe.ee324841.js";import"./Button.7ac62e85.js";import"./index.57d09176.js";import"./withStyles.e58effce.js";import"./utils.815e1282.js";import"./Alert.ea5d26f8.js";import"./index.35ce73ec.js";import"./isArray.c41320ad.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.22d8eb07.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.dc6e91e8.js";import"./use-deep-compare-effect.esm.97258745.js";import"./uniq.a2b94e52.js";import"./_baseSlice.50189bc5.js";import"./toInteger.0f367a79.js";import"./isSymbol.7191624c.js";import"./_cacheHas.5a4b096a.js";import"./without.27df27c9.js";import"./uniqueId.d008468a.js";import"./_Set.0ea9e224.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.c2b44a8a.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.840b4acb.js";import"./Tooltip.a6d04027.js";import"./createSvgIcon.e5aecfe8.js";import"./makeStyles.589ac29c.js";import"./InfoOutlined.5d54a47c.js";import"./ElementWithTooltip.4569d621.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.efcfb1fd.js";import"./Modal.8e373f50.js";import"./useWaitForDOMRef.e71a20e5.js";import"./inheritsLoose.3afb7370.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.8523f7d7.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.32e180c2.js";import"./queryUtils.a41a3769.js";import"./useInfiniteQuery.61b1e683.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.d2ac0db5.js";import"./_baseClone.0d27c7e1.js";import"./_getTag.e16a82bc.js";import"./useEntity.9bdacd03.js";import"./useMutation.ac0673eb.js";import"./pick.e2ee535b.js";import"./Checkbox.e9f9feef.js";import"./RadioGroup.8eea9b11.js";import"./moment.a565bb48.js";import"./RangeSlider.c1a90a81.js";import"./factory.c28b2d87.js";import"./react-sizeme.595c45d1.js";import"./Skeleton.9af51d39.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.a29748b1.js";import"./Typography.15373abf.js";import"./Close.0c3b37eb.js";import"./react-select.esm.fa71d62c.js";import"./Select-54ac8379.esm.1b620f4e.js";import"./CustomSelectWidget.05a3828a.js";import"./index.browser.48facac8.js";import"./WarningModal.49e6d1d4.js";import"./react-intersection-observer.esm.360ca53f.js";import"./UserCard.ea6608ec.js";import"./IconCopy.6d9a9cc0.js";import"./SkeletonTable.5f0641c1.js";import"./times.53464203.js";import"./ToastMessage.29ea9537.js";import"./FullWidthAlert.6e6e96b4.js";import"./Overlay.7abe92df.js";import"./DateFormatter.bc7fcbb4.js";import"./core.esm.e85b24d4.js";import"./isEmpty.ce343696.js";import"./isEqual.dcdf7c74.js";import"./union.6518de9c.js";import"./isString.c48687a7.js";import"./useGetDownloadListStatistics.b2b3a576.js";import"./QueryCount.e6efbfd3.js";import"./NoData.35d75376.js";import"./useGetAccessRequirement.20a2228d.js";import"./ManagedACTAccessRequirementStatus.3d74029d.js";import"./FileUpload.897dc886.js";import"./UserSearchBox.1dfa0f09.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.34f13a28.js";import"./EntityLink.b8238cd5.js";import"./NoSearchResults.705442e7.js";import"./SynapseVideo.d503a679.js";import"./IconList.6148c9b2.js";import"./UserCardList.6980500a.js";const io={parameters:{storySource:{source:`import React from 'react'
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
\${provenance?entityList=syn12548902%2Fversion%2F34&depth=1&displayHeightPx=500&showExpand=true}`};const c=n.bind({});c.args={ownerId:"syn5585645",wikiId:"493662"};const ao=["HardCodedMarkdown","WikiPage","ImageDemo","ButtonLink","ImageBySynID","Plot","SynapseTable","MarkdownProvenanceGraph","HtmlRenderingTest"];export{p as ButtonLink,r as HardCodedMarkdown,c as HtmlRenderingTest,s as ImageBySynID,a as ImageDemo,d as MarkdownProvenanceGraph,m as Plot,l as SynapseTable,i as WikiPage,ao as __namedExportsOrder,io as default};
