import{a as o}from"./CardContainerLogic.4868b183.js";import{j as e}from"./jsx-runtime.0547954a.js";import"./index.22793847.js";import"./index.9a22ba50.js";import"./iframe.bc1355ce.js";import"./withStyles.5f371c18.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.320f728d.js";import"./index.57d09176.js";import"./Button.faa197e5.js";import"./Transition.c74a9bc3.js";import"./index.35ce73ec.js";import"./isArray.dc0d9748.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.20c60b09.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.481bb687.js";import"./use-deep-compare-effect.esm.4976a8bf.js";import"./uniq.c41b546c.js";import"./_baseSlice.50189bc5.js";import"./toInteger.0a662c7d.js";import"./isSymbol.56654682.js";import"./_cacheHas.88e0e600.js";import"./without.f6119cfc.js";import"./uniqueId.6d625886.js";import"./_Set.3f09d130.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.48e580f3.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.b92ea12f.js";import"./Tooltip.d59517ea.js";import"./createSvgIcon.13c982df.js";import"./slicedToArray.e72f11da.js";import"./useTheme.f4071482.js";import"./makeStyles.68b76b6a.js";import"./InfoOutlined.5164ccbb.js";import"./ElementWithTooltip.c802fa1e.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.b5b5b14d.js";import"./Modal.b4906af9.js";import"./useWaitForDOMRef.f571d6d7.js";import"./useWillUnmount.7d35f155.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.692ae3ac.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.68e7a946.js";import"./queryUtils.ad5ed7d4.js";import"./useInfiniteQuery.cb887234.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.798853ad.js";import"./_baseClone.2f23fbad.js";import"./_getTag.d668d291.js";import"./useEntity.c38cbc1b.js";import"./useMutation.bc8b1814.js";import"./pick.8d03c6fd.js";import"./Checkbox.f5838e99.js";import"./Collapse.c3e8e528.js";import"./RadioGroup.c420300f.js";import"./moment.a565bb48.js";import"./RangeSlider.605e469d.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.6d5f7452.js";import"./react-sizeme.1d475b1d.js";import"./Skeleton.ef288fce.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.05f09278.js";import"./Typography.5de44d5b.js";import"./react-select.esm.95790458.js";import"./Select-54ac8379.esm.46a0827d.js";import"./CustomSelectWidget.1878bd21.js";import"./index.browser.3e0c1c5e.js";import"./react-intersection-observer.esm.9e0b6fc2.js";import"./UserCard.8cf176e1.js";import"./IconCopy.a47d91ec.js";import"./SkeletonTable.bc06b926.js";import"./times.ccd7af32.js";import"./ToastMessage.0f10ae0c.js";import"./FullWidthAlert.8329478a.js";import"./Overlay.3bbd300f.js";import"./DateFormatter.483ace28.js";import"./core.esm.cc7a450a.js";import"./isEmpty.443bf1e0.js";import"./isEqual.adb44ebd.js";import"./union.05e04a14.js";import"./isString.18ee8e39.js";import"./useGetDownloadListStatistics.1131e7c7.js";import"./QueryCount.0ec6e9c7.js";import"./NoData.71b44b9c.js";import"./useGetAccessRequirement.f7c36ef5.js";import"./ManagedACTAccessRequirementStatus.d48e92d0.js";import"./FileUpload.b34b9f80.js";import"./UserSearchBox.abe28ee4.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.6c6b0801.js";import"./EntityLink.87749aec.js";import"./NoSearchResults.347f9d24.js";import"./SynapseVideo.de275625.js";import"./IconList.e44c22b6.js";import"./UserCardList.09c42190.js";const mo={parameters:{storySource:{source:`import React from 'react'
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
