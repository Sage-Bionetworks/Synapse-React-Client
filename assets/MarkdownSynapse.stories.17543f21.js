import{a as o}from"./CardContainerLogic.966dcb9a.js";import{j as e}from"./jsx-runtime.77363692.js";import"./index.a732538f.js";import"./index.f99e416a.js";import"./iframe.3e104d71.js";import"./Button.a1ee4a46.js";import"./index.57d09176.js";import"./withStyles.42967b9b.js";import"./utils.1575e991.js";import"./Alert.23dfc2a1.js";import"./index.35ce73ec.js";import"./isArray.c7b11016.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.06dbb4d5.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.5d89fb73.js";import"./use-deep-compare-effect.esm.dcb0f3e4.js";import"./uniq.e64e1927.js";import"./_baseSlice.50189bc5.js";import"./toInteger.f0a03622.js";import"./isSymbol.e0bcd831.js";import"./_cacheHas.9de43c93.js";import"./without.2623ee30.js";import"./uniqueId.0aa98db3.js";import"./_Set.114803e0.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.0948e412.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.38b3ef2f.js";import"./Tooltip.be22d41b.js";import"./createSvgIcon.5dedd617.js";import"./makeStyles.5320a651.js";import"./InfoOutlined.f24d250d.js";import"./FacetNav.9c55ad25.js";import"./queryUtils.914d9742.js";import"./useInfiniteQuery.04db0737.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.6ce6697a.js";import"./_baseClone.c2e775d5.js";import"./_getTag.73a622e1.js";import"./ElementWithTooltip.a6fc5c55.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.53c45092.js";import"./Modal.83aa33c5.js";import"./useWaitForDOMRef.d6e52f67.js";import"./inheritsLoose.0dea07e6.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.8b85cd62.js";import"./isRequiredForA11y.20ed4857.js";import"./useEntity.e09d1558.js";import"./useMutation.eec4ce2b.js";import"./pick.d2f5354f.js";import"./Checkbox.b51365a3.js";import"./RadioGroup.b9612945.js";import"./moment.a565bb48.js";import"./RangeSlider.2d16df7a.js";import"./factory.3991fa84.js";import"./react-sizeme.f0753498.js";import"./Skeleton.5e1e1a25.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.92385dfe.js";import"./Typography.ce6b431d.js";import"./Close.0cccf407.js";import"./react-select.esm.bb6ed8c2.js";import"./Select-54ac8379.esm.64cb46c5.js";import"./CustomSelectWidget.740bac5b.js";import"./index.browser.8e80d642.js";import"./WarningModal.63841fbd.js";import"./react-intersection-observer.esm.bb6dbf1a.js";import"./UserCard.49fb0f82.js";import"./IconCopy.6cf649ca.js";import"./SkeletonTable.56e7de4d.js";import"./times.6412c2aa.js";import"./ToastMessage.b3f610fb.js";import"./FullWidthAlert.23cfe207.js";import"./Overlay.7aec48c8.js";import"./DateFormatter.2ae44782.js";import"./core.esm.fac6a271.js";import"./isEmpty.05b749b8.js";import"./isEqual.a46c2c02.js";import"./union.a158ee87.js";import"./isString.6eb15be9.js";import"./useGetDownloadListStatistics.c21e74a7.js";import"./QueryCount.6307145e.js";import"./NoData.4d33c0c0.js";import"./useGetAccessRequirement.c02616c6.js";import"./ManagedACTAccessRequirementStatus.196bafed.js";import"./FileUpload.f5a5a9d7.js";import"./UserSearchBox.3e89a8b3.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.5896bf5f.js";import"./EntityLink.3426709b.js";import"./NoSearchResults.67a76d07.js";import"./SynapseVideo.6ab04233.js";import"./IconList.41a7ba37.js";import"./UserCardList.fa2df136.js";const io={parameters:{storySource:{source:`import React from 'react'
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
