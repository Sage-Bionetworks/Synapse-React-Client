import{a as o}from"./CardContainerLogic.f69dae4e.js";import{j as e}from"./jsx-runtime.1225fe79.js";import"./index.5ba93209.js";import"./index.ecba92b3.js";import"./iframe.0fc0719c.js";import"./withStyles.65e61172.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.ffb572e5.js";import"./index.57d09176.js";import"./Button.63b1a959.js";import"./Transition.e362bf9f.js";import"./index.35ce73ec.js";import"./isArray.12f7965d.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.e9f5a006.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.a0a2160f.js";import"./use-deep-compare-effect.esm.4142315a.js";import"./uniq.074f12a5.js";import"./_baseSlice.50189bc5.js";import"./toInteger.b9b2999c.js";import"./isSymbol.aedbfa18.js";import"./_cacheHas.b0dcf809.js";import"./without.841d30b7.js";import"./uniqueId.e4d116e8.js";import"./_Set.bd47b98f.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.301d752e.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.194d4170.js";import"./Tooltip.ef3cac5b.js";import"./createSvgIcon.e824e175.js";import"./slicedToArray.e72f11da.js";import"./useTheme.ec45c4f6.js";import"./makeStyles.3ea686be.js";import"./InfoOutlined.a9437cb5.js";import"./ElementWithTooltip.2bd102e3.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.81d7ee62.js";import"./Modal.a0e2b98e.js";import"./useWaitForDOMRef.f0f2f2e1.js";import"./useWillUnmount.9fae65cc.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.0a21972a.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.8d813cfe.js";import"./queryUtils.4bbd7789.js";import"./useInfiniteQuery.ec5dd77c.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.9049580f.js";import"./_baseClone.d7be4d9e.js";import"./_getTag.05216d42.js";import"./useEntity.8206b3c7.js";import"./useMutation.2c776238.js";import"./pick.e68a58ee.js";import"./Checkbox.81ac9770.js";import"./Collapse.db882e02.js";import"./RadioGroup.880a066b.js";import"./moment.a565bb48.js";import"./RangeSlider.8adaf485.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.4da8ff9f.js";import"./react-sizeme.6e834905.js";import"./Skeleton.ad3e32c6.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.9db387c0.js";import"./Typography.f29a9c1b.js";import"./react-select.esm.60203cdd.js";import"./Select-54ac8379.esm.79fa9ed4.js";import"./CustomSelectWidget.877f0e9a.js";import"./index.browser.dcec01dc.js";import"./react-intersection-observer.esm.ce392905.js";import"./UserCard.bfed225a.js";import"./IconCopy.86985968.js";import"./SkeletonTable.fa38a229.js";import"./times.0d5d25c2.js";import"./ToastMessage.55c99787.js";import"./FullWidthAlert.697d5521.js";import"./Overlay.4005d66e.js";import"./DateFormatter.59dc89d9.js";import"./core.esm.9c88542e.js";import"./isEmpty.1db83ad6.js";import"./isEqual.9819111f.js";import"./union.e086287a.js";import"./isString.6af799c1.js";import"./useGetDownloadListStatistics.6cf6ac68.js";import"./QueryCount.20e6713f.js";import"./NoData.2b664c92.js";import"./useGetAccessRequirement.09510a5a.js";import"./ManagedACTAccessRequirementStatus.625a8fa7.js";import"./FileUpload.f580243b.js";import"./UserSearchBox.c0389190.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.116c0c23.js";import"./EntityLink.b3b78eaf.js";import"./NoSearchResults.2986a599.js";import"./SynapseVideo.9defc544.js";import"./IconList.807147f2.js";import"./UserCardList.1d2578d3.js";const mo={parameters:{storySource:{source:`import React from 'react'
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
