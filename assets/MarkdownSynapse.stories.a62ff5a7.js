import{a as o}from"./CardContainerLogic.fb6258f8.js";import{j as e}from"./jsx-runtime.aa766aaf.js";import"./index.0a2c4939.js";import"./index.2efb6d36.js";import"./iframe.bd885096.js";import"./SynapseConstants.290eab74.js";import"./Button.c2cc208f.js";import"./styled.2fe8edb9.js";import"./utils.b239c5dc.js";import"./TransitionGroupContext.4c6d8009.js";import"./Alert.f1eda723.js";import"./createWithBsPrefix.2cafb9ec.js";import"./index.35ce73ec.js";import"./isArray.24130e12.js";import"./getEndpoint.bb7ded34.js";import"./Link.d09d0f36.js";import"./Typography.57d7ee2f.js";import"./Button.d4a39ac2.js";import"./ButtonBase.4c393dc9.js";import"./sqlFunctions.9bdc2c6c.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.aa422047.js";import"./useGetInfoFromIds.4eb73be0.js";import"./use-deep-compare-effect.esm.7ff43efb.js";import"./uniq.54fc3048.js";import"./_baseSlice.50189bc5.js";import"./toInteger.36ff5a11.js";import"./isSymbol.36b96d1e.js";import"./_cacheHas.f9705cd4.js";import"./without.33def38b.js";import"./uniqueId.bdc3b93e.js";import"./_Set.f82bf539.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.ce0bb6d2.js";import"./queryUtils.4b8af5d0.js";import"./useInfiniteQuery.9a0fe06d.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.ad6bb155.js";import"./_baseClone.c6c5507c.js";import"./_getTag.416f77c8.js";import"./NoSearchResults.ed7d85d5.js";import"./NoData.4f4cb96e.js";import"./unCamelCase.07e38083.js";import"./useEntity.3fe82088.js";import"./useMutation.c00b8089.js";import"./pick.e97e604b.js";import"./isEqual.5b182270.js";import"./ElementWithTooltip.9e2e3ff2.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.d73f159f.js";import"./Tooltip.e4334ac7.js";import"./createSvgIcon.d27817df.js";import"./InfoOutlined.548f9119.js";import"./Dropdown.346eb87c.js";import"./usePrevious.82adf379.js";import"./contains.91b3e071.js";import"./usePopperMarginModifiers.77eb36d9.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.7ee8aada.js";import"./RadioGroup.dbc26deb.js";import"./moment.a565bb48.js";import"./RangeSlider.3c4afffb.js";import"./factory.65c30f6f.js";import"./react-sizeme.738acc05.js";import"./Skeleton.b9cd2726.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.c4224e86.js";import"./Modal.47c74737.js";import"./inheritsLoose.37c69c63.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.dcf70bcc.js";import"./SelectionCriteriaPill.2ce4cff8.js";import"./Close.da59ddfe.js";import"./react-select.esm.7c42975f.js";import"./Select-54ac8379.esm.d21451eb.js";import"./CustomSelectWidget.036d76f7.js";import"./index.browser.851f0bde.js";import"./UserCard.e95fdc99.js";import"./IconCopy.0f69ca31.js";import"./SkeletonTable.e0c4ca45.js";import"./times.33cd8aa8.js";import"./ToastMessage.167572b3.js";import"./FullWidthAlert.8371c9c1.js";import"./Overlay.70cfa399.js";import"./WarningModal.25805129.js";import"./react-intersection-observer.esm.0c7146a8.js";import"./DateFormatter.b979f188.js";import"./EntityIcon.6506c628.js";import"./core.esm.14729251.js";import"./isEmpty.963ee042.js";import"./union.85080a9c.js";import"./isString.5c25b498.js";import"./useGetDownloadListStatistics.e68dab14.js";import"./QueryCount.4ac97521.js";import"./useGetAccessRequirement.0c595617.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.6c178d44.js";import"./UserSearchBox.61d2cf0f.js";import"./UserOrTeamBadge.bf49a816.js";import"./EntityLink.101d699f.js";import"./SynapseVideo.4652fc0e.js";import"./IconList.c1c0cda3.js";import"./UserCardList.f3efa500.js";const ko={parameters:{storySource:{source:`import React from 'react'
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

export const MarkdownIDUReport = Template.bind({})
MarkdownIDUReport.args = {
  markdown: '\${iduReport?accessRestrictionId=9605700}',
}
`,locationsMap:{"hard-coded-markdown":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"wiki-page":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"image-demo":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"button-link":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"image-by-syn-id":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},plot:{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"synapse-table":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"markdown-provenance-graph":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"html-rendering-test":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"markdown-idu-report":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}}}}},title:"Markdown/MarkdownSynapse",component:o,argTypes:{}},n=t=>e(o,{...t}),r=n.bind({});r.args={markdown:"*markdown* given to the **component**"};const i=n.bind({});i.args={ownerId:"syn12666371",wikiId:"585317",loadingSkeletonRowCount:20};const a=n.bind({});a.args={ownerId:"syn18142975"};const p=n.bind({});p.args={markdown:`Button link demo 


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
\${provenance?entityList=syn12548902%2Fversion%2F34&depth=1&displayHeightPx=500&showExpand=true}`};const c=n.bind({});c.args={ownerId:"syn5585645",wikiId:"493662"};const y=n.bind({});y.args={markdown:"${iduReport?accessRestrictionId=9605700}"};const wo=["HardCodedMarkdown","WikiPage","ImageDemo","ButtonLink","ImageBySynID","Plot","SynapseTable","MarkdownProvenanceGraph","HtmlRenderingTest","MarkdownIDUReport"];export{p as ButtonLink,r as HardCodedMarkdown,c as HtmlRenderingTest,s as ImageBySynID,a as ImageDemo,y as MarkdownIDUReport,d as MarkdownProvenanceGraph,m as Plot,l as SynapseTable,i as WikiPage,wo as __namedExportsOrder,ko as default};
