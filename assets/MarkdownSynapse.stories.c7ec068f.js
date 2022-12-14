import{b as o}from"./HelpPopover.2e6d375a.js";import{j as e}from"./jsx-runtime.edcee20f.js";import"./index.e284f29f.js";import"./iframe.8d602a7e.js";import"./usePopperMarginModifiers.3784b24d.js";import"./contains.73b2d2ff.js";import"./createWithBsPrefix.fb2e744c.js";import"./Button.beed9c8a.js";import"./hasClass.56fd144a.js";import"./EntityTypeUtils.f136fe8e.js";import"./Fade.e73bdacf.js";import"./styled.57026967.js";import"./useTheme.c864c010.js";import"./Tooltip.6287427b.js";import"./SvgIcon.cf85a686.js";import"./TransitionGroupContext.9f30f89b.js";import"./isArray.ba2a5774.js";import"./index.35ce73ec.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.a36fd00f.js";import"./IconButton.f86e6b85.js";import"./ButtonBase.8a19de44.js";import"./emotion-react.browser.esm.23bad0f9.js";import"./Link.c844031a.js";import"./Typography.8ba12270.js";import"./Button.237100ef.js";import"./SynapseConstants.d6ba6a96.js";import"./Alert.c9c7cf94.js";import"./hook.9626bae0.js";import"./divWithClassName.198d5031.js";import"./queryKeys.e0d3085f.js";import"./LoadingScreen.5e2052bf.js";import"./Modal.c09bb9ef.js";import"./inheritsLoose.82034c01.js";import"./usePrevious.81a072b7.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.b1b60d08.js";import"./UserCard.d9f9873d.js";import"./IconCopy.a9a46157.js";import"./SkeletonTable.eac87a94.js";import"./times.d987e694.js";import"./toInteger.93344759.js";import"./isSymbol.4e401305.js";import"./Skeleton.7309b0e8.js";import"./ToastMessage.fe900393.js";import"./FullWidthAlert.15c58824.js";import"./uniqueId.d49ff0ce.js";import"./Overlay.0deab64d.js";import"./WarningModal.1c43b336.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.ac94f3bc.js";import"./useInfiniteQuery.62663485.js";import"./DateFormatter.49abe40b.js";import"./dayjs.min.d5c6140e.js";import"./utc.93fc2fea.js";import"./EntityIcon.085cf7bc.js";import"./core.esm.8f03e8e9.js";import"./pick.2e2f2657.js";import"./_baseClone.105264f0.js";import"./_Set.1d83ae68.js";import"./_baseSlice.50189bc5.js";import"./isEmpty.e275a76d.js";import"./isEqual.95dec00f.js";import"./_cacheHas.1076ebc6.js";import"./_setToArray.a82100c8.js";import"./index.browser.c080bb2a.js";import"./union.bbcda369.js";import"./without.958702a4.js";import"./uniq.ed37cced.js";import"./CustomSelectWidget.848159ca.js";import"./Select-54ac8379.esm.cc32b323.js";import"./isString.6a9df18d.js";import"./factory.f758f58c.js";import"./sqlFunctions.4c211c8a.js";import"./QueryFilter.7da789b0.js";import"./useEntity.04fadd8c.js";import"./useMutation.e868fb3d.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.1e07697e.js";import"./queryUtils.e800abfd.js";import"./cloneDeep.53a7b290.js";import"./use-deep-compare-effect.esm.4b9e5356.js";import"./NoSearchResults.ebb09cc2.js";import"./NoData.66425971.js";import"./unCamelCase.07e38083.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.03275a84.js";import"./Dropdown.1237b504.js";import"./isRequiredForA11y.20ed4857.js";import"./useGetInfoFromIds.4de2051f.js";import"./Checkbox.81ee8444.js";import"./RadioGroup.2a913923.js";import"./RangeSlider.025e59ec.js";import"./react-sizeme.ca002b8a.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.1eaf8da7.js";import"./Close.47506959.js";import"./relativeTime.dbbb68a5.js";import"./useDownloadList.4811622f.js";import"./QueryCount.c4983d12.js";import"./react-select.esm.bbf16df8.js";import"./IconList.e5c5bad8.js";import"./UserCardList.daeed47e.js";import"./useAccessRequirements.c96b7848.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.8c5e4813.js";import"./UserSearchBox.df4fd1ed.js";import"./UserOrTeamBadge.b11a8065.js";import"./EntityLink.06d57c43.js";import"./SynapseVideo.dcdf2f72.js";const Lo={parameters:{storySource:{source:`import React from 'react'
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
\${provenance?entityList=syn12548902%2Fversion%2F34&depth=1&displayHeightPx=500&showExpand=true}`};const c=n.bind({});c.args={ownerId:"syn5585645",wikiId:"493662"};const y=n.bind({});y.args={markdown:"${iduReport?accessRestrictionId=9605700}"};const Mo=["HardCodedMarkdown","WikiPage","ImageDemo","ButtonLink","ImageBySynID","Plot","SynapseTable","MarkdownProvenanceGraph","HtmlRenderingTest","MarkdownIDUReport"];export{p as ButtonLink,r as HardCodedMarkdown,c as HtmlRenderingTest,s as ImageBySynID,a as ImageDemo,y as MarkdownIDUReport,d as MarkdownProvenanceGraph,m as Plot,l as SynapseTable,i as WikiPage,Mo as __namedExportsOrder,Lo as default};
