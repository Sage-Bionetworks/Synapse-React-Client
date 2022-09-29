import{a as o}from"./CardContainerLogic.b4825774.js";import{j as e}from"./jsx-runtime.697357f5.js";import"./index.8b6b728c.js";import"./index.8f0405d3.js";import"./iframe.1d19b668.js";import"./withStyles.14454601.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.bd767cc3.js";import"./index.57d09176.js";import"./Button.742355f2.js";import"./Transition.375dbede.js";import"./index.35ce73ec.js";import"./isArray.c87d30d5.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.3010e2d4.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.360fd141.js";import"./use-deep-compare-effect.esm.a5cd2f2d.js";import"./uniq.4d4e171f.js";import"./_baseSlice.50189bc5.js";import"./toInteger.56f52414.js";import"./isSymbol.ff12d775.js";import"./_cacheHas.5063ce48.js";import"./without.faf32d56.js";import"./uniqueId.73448b1f.js";import"./_Set.870b3e0a.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.d5b3d424.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.77766464.js";import"./Tooltip.1a172c13.js";import"./createSvgIcon.cf9e16cb.js";import"./slicedToArray.e72f11da.js";import"./useTheme.44d9e479.js";import"./makeStyles.5e65f24d.js";import"./InfoOutlined.35769386.js";import"./ElementWithTooltip.bd2827d1.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.534da499.js";import"./Modal.fcbb73c3.js";import"./useWaitForDOMRef.828b31fe.js";import"./useWillUnmount.9b5a2c88.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.86bb8f57.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.ef0c2b63.js";import"./queryUtils.8071f269.js";import"./useInfiniteQuery.648d993c.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.7e1d80be.js";import"./_baseClone.e9a70637.js";import"./_getTag.43dbf38d.js";import"./useEntity.716de0d7.js";import"./useMutation.ee421791.js";import"./pick.3dd38bcb.js";import"./Checkbox.14ab6e33.js";import"./Collapse.6c4bbd9b.js";import"./RadioGroup.8cd23794.js";import"./moment.a565bb48.js";import"./RangeSlider.fc43c71e.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.43beac83.js";import"./react-sizeme.03435528.js";import"./Skeleton.14ea1888.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.8c45d5c3.js";import"./Typography.d498897e.js";import"./react-select.esm.a37ff2e4.js";import"./Select-54ac8379.esm.5a43974c.js";import"./CustomSelectWidget.b46b6751.js";import"./index.browser.76e49d83.js";import"./react-intersection-observer.esm.0e6b35ce.js";import"./UserCard.95d185a6.js";import"./IconCopy.fecaa4ad.js";import"./SkeletonTable.be714a7f.js";import"./times.f176b5a7.js";import"./ToastMessage.fbccec25.js";import"./FullWidthAlert.429d6e5f.js";import"./Overlay.0e18d899.js";import"./DateFormatter.c104830b.js";import"./core.esm.98d33a43.js";import"./isEmpty.d36a7c65.js";import"./isEqual.4209a9ca.js";import"./union.b16e847f.js";import"./isString.c88d0557.js";import"./useGetDownloadListStatistics.05dcccff.js";import"./QueryCount.b94dfcdc.js";import"./NoData.347c723e.js";import"./useGetAccessRequirement.3a16996b.js";import"./ManagedACTAccessRequirementStatus.16249d41.js";import"./FileUpload.8eb3dc40.js";import"./UserSearchBox.f7e6c1aa.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.00129641.js";import"./EntityLink.41f384d3.js";import"./NoSearchResults.cb67c5a2.js";import"./SynapseVideo.2f614016.js";import"./IconList.91d63bd2.js";import"./UserCardList.1dd01475.js";const mo={parameters:{storySource:{source:`import React from 'react'
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
