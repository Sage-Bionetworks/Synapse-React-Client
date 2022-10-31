import{a as o}from"./CardContainerLogic.f0ec455f.js";import{j as e}from"./jsx-runtime.b29a5274.js";import"./index.dcde5598.js";import"./index.73e3d9d7.js";import"./iframe.45f65fdb.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.c77a6de6.js";import"./index.57d09176.js";import"./withStyles.2d1152f5.js";import"./utils.c867bc57.js";import"./Alert.5f5d4d35.js";import"./createWithBsPrefix.2e8fbe6b.js";import"./index.35ce73ec.js";import"./isArray.0036f9bf.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.5f62e5e7.js";import"./sqlFunctions.a660c34a.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.c3d3eddf.js";import"./TypeUtils.a2c41307.js";import"./useGetInfoFromIds.987bdce4.js";import"./use-deep-compare-effect.esm.6fd3cff2.js";import"./uniq.638d0678.js";import"./_baseSlice.50189bc5.js";import"./toInteger.8f4cfb94.js";import"./isSymbol.9796f8db.js";import"./_cacheHas.f4993e5b.js";import"./without.cbf4274d.js";import"./uniqueId.759a0be8.js";import"./_Set.14ba8e4b.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.8faf30b2.js";import"./IconSvg.9f77ee65.js";import"./Tooltip.76e779de.js";import"./createSvgIcon.363a4d4a.js";import"./makeStyles.90bec0f4.js";import"./InfoOutlined.e9bf0eda.js";import"./FacetNav.b6c35844.js";import"./queryUtils.2742e34a.js";import"./useInfiniteQuery.d24d0056.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.ca314ea1.js";import"./_baseClone.6b2ce6e1.js";import"./_getTag.88993a13.js";import"./NoSearchResults.c32e2263.js";import"./NoData.c8e3cb03.js";import"./unCamelCase.07e38083.js";import"./useEntity.3eb8931f.js";import"./useMutation.7b9e5247.js";import"./pick.2bd59cca.js";import"./isEqual.85b5a6ad.js";import"./ElementWithTooltip.28c55a12.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.4147a8b4.js";import"./usePrevious.b750bb14.js";import"./contains.86bdf9ac.js";import"./usePopperMarginModifiers.5d89d5c2.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.b10f9bff.js";import"./RadioGroup.b29639f6.js";import"./moment.a565bb48.js";import"./RangeSlider.c9068914.js";import"./factory.737a5844.js";import"./react-sizeme.73155a78.js";import"./Skeleton.c9932f2f.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.a52a3a17.js";import"./Typography.e39b1a57.js";import"./Modal.1f2af341.js";import"./inheritsLoose.02d2a797.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.f3a64467.js";import"./SelectionCriteriaPill.7779b758.js";import"./Close.9a7b3a99.js";import"./react-select.esm.a7bca0cc.js";import"./Select-54ac8379.esm.f0abb30f.js";import"./CustomSelectWidget.d4114699.js";import"./index.browser.376825fc.js";import"./UserCard.1da63075.js";import"./IconCopy.fa0d8a51.js";import"./SkeletonTable.94c4c988.js";import"./times.52672c9d.js";import"./ToastMessage.cdfb50d6.js";import"./FullWidthAlert.3cefffa2.js";import"./Overlay.14a6d56e.js";import"./WarningModal.559d4a18.js";import"./react-intersection-observer.esm.d88e3022.js";import"./DateFormatter.a6b80fa8.js";import"./core.esm.47975909.js";import"./isEmpty.e477a37c.js";import"./union.2f1025d7.js";import"./isString.efbbdc94.js";import"./useGetDownloadListStatistics.6b4b1459.js";import"./QueryCount.ae1d7c79.js";import"./useGetAccessRequirement.172f6b7e.js";import"./ManagedACTAccessRequirementStatus.6087eccb.js";import"./FileUpload.37f2faa4.js";import"./UserSearchBox.e5ec82c0.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.a2cc2c28.js";import"./EntityLink.43518ecd.js";import"./SynapseVideo.26c329a2.js";import"./IconList.adc62b28.js";import"./UserCardList.b78be9fd.js";const go={parameters:{storySource:{source:`import React from 'react'
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
\${provenance?entityList=syn12548902%2Fversion%2F34&depth=1&displayHeightPx=500&showExpand=true}`};const c=n.bind({});c.args={ownerId:"syn5585645",wikiId:"493662"};const ko=["HardCodedMarkdown","WikiPage","ImageDemo","ButtonLink","ImageBySynID","Plot","SynapseTable","MarkdownProvenanceGraph","HtmlRenderingTest"];export{p as ButtonLink,r as HardCodedMarkdown,c as HtmlRenderingTest,s as ImageBySynID,a as ImageDemo,d as MarkdownProvenanceGraph,m as Plot,l as SynapseTable,i as WikiPage,ko as __namedExportsOrder,go as default};
