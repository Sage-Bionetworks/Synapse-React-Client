import{a as o}from"./CardContainerLogic.160cd6dc.js";import{j as e}from"./jsx-runtime.08584073.js";import"./index.8d274cce.js";import"./index.10a6a474.js";import"./iframe.46cf6f9c.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.19eb0a0d.js";import"./styled.49e31bee.js";import"./utils.564f56d5.js";import"./Alert.50172ad9.js";import"./createWithBsPrefix.84280c3f.js";import"./index.35ce73ec.js";import"./isArray.e00a52bc.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.52412c7b.js";import"./sqlFunctions.356c1293.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.e3984af8.js";import"./useGetInfoFromIds.0b77420b.js";import"./use-deep-compare-effect.esm.fad3e301.js";import"./uniq.832d3855.js";import"./_baseSlice.50189bc5.js";import"./toInteger.ebd6ba2e.js";import"./isSymbol.bad84e3a.js";import"./_cacheHas.8d045655.js";import"./without.d57c7f92.js";import"./uniqueId.2262e339.js";import"./_Set.2974cbe7.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.f0b491fb.js";import"./queryUtils.ef308bba.js";import"./useInfiniteQuery.e2feb110.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.5688d850.js";import"./_baseClone.54734e5a.js";import"./_getTag.64bd74dc.js";import"./NoSearchResults.f15840a6.js";import"./NoData.5d93d435.js";import"./unCamelCase.07e38083.js";import"./useEntity.ac75c1c8.js";import"./useMutation.fa3cdf0e.js";import"./pick.4ca0ebc5.js";import"./isEqual.aa92ca80.js";import"./ElementWithTooltip.3eef2d7f.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.47050332.js";import"./Tooltip.f9340fc3.js";import"./createSvgIcon.5c64ba32.js";import"./InfoOutlined.aab3ebaf.js";import"./Dropdown.8b1a32a3.js";import"./usePrevious.eb4668df.js";import"./contains.dc8b0910.js";import"./usePopperMarginModifiers.e5eb18a0.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.0589ad6c.js";import"./RadioGroup.884be978.js";import"./moment.a565bb48.js";import"./RangeSlider.3d031b55.js";import"./factory.89a755c8.js";import"./react-sizeme.8d569517.js";import"./Skeleton.caf11574.js";import"./emotion-react.browser.esm.17352205.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.39f2fb11.js";import"./Modal.6973cbd4.js";import"./inheritsLoose.e43b22d1.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.5ed53cb9.js";import"./Typography.afe1a60b.js";import"./SelectionCriteriaPill.8f9f19a7.js";import"./Close.e48a33b3.js";import"./react-select.esm.fadcd49f.js";import"./Select-54ac8379.esm.305999be.js";import"./CustomSelectWidget.17052bbc.js";import"./index.browser.fb0b4558.js";import"./UserCard.94c6876c.js";import"./IconCopy.28a6d75f.js";import"./SkeletonTable.c5426c0e.js";import"./times.6ff56ad1.js";import"./ToastMessage.b76b29fc.js";import"./FullWidthAlert.c938c0bd.js";import"./Overlay.c4937a08.js";import"./WarningModal.437479d1.js";import"./react-intersection-observer.esm.dee0153b.js";import"./DateFormatter.ea5a9994.js";import"./EntityIcon.4f13962d.js";import"./core.esm.2c37a07f.js";import"./isEmpty.cc673e81.js";import"./union.e9db0191.js";import"./isString.1b0717a4.js";import"./useGetDownloadListStatistics.41fd99c5.js";import"./QueryCount.c7aad442.js";import"./useGetAccessRequirement.7772742c.js";import"./ManagedACTAccessRequirementStatus.8dc4cd07.js";import"./FileUpload.87b2b521.js";import"./UserSearchBox.93d24c31.js";import"./UserOrTeamBadge.b4d762a1.js";import"./EntityLink.4b34ca07.js";import"./SynapseVideo.70b05cce.js";import"./IconList.da9ad884.js";import"./UserCardList.1c49604c.js";const co={parameters:{storySource:{source:`import React from 'react'
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
\${provenance?entityList=syn12548902%2Fversion%2F34&depth=1&displayHeightPx=500&showExpand=true}`};const c=n.bind({});c.args={ownerId:"syn5585645",wikiId:"493662"};const yo=["HardCodedMarkdown","WikiPage","ImageDemo","ButtonLink","ImageBySynID","Plot","SynapseTable","MarkdownProvenanceGraph","HtmlRenderingTest"];export{p as ButtonLink,r as HardCodedMarkdown,c as HtmlRenderingTest,s as ImageBySynID,a as ImageDemo,d as MarkdownProvenanceGraph,m as Plot,l as SynapseTable,i as WikiPage,yo as __namedExportsOrder,co as default};
