import{a as o}from"./CardContainerLogic.61f10dc5.js";import{j as e}from"./jsx-runtime.25f1da80.js";import"./index.69555c85.js";import"./index.09872124.js";import"./iframe.89c4ca26.js";import"./SynapseConstants.290eab74.js";import"./Button.03ce126b.js";import"./styled.61c2cdbd.js";import"./utils.653016b9.js";import"./TransitionGroupContext.d4abce3c.js";import"./useTheme.50dbca56.js";import"./Alert.c8ecdb26.js";import"./hook.865145d2.js";import"./createWithBsPrefix.2ba1d399.js";import"./divWithClassName.8bbfe55a.js";import"./index.35ce73ec.js";import"./Fade.5af2af2d.js";import"./isArray.63a07037.js";import"./getEndpoint.bb7ded34.js";import"./Link.7320b292.js";import"./Typography.787f3df0.js";import"./Button.71735648.js";import"./ButtonBase.e51b431c.js";import"./emotion-react.browser.esm.de1a23fd.js";import"./sqlFunctions.9792d962.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.d169c11d.js";import"./useGetInfoFromIds.44be4018.js";import"./use-deep-compare-effect.esm.a1426cb2.js";import"./uniq.e7104f4b.js";import"./_baseSlice.50189bc5.js";import"./toInteger.374f3d90.js";import"./isSymbol.8bb90a01.js";import"./_cacheHas.94f6a723.js";import"./without.469323e6.js";import"./uniqueId.b035a11c.js";import"./_Set.2cc53572.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.621261fc.js";import"./queryUtils.914720c7.js";import"./useInfiniteQuery.a1c7197d.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.0d74c660.js";import"./_baseClone.98f8d012.js";import"./_getTag.bee7994d.js";import"./NoSearchResults.59aac2a5.js";import"./NoData.3f04e6ce.js";import"./unCamelCase.07e38083.js";import"./useEntity.2c8dce53.js";import"./useMutation.0a0f53c2.js";import"./pick.63eedd5f.js";import"./isEqual.78dd156b.js";import"./ElementWithTooltip.b169a8dc.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.562c1909.js";import"./Tooltip.dc683be6.js";import"./createSvgIcon.32db2a88.js";import"./InfoOutlined.d976b6d4.js";import"./Dropdown.b0e1788b.js";import"./usePrevious.8c5acee9.js";import"./contains.b82313ef.js";import"./usePopperMarginModifiers.6c0d1965.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.f455bc6d.js";import"./RadioGroup.60d0e9b9.js";import"./dayjs.min.6249e3c2.js";import"./RangeSlider.17d48db5.js";import"./factory.b660e4c4.js";import"./react-sizeme.e53d15ca.js";import"./Skeleton.264ae24e.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.10bc024b.js";import"./Modal.4b7d9dca.js";import"./inheritsLoose.b1a489b6.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.e68dcf6e.js";import"./SelectionCriteriaPill.79c39aa1.js";import"./Close.44b4a032.js";import"./react-select.esm.53dbc2ee.js";import"./Select-54ac8379.esm.d9aea084.js";import"./CustomSelectWidget.98121632.js";import"./index.browser.5d712414.js";import"./UserCard.e6c2a584.js";import"./IconCopy.64748781.js";import"./SkeletonTable.1d27d75d.js";import"./times.f808a242.js";import"./ToastMessage.679431d9.js";import"./FullWidthAlert.ce239055.js";import"./Overlay.f9384c09.js";import"./WarningModal.a2a8f9cb.js";import"./react-intersection-observer.esm.2b339d3f.js";import"./DateFormatter.58c13d3a.js";import"./utc.4f174ace.js";import"./EntityIcon.dfd6633a.js";import"./core.esm.30e8b25f.js";import"./isEmpty.2d474a78.js";import"./union.61728d18.js";import"./isString.e48b0485.js";import"./relativeTime.4aeffe42.js";import"./useGetDownloadListStatistics.f4a0360e.js";import"./QueryCount.a6613e07.js";import"./useGetAccessRequirement.c9c5858b.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.ef38cf66.js";import"./UserSearchBox.1a582fcf.js";import"./UserOrTeamBadge.eb60fe56.js";import"./EntityLink.603c8d35.js";import"./SynapseVideo.47a9bf48.js";import"./IconList.6b22c904.js";import"./UserCardList.9bade6f4.js";const xo={parameters:{storySource:{source:`import React from 'react'
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
