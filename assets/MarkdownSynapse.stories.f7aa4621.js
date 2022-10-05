import{a as o}from"./CardContainerLogic.85094e92.js";import{j as e}from"./jsx-runtime.e50ee014.js";import"./index.b742691b.js";import"./index.f04aa5e6.js";import"./iframe.ed5db637.js";import"./withStyles.8f619333.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.9942996b.js";import"./index.57d09176.js";import"./Button.3658dda2.js";import"./Transition.bad86374.js";import"./index.35ce73ec.js";import"./isArray.bf4f000b.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.c8899896.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.d89abd16.js";import"./use-deep-compare-effect.esm.20647236.js";import"./uniq.f14349e8.js";import"./_baseSlice.50189bc5.js";import"./toInteger.5d2f4b0e.js";import"./isSymbol.5d0c998d.js";import"./_cacheHas.82e3ba6e.js";import"./without.269ffb6f.js";import"./uniqueId.b8a4404e.js";import"./_Set.d949c813.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.e4714c7a.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.f9f187ed.js";import"./Tooltip.87729932.js";import"./createSvgIcon.f8724b3b.js";import"./slicedToArray.e72f11da.js";import"./useTheme.f39e60b9.js";import"./makeStyles.436c1230.js";import"./InfoOutlined.06cf4881.js";import"./ElementWithTooltip.34c4c875.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.6b97ac7e.js";import"./Modal.dbfb920f.js";import"./useWaitForDOMRef.19e54275.js";import"./useWillUnmount.c562dce3.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.cad35c33.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.5fbb561e.js";import"./queryUtils.b793be1c.js";import"./useInfiniteQuery.be01094f.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.0414e1ff.js";import"./_baseClone.711d1a04.js";import"./_getTag.291304b4.js";import"./useEntity.44357283.js";import"./useMutation.6d9babbc.js";import"./pick.08c10745.js";import"./Checkbox.d21081cb.js";import"./Collapse.261e02d1.js";import"./RadioGroup.dcb4db4a.js";import"./moment.a565bb48.js";import"./RangeSlider.dd25bc15.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.1a0d6246.js";import"./react-sizeme.6eb3369a.js";import"./Skeleton.09528c75.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.4753e31c.js";import"./Typography.710a5cec.js";import"./react-select.esm.34809225.js";import"./Select-54ac8379.esm.e66ee859.js";import"./CustomSelectWidget.a78e83ff.js";import"./index.browser.f19486ac.js";import"./react-intersection-observer.esm.ad9bf078.js";import"./UserCard.2fd34122.js";import"./IconCopy.e7e13389.js";import"./SkeletonTable.fbfdf495.js";import"./times.193d0ecb.js";import"./ToastMessage.c7c8ad52.js";import"./FullWidthAlert.dc80d875.js";import"./Overlay.9ef918a3.js";import"./DateFormatter.ff205244.js";import"./core.esm.506cff9d.js";import"./isEmpty.67b3a200.js";import"./isEqual.eb83054b.js";import"./union.e911ba3a.js";import"./isString.77865ac7.js";import"./useGetDownloadListStatistics.4e723e09.js";import"./QueryCount.328adff2.js";import"./NoData.7f1bc903.js";import"./useGetAccessRequirement.1e37d564.js";import"./ManagedACTAccessRequirementStatus.65fdeea6.js";import"./FileUpload.d40b695f.js";import"./UserSearchBox.7d6d6541.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.2a022306.js";import"./EntityLink.e38d8006.js";import"./NoSearchResults.04e1840e.js";import"./SynapseVideo.79cfe0f1.js";import"./IconList.842b4f10.js";import"./UserCardList.83f186e8.js";const mo={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"hard-coded-markdown":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"wiki-page":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"image-demo":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"button-link":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"image-by-syn-id":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},plot:{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"synapse-table":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"markdown-provenance-graph":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}}}}},title:"Markdown/MarkdownSynapse",component:o,argTypes:{}},n=t=>e(o,{...t}),r=n.bind({});r.args={markdown:"*markdown* given to the **component**"};const i=n.bind({});i.args={ownerId:"syn12666371",wikiId:"585317"};const a=n.bind({});a.args={ownerId:"syn18142975"};const p=n.bind({});p.args={markdown:`Button link demo 


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
