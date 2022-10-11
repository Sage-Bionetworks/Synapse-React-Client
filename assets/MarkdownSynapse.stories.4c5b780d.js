import{a as o}from"./CardContainerLogic.8eb79f67.js";import{j as e}from"./jsx-runtime.f6e67d69.js";import"./index.399b1ebb.js";import"./index.5aa44f42.js";import"./iframe.0155d3d5.js";import"./Alert.161bc8be.js";import"./Button.bb6df31f.js";import"./index.57d09176.js";import"./Transition.45107636.js";import"./index.35ce73ec.js";import"./isArray.bbc3389f.js";import"./withStyles.e9153c6c.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.b9f91416.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.e787fd80.js";import"./use-deep-compare-effect.esm.9fbef6c8.js";import"./uniq.3ac68f6d.js";import"./_baseSlice.50189bc5.js";import"./toInteger.6ecd4cc2.js";import"./isSymbol.817739da.js";import"./_cacheHas.fc28b5e2.js";import"./without.de70e7ae.js";import"./uniqueId.b369d35f.js";import"./_Set.5337c941.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.183d2b65.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.76f9c9ad.js";import"./Tooltip.e69703f2.js";import"./createSvgIcon.1bc5e790.js";import"./useTheme.b5d1a103.js";import"./makeStyles.b3ebb6fc.js";import"./InfoOutlined.6b0ecc0d.js";import"./ElementWithTooltip.b5092525.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.1c5534ea.js";import"./Modal.50361e04.js";import"./useWaitForDOMRef.132cafe6.js";import"./inheritsLoose.e00878bc.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.9f59499b.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.e9c5d9db.js";import"./queryUtils.78d610e1.js";import"./useInfiniteQuery.409ad78a.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.88bcbe9b.js";import"./_baseClone.ecc3e8dc.js";import"./_getTag.9119bcb7.js";import"./useEntity.50d0ee88.js";import"./useMutation.40e1a364.js";import"./pick.26fadd1c.js";import"./Checkbox.0d1a5d69.js";import"./Collapse.5bef12a9.js";import"./RadioGroup.af506903.js";import"./moment.a565bb48.js";import"./RangeSlider.06468401.js";import"./factory.9dd574be.js";import"./react-sizeme.f3b24b9a.js";import"./Skeleton.e925cd71.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.e87e514d.js";import"./Typography.8482fe8d.js";import"./react-select.esm.7e14925b.js";import"./Select-54ac8379.esm.4ecb5386.js";import"./CustomSelectWidget.3b55fea6.js";import"./index.browser.94009a96.js";import"./WarningModal.f87be017.js";import"./react-intersection-observer.esm.88b7b49d.js";import"./UserCard.c2f5359e.js";import"./IconCopy.bae338e3.js";import"./SkeletonTable.7ca00999.js";import"./times.8c0d57e8.js";import"./ToastMessage.ef3fd930.js";import"./FullWidthAlert.a36cfcd9.js";import"./Overlay.2be5ac15.js";import"./DateFormatter.ddf3e9f0.js";import"./core.esm.e018ab8d.js";import"./isEmpty.fe96177f.js";import"./isEqual.e452e983.js";import"./union.f7dcf0c1.js";import"./isString.172bf1ca.js";import"./useGetDownloadListStatistics.098c2be3.js";import"./QueryCount.3c5279b3.js";import"./NoData.5d71843d.js";import"./useGetAccessRequirement.8d39abbd.js";import"./ManagedACTAccessRequirementStatus.f4931fe7.js";import"./FileUpload.bfe00a27.js";import"./UserSearchBox.24c16fe5.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.b633a9dc.js";import"./EntityLink.58d8c244.js";import"./NoSearchResults.bdc973ca.js";import"./SynapseVideo.7302a8fd.js";import"./IconList.3707af09.js";import"./UserCardList.12bbb1f9.js";const ao={parameters:{storySource:{source:`import React from 'react'
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
\${provenance?entityList=syn12548902%2Fversion%2F34&depth=1&displayHeightPx=500&showExpand=true}`};const c=n.bind({});c.args={ownerId:"syn5585645",wikiId:"493662"};const po=["HardCodedMarkdown","WikiPage","ImageDemo","ButtonLink","ImageBySynID","Plot","SynapseTable","MarkdownProvenanceGraph","HtmlRenderingTest"];export{p as ButtonLink,r as HardCodedMarkdown,c as HtmlRenderingTest,s as ImageBySynID,a as ImageDemo,d as MarkdownProvenanceGraph,m as Plot,l as SynapseTable,i as WikiPage,po as __namedExportsOrder,ao as default};
