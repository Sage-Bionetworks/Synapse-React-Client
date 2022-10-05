import{a as o}from"./CardContainerLogic.65b099cd.js";import{j as e}from"./jsx-runtime.af56d2f4.js";import"./index.a1936379.js";import"./index.34222f2e.js";import"./iframe.51f26e37.js";import"./withStyles.95bfae1f.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.b7090dbd.js";import"./index.57d09176.js";import"./Button.288689e2.js";import"./Transition.66d770ee.js";import"./index.35ce73ec.js";import"./isArray.05e742d7.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.fd305cf0.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.f2ce4d84.js";import"./use-deep-compare-effect.esm.60be9ac1.js";import"./uniq.5db71bfa.js";import"./_baseSlice.50189bc5.js";import"./toInteger.66d32cd8.js";import"./isSymbol.691d7973.js";import"./_cacheHas.e498e8a2.js";import"./without.06c5a2bd.js";import"./uniqueId.fe0a6f5d.js";import"./_Set.739f8f8a.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.6198377b.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.c0856984.js";import"./Tooltip.4363549c.js";import"./createSvgIcon.c99f3a66.js";import"./slicedToArray.e72f11da.js";import"./useTheme.f557cee5.js";import"./makeStyles.0eb241f0.js";import"./InfoOutlined.8f86cf66.js";import"./ElementWithTooltip.a938605e.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.07d6548d.js";import"./Modal.62623140.js";import"./useWaitForDOMRef.7c7cad70.js";import"./useWillUnmount.7ff8c062.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.abd0b162.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.7db17a6c.js";import"./queryUtils.2f601fb6.js";import"./useInfiniteQuery.cc62287f.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.64f407e4.js";import"./_baseClone.8b67dcaf.js";import"./_getTag.69b57b30.js";import"./useEntity.94a0f4bb.js";import"./useMutation.ab9dcaa8.js";import"./pick.21d20b3f.js";import"./Checkbox.1aab543e.js";import"./Collapse.65e9209c.js";import"./RadioGroup.8a51300e.js";import"./moment.a565bb48.js";import"./RangeSlider.469608ef.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.9d9616a9.js";import"./react-sizeme.e05ae4a4.js";import"./Skeleton.b1045233.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.ccaf5fac.js";import"./Typography.add999d3.js";import"./react-select.esm.46680d71.js";import"./Select-54ac8379.esm.f2d2d1c1.js";import"./CustomSelectWidget.99b3c48d.js";import"./index.browser.df438e04.js";import"./react-intersection-observer.esm.589d763b.js";import"./UserCard.2d2cc6f4.js";import"./IconCopy.992e7a95.js";import"./SkeletonTable.88eb5d4e.js";import"./times.41b100ff.js";import"./ToastMessage.8993ec69.js";import"./FullWidthAlert.e0d9cdf3.js";import"./Overlay.a4a42f09.js";import"./DateFormatter.5e09e6a5.js";import"./core.esm.5c6f00d3.js";import"./isEmpty.cacb1333.js";import"./isEqual.cb4edeb2.js";import"./union.4ecb3091.js";import"./isString.ecef5eed.js";import"./useGetDownloadListStatistics.ef9f1eb7.js";import"./QueryCount.db2aa427.js";import"./NoData.1468047f.js";import"./useGetAccessRequirement.8ecd9c93.js";import"./ManagedACTAccessRequirementStatus.a005139e.js";import"./FileUpload.6c56e348.js";import"./UserSearchBox.8bae26c4.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.309089ec.js";import"./EntityLink.ad9d6fdb.js";import"./NoSearchResults.c9ebbd49.js";import"./SynapseVideo.a550c112.js";import"./IconList.63d9fa55.js";import"./UserCardList.5aa92928.js";const mo={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"hard-coded-markdown":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"wiki-page":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"image-demo":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"button-link":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"image-by-syn-id":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},plot:{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"synapse-table":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"markdown-provenance-graph":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}}}}},title:"Markdown/MarkdownSynapse",component:o,argTypes:{}},n=t=>e(o,{...t}),r=n.bind({});r.args={markdown:"*markdown* given to the **component**"};const i=n.bind({});i.args={ownerId:"syn12666371",wikiId:"585317",loadingSkeletonRowCount:20};const a=n.bind({});a.args={ownerId:"syn18142975"};const p=n.bind({});p.args={markdown:`Button link demo 


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
\${provenance?entityList=syn12548902%2Fversion%2F34&depth=1&displayHeightPx=500&showExpand=true}`};const lo=["HardCodedMarkdown","WikiPage","ImageDemo","ButtonLink","ImageBySynID","Plot","SynapseTable","MarkdownProvenanceGraph"];export{p as ButtonLink,r as HardCodedMarkdown,s as ImageBySynID,a as ImageDemo,d as MarkdownProvenanceGraph,m as Plot,l as SynapseTable,i as WikiPage,lo as __namedExportsOrder,mo as default};
