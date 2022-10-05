import{a as o}from"./CardContainerLogic.e7146078.js";import{j as e}from"./jsx-runtime.53ec3a99.js";import"./index.5bc63636.js";import"./index.c935dff9.js";import"./iframe.707dd820.js";import"./withStyles.2fbec1dd.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.89d8effb.js";import"./index.57d09176.js";import"./Button.aa21b764.js";import"./Transition.feec5299.js";import"./index.35ce73ec.js";import"./isArray.afa3346a.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.0bcbfb3f.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.7977be83.js";import"./use-deep-compare-effect.esm.76dab31b.js";import"./uniq.4eed699f.js";import"./_baseSlice.50189bc5.js";import"./toInteger.82734360.js";import"./isSymbol.c005a6aa.js";import"./_cacheHas.5b560c8b.js";import"./without.51d00043.js";import"./uniqueId.84a1f40d.js";import"./_Set.bde41139.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.abcfe016.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.21136110.js";import"./Tooltip.6a46e0c0.js";import"./createSvgIcon.80ece60c.js";import"./slicedToArray.e72f11da.js";import"./useTheme.f82ec4e5.js";import"./makeStyles.0544ad0e.js";import"./InfoOutlined.72aa66a9.js";import"./ElementWithTooltip.c89f258e.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.ae5a36af.js";import"./Modal.c19caf32.js";import"./useWaitForDOMRef.40b36c07.js";import"./useWillUnmount.d1dfdc7e.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.e458f391.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.3afd597e.js";import"./queryUtils.b32e00ab.js";import"./useInfiniteQuery.0347999d.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.5a2bdd9b.js";import"./_baseClone.51a24973.js";import"./_getTag.96ae8cbb.js";import"./useEntity.26e2f507.js";import"./useMutation.d2f1dba7.js";import"./pick.208f5b17.js";import"./Checkbox.4a339933.js";import"./Collapse.089ddc7f.js";import"./RadioGroup.ff6eb1c1.js";import"./moment.a565bb48.js";import"./RangeSlider.0b9fee28.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.d4777b6b.js";import"./react-sizeme.1c12ebad.js";import"./Skeleton.9def93da.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.9496470b.js";import"./Typography.d6d23e6c.js";import"./react-select.esm.194cafc8.js";import"./Select-54ac8379.esm.2e959863.js";import"./CustomSelectWidget.d8bae787.js";import"./index.browser.d857f987.js";import"./react-intersection-observer.esm.51e0956e.js";import"./UserCard.cd843c54.js";import"./IconCopy.65395139.js";import"./SkeletonTable.32a35c51.js";import"./times.3460d620.js";import"./ToastMessage.d2af582b.js";import"./FullWidthAlert.a76adc9d.js";import"./Overlay.973a4260.js";import"./DateFormatter.3544d538.js";import"./core.esm.d9592e6e.js";import"./isEmpty.ac55f7e4.js";import"./isEqual.be980044.js";import"./union.4d10b684.js";import"./isString.e9ef92d3.js";import"./useGetDownloadListStatistics.c01bf7d3.js";import"./QueryCount.db0eb4c4.js";import"./NoData.c38fa66d.js";import"./useGetAccessRequirement.ee7e9ed0.js";import"./ManagedACTAccessRequirementStatus.76ac6345.js";import"./FileUpload.188e4c63.js";import"./UserSearchBox.dc9c716c.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.99f73ac4.js";import"./EntityLink.2c972cbe.js";import"./NoSearchResults.9f09815f.js";import"./SynapseVideo.22e3631b.js";import"./IconList.e59db63e.js";import"./UserCardList.f9998796.js";const mo={parameters:{storySource:{source:`import React from 'react'
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
