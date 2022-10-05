import{a as o}from"./CardContainerLogic.0bb2be6b.js";import{j as e}from"./jsx-runtime.b98719ac.js";import"./index.aa213b73.js";import"./index.f0bb0570.js";import"./iframe.1e793943.js";import"./withStyles.79d10ad6.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.cf52bce4.js";import"./index.57d09176.js";import"./Button.ed04e3a1.js";import"./Transition.ac6e0624.js";import"./index.35ce73ec.js";import"./isArray.3c258aa7.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.4537d0f4.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.b6e5afcc.js";import"./use-deep-compare-effect.esm.50735a27.js";import"./uniq.09cd5a40.js";import"./_baseSlice.50189bc5.js";import"./toInteger.c2538338.js";import"./isSymbol.a85127bf.js";import"./_cacheHas.aa561bc1.js";import"./without.31ba113b.js";import"./uniqueId.ff2face8.js";import"./_Set.f8baf759.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.a013333a.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.3b0efcae.js";import"./Tooltip.5964f419.js";import"./createSvgIcon.63cd09dc.js";import"./slicedToArray.e72f11da.js";import"./useTheme.cca4eae4.js";import"./makeStyles.9e8f686a.js";import"./InfoOutlined.d5bf38f7.js";import"./ElementWithTooltip.924c8e47.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.da2cde4b.js";import"./Modal.2e6706f7.js";import"./useWaitForDOMRef.c589d2c1.js";import"./useWillUnmount.dd64b5e7.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.6073b2bb.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.d41bdf6d.js";import"./queryUtils.eabcf05a.js";import"./useInfiniteQuery.791ee0ea.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.14f585b8.js";import"./_baseClone.890585db.js";import"./_getTag.9bd73f4c.js";import"./useEntity.27566552.js";import"./useMutation.ac6d7a73.js";import"./pick.cb474b1a.js";import"./Checkbox.6b2c2336.js";import"./Collapse.c32d9e10.js";import"./RadioGroup.8ce3add8.js";import"./moment.a565bb48.js";import"./RangeSlider.f70af8d7.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.9b1d9c3f.js";import"./react-sizeme.d363bd46.js";import"./Skeleton.f404fa8e.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.2f4c0bf8.js";import"./Typography.7f563934.js";import"./react-select.esm.77c55a34.js";import"./Select-54ac8379.esm.cc7c718b.js";import"./CustomSelectWidget.637430c8.js";import"./index.browser.7422f34a.js";import"./react-intersection-observer.esm.536fb05c.js";import"./UserCard.549fd8e6.js";import"./IconCopy.da365123.js";import"./SkeletonTable.385954e0.js";import"./times.b847c83d.js";import"./ToastMessage.608252d2.js";import"./FullWidthAlert.974c42f3.js";import"./Overlay.c6e37c77.js";import"./DateFormatter.a70ec294.js";import"./core.esm.f75f708e.js";import"./isEmpty.a203c2fe.js";import"./isEqual.1aee220f.js";import"./union.9d096b47.js";import"./isString.9e2ade47.js";import"./useGetDownloadListStatistics.c0cafcda.js";import"./QueryCount.41149181.js";import"./NoData.1a1f481a.js";import"./useGetAccessRequirement.566e1590.js";import"./ManagedACTAccessRequirementStatus.8e140c9c.js";import"./FileUpload.0973ea3c.js";import"./UserSearchBox.630138eb.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.11369adf.js";import"./EntityLink.650443f0.js";import"./NoSearchResults.e7aeb895.js";import"./SynapseVideo.dbd7e6b3.js";import"./IconList.cac1d00b.js";import"./UserCardList.6574b6c8.js";const mo={parameters:{storySource:{source:`import React from 'react'
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
