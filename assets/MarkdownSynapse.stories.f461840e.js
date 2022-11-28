import{a as o}from"./CardContainerLogic.405dc753.js";import{j as e}from"./jsx-runtime.0721b30f.js";import"./index.96fee529.js";import"./index.84874f77.js";import"./iframe.d07454b7.js";import"./SynapseConstants.290eab74.js";import"./Button.c6170972.js";import"./styled.b8cd841c.js";import"./utils.61962e2e.js";import"./TransitionGroupContext.536780f6.js";import"./useTheme.210faaa5.js";import"./Alert.e026ca2c.js";import"./hook.0b64fed2.js";import"./createWithBsPrefix.60042f33.js";import"./divWithClassName.ae2eac7f.js";import"./index.35ce73ec.js";import"./Fade.54a45bb0.js";import"./isArray.0e868c61.js";import"./getEndpoint.bb7ded34.js";import"./Link.38c396f1.js";import"./Typography.f634a419.js";import"./Button.9899c0f8.js";import"./ButtonBase.c60e40b2.js";import"./emotion-react.browser.esm.4fe99834.js";import"./sqlFunctions.b0106d41.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.c86a5cbb.js";import"./useGetInfoFromIds.58b9ed31.js";import"./use-deep-compare-effect.esm.401fba4c.js";import"./uniq.ab7ea7a6.js";import"./_baseSlice.50189bc5.js";import"./toInteger.0c46f3eb.js";import"./isSymbol.2a2fd570.js";import"./_cacheHas.f0b8833d.js";import"./without.b89900d5.js";import"./uniqueId.22a08d1e.js";import"./_Set.530d31c3.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.ef313e7e.js";import"./queryUtils.bc241af6.js";import"./useInfiniteQuery.160050ed.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.d4824e0e.js";import"./_baseClone.d846e333.js";import"./_getTag.374494a2.js";import"./NoSearchResults.37564460.js";import"./NoData.48f5a675.js";import"./unCamelCase.07e38083.js";import"./useEntity.77265cb8.js";import"./useMutation.5bff6e5b.js";import"./pick.7c26c579.js";import"./isEqual.587a056a.js";import"./ElementWithTooltip.0beed2ed.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.69d2b3a3.js";import"./Tooltip.95391ddc.js";import"./createSvgIcon.8972a51f.js";import"./InfoOutlined.1d86a385.js";import"./Dropdown.cda3e88c.js";import"./usePrevious.7579f6d6.js";import"./contains.4df2422e.js";import"./usePopperMarginModifiers.eef01d88.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.ad5f9514.js";import"./RadioGroup.9418e1f9.js";import"./dayjs.min.d1781a3e.js";import"./RangeSlider.84b56ff1.js";import"./factory.c5c0659e.js";import"./react-sizeme.31f58fbd.js";import"./Skeleton.bcaf6f06.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.596009c1.js";import"./Modal.ffe20d01.js";import"./inheritsLoose.53a219d1.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.65459bf1.js";import"./SelectionCriteriaPill.e84841d0.js";import"./Close.b5d307a6.js";import"./react-select.esm.16cf96dd.js";import"./Select-54ac8379.esm.6a29fbfd.js";import"./CustomSelectWidget.b6d556eb.js";import"./index.browser.72232f2a.js";import"./UserCard.9a1acc17.js";import"./IconCopy.343b69cc.js";import"./SkeletonTable.12d4458e.js";import"./times.938b95b0.js";import"./ToastMessage.c03bf450.js";import"./FullWidthAlert.f41552e4.js";import"./Overlay.d556696c.js";import"./WarningModal.1a2883db.js";import"./react-intersection-observer.esm.3ef9875c.js";import"./DateFormatter.f6dc5f9a.js";import"./utc.ffadba9e.js";import"./EntityIcon.1e92edc0.js";import"./core.esm.4ab3feef.js";import"./isEmpty.f6cb9f52.js";import"./union.067c0c88.js";import"./isString.cb81128d.js";import"./relativeTime.5f274717.js";import"./useGetDownloadListStatistics.8c5e991c.js";import"./QueryCount.de45b2ad.js";import"./useGetAccessRequirement.306475cd.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.4ab691de.js";import"./UserSearchBox.f1e02549.js";import"./UserOrTeamBadge.d5bf5d62.js";import"./EntityLink.40497b38.js";import"./SynapseVideo.878bc81a.js";import"./IconList.e1c0dfc0.js";import"./UserCardList.1e3a2a6f.js";const xo={parameters:{storySource:{source:`import React from 'react'
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
\${provenance?entityList=syn12548902%2Fversion%2F34&depth=1&displayHeightPx=500&showExpand=true}`};const c=n.bind({});c.args={ownerId:"syn5585645",wikiId:"493662"};const y=n.bind({});y.args={markdown:"${iduReport?accessRestrictionId=9605700}"};const Bo=["HardCodedMarkdown","WikiPage","ImageDemo","ButtonLink","ImageBySynID","Plot","SynapseTable","MarkdownProvenanceGraph","HtmlRenderingTest","MarkdownIDUReport"];export{p as ButtonLink,r as HardCodedMarkdown,c as HtmlRenderingTest,s as ImageBySynID,a as ImageDemo,y as MarkdownIDUReport,d as MarkdownProvenanceGraph,m as Plot,l as SynapseTable,i as WikiPage,Bo as __namedExportsOrder,xo as default};
