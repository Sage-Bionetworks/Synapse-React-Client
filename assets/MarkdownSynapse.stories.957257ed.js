import{a as o}from"./CardContainerLogic.8fd991da.js";import{j as e}from"./jsx-runtime.4cd7f6c3.js";import"./index.7cb9050b.js";import"./index.c5ec5593.js";import"./iframe.27dce855.js";import"./Button.cfb6901e.js";import"./index.57d09176.js";import"./withStyles.3f185fef.js";import"./utils.3d3cd8c3.js";import"./Alert.151390cd.js";import"./index.35ce73ec.js";import"./isArray.cef144cc.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.7b92dd2c.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.ec0a93c7.js";import"./use-deep-compare-effect.esm.385e4e00.js";import"./uniq.160e9df6.js";import"./_baseSlice.50189bc5.js";import"./toInteger.d15c5de9.js";import"./isSymbol.678ebc7d.js";import"./_cacheHas.c7472e8e.js";import"./without.fb12d218.js";import"./uniqueId.e78092cb.js";import"./_Set.899b48a3.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.6e720173.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.79902b8b.js";import"./Tooltip.6e492e82.js";import"./createSvgIcon.eca8b7b9.js";import"./makeStyles.e394e1e5.js";import"./InfoOutlined.51a57d77.js";import"./ElementWithTooltip.33ef3f15.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.599241b8.js";import"./Modal.434f2321.js";import"./useWaitForDOMRef.29c68d44.js";import"./inheritsLoose.a675f57d.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.bf256e8b.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.7c323179.js";import"./queryUtils.a3edefc3.js";import"./useInfiniteQuery.434b28c9.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.d1e1f319.js";import"./_baseClone.dd6d5204.js";import"./_getTag.709594e5.js";import"./useEntity.c6428aa0.js";import"./useMutation.6d3cc29c.js";import"./pick.22144651.js";import"./Checkbox.e8fb2f35.js";import"./RadioGroup.8469addd.js";import"./moment.a565bb48.js";import"./RangeSlider.97251b5c.js";import"./factory.f33f2ea2.js";import"./react-sizeme.b7d24b87.js";import"./Skeleton.a445d31b.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.2d10a928.js";import"./Typography.ad724512.js";import"./Close.d3395515.js";import"./react-select.esm.6df07d80.js";import"./Select-54ac8379.esm.b71cede4.js";import"./CustomSelectWidget.8fdd3b39.js";import"./index.browser.9cb314e6.js";import"./WarningModal.35db236b.js";import"./react-intersection-observer.esm.f5010878.js";import"./UserCard.e68af1d5.js";import"./IconCopy.d103f0a0.js";import"./SkeletonTable.b62e268e.js";import"./times.d7ad11d2.js";import"./ToastMessage.7ffa621b.js";import"./FullWidthAlert.6976790a.js";import"./Overlay.cc756cad.js";import"./DateFormatter.e81071da.js";import"./core.esm.86cff8d0.js";import"./isEmpty.3d7ee96d.js";import"./isEqual.0f537726.js";import"./union.5b8016cf.js";import"./isString.17de64d3.js";import"./useGetDownloadListStatistics.7a98d943.js";import"./QueryCount.6dfb9cf4.js";import"./NoData.9d58c31e.js";import"./useGetAccessRequirement.916ee0ac.js";import"./ManagedACTAccessRequirementStatus.dc008bff.js";import"./FileUpload.9b09768a.js";import"./UserSearchBox.d4819085.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.8b6edb1b.js";import"./EntityLink.c2453954.js";import"./NoSearchResults.7ff9fab4.js";import"./SynapseVideo.7d5e4403.js";import"./IconList.f8fae304.js";import"./UserCardList.7a2d22c9.js";const io={parameters:{storySource:{source:`import React from 'react'
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
