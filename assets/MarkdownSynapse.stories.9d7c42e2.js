import{a as o}from"./CardContainerLogic.4c2772e2.js";import{j as e}from"./jsx-runtime.94e3dcbc.js";import"./index.c285f2ad.js";import"./index.189336ba.js";import"./iframe.7112cc2f.js";import"./withStyles.25512efa.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.a8f3dea8.js";import"./index.57d09176.js";import"./Button.ee922916.js";import"./Transition.aafae1a0.js";import"./index.35ce73ec.js";import"./isArray.74b811f1.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.972646c7.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.87ab6772.js";import"./use-deep-compare-effect.esm.46a58aa4.js";import"./uniq.4ad2b73b.js";import"./_baseSlice.50189bc5.js";import"./toInteger.f3d0fd1c.js";import"./isSymbol.9ddd9e86.js";import"./_cacheHas.cd26227f.js";import"./without.227ff1e6.js";import"./uniqueId.5395311d.js";import"./_Set.c5c4b096.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.f94adadb.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.6490189f.js";import"./Tooltip.7e80f23c.js";import"./createSvgIcon.aba3ff90.js";import"./slicedToArray.e72f11da.js";import"./useTheme.90c94c01.js";import"./makeStyles.13257dd8.js";import"./InfoOutlined.c8be42fa.js";import"./ElementWithTooltip.7d361f05.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.2bb7fbbe.js";import"./Modal.7dcfaa17.js";import"./useWaitForDOMRef.bc6c94c4.js";import"./useWillUnmount.84231f67.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.e98e3e3e.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.d2cfd964.js";import"./queryUtils.22849ec3.js";import"./useInfiniteQuery.26111c62.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.f4f228fc.js";import"./_baseClone.17fc432f.js";import"./_getTag.3392221e.js";import"./useEntity.d65d96ee.js";import"./useMutation.c5d547ae.js";import"./pick.9facd995.js";import"./Checkbox.833fdcb5.js";import"./Collapse.adc95d49.js";import"./RadioGroup.f950f76d.js";import"./moment.a565bb48.js";import"./RangeSlider.eaa4fa18.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.12497989.js";import"./react-sizeme.44a0d31f.js";import"./Skeleton.01b7e31d.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.529ceff5.js";import"./Typography.c058b4a5.js";import"./react-select.esm.215869ba.js";import"./Select-54ac8379.esm.e2fb5a25.js";import"./CustomSelectWidget.21ab911a.js";import"./index.browser.fb81d43f.js";import"./react-intersection-observer.esm.3e3b24c0.js";import"./UserCard.48cdfe31.js";import"./IconCopy.dc0169b8.js";import"./SkeletonTable.7da12e22.js";import"./times.37cc76dc.js";import"./ToastMessage.8eafdcee.js";import"./FullWidthAlert.50b3fdeb.js";import"./Overlay.4edc376f.js";import"./DateFormatter.14ac3320.js";import"./core.esm.9926837d.js";import"./isEmpty.879e59dd.js";import"./isEqual.183dee45.js";import"./union.0417b8dd.js";import"./isString.6ea5fc0d.js";import"./useGetDownloadListStatistics.24d2dedc.js";import"./QueryCount.14514676.js";import"./NoData.a43fb8b4.js";import"./useGetAccessRequirement.73dbc519.js";import"./ManagedACTAccessRequirementStatus.c1aa9693.js";import"./FileUpload.fd2e2f00.js";import"./UserSearchBox.3f6994f4.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.235dbb93.js";import"./EntityLink.7a33b226.js";import"./NoSearchResults.aa63dc7b.js";import"./SynapseVideo.8395891c.js";import"./IconList.0d3f8d3d.js";import"./UserCardList.34dd8ba6.js";const mo={parameters:{storySource:{source:`import React from 'react'
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
