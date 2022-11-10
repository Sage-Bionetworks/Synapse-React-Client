import{a as o}from"./CardContainerLogic.08596215.js";import{j as e}from"./jsx-runtime.1ec48991.js";import"./index.68bd0253.js";import"./index.e6805b9d.js";import"./iframe.17825d5d.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.10450b9c.js";import"./styled.b563b14e.js";import"./utils.cfe4cf21.js";import"./TransitionGroupContext.bea386fe.js";import"./Alert.3ceff35f.js";import"./createWithBsPrefix.4e16079c.js";import"./index.35ce73ec.js";import"./isArray.57b36520.js";import"./getEndpoint.bb7ded34.js";import"./Link.9d6a28d3.js";import"./Typography.d731394a.js";import"./Button.a57d4d2f.js";import"./ButtonBase.385491e5.js";import"./sqlFunctions.28e88eb6.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.598ee4cd.js";import"./useGetInfoFromIds.debf247c.js";import"./use-deep-compare-effect.esm.f247efaf.js";import"./uniq.546de6f9.js";import"./_baseSlice.50189bc5.js";import"./toInteger.11c6324c.js";import"./isSymbol.39bb0bca.js";import"./_cacheHas.23a2f0cd.js";import"./without.acbd50b9.js";import"./uniqueId.18f3bcbd.js";import"./_Set.4ce988f1.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.a91679fa.js";import"./queryUtils.0d06972d.js";import"./useInfiniteQuery.32675929.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.544e9aa4.js";import"./_baseClone.56ec3078.js";import"./_getTag.387f7518.js";import"./NoSearchResults.0a7d89fe.js";import"./NoData.8191c6ba.js";import"./unCamelCase.07e38083.js";import"./useEntity.72febae8.js";import"./useMutation.214258b2.js";import"./pick.e29753d5.js";import"./isEqual.e9702a7a.js";import"./ElementWithTooltip.58248476.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.2665a8bd.js";import"./Tooltip.37175240.js";import"./createSvgIcon.bd0679c5.js";import"./InfoOutlined.12757aca.js";import"./Dropdown.7a288e5a.js";import"./usePrevious.28f2a445.js";import"./contains.bd991730.js";import"./usePopperMarginModifiers.34cf932a.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.7174261f.js";import"./RadioGroup.f132105e.js";import"./moment.a565bb48.js";import"./RangeSlider.4298c9ca.js";import"./factory.4bdb8a65.js";import"./react-sizeme.39a549cd.js";import"./Skeleton.04d77aea.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.30f27451.js";import"./Modal.a4af86eb.js";import"./inheritsLoose.0edf792b.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.6116bbf2.js";import"./SelectionCriteriaPill.1ffeece6.js";import"./Close.ff66a9b6.js";import"./react-select.esm.f9ca1196.js";import"./Select-54ac8379.esm.7298567a.js";import"./CustomSelectWidget.972f265c.js";import"./index.browser.7232b0ba.js";import"./UserCard.9a31a780.js";import"./IconCopy.480c8ce4.js";import"./SkeletonTable.94937218.js";import"./times.937b25aa.js";import"./ToastMessage.68896504.js";import"./FullWidthAlert.4fc4aa23.js";import"./Overlay.2ba975ad.js";import"./WarningModal.cee853fc.js";import"./react-intersection-observer.esm.d26341a2.js";import"./DateFormatter.4d2167a5.js";import"./EntityIcon.4748b953.js";import"./core.esm.ea705688.js";import"./isEmpty.84372b7a.js";import"./union.0203303f.js";import"./isString.b8ed4888.js";import"./useGetDownloadListStatistics.d0f7fcfe.js";import"./QueryCount.0ac77dcc.js";import"./useGetAccessRequirement.01759ff4.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.0dbad1cf.js";import"./UserSearchBox.8c578c43.js";import"./UserOrTeamBadge.b078337d.js";import"./EntityLink.c35429f8.js";import"./SynapseVideo.8d6ec532.js";import"./IconList.f87d6feb.js";import"./UserCardList.141cd21a.js";const yo={parameters:{storySource:{source:`import React from 'react'
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
\${provenance?entityList=syn12548902%2Fversion%2F34&depth=1&displayHeightPx=500&showExpand=true}`};const c=n.bind({});c.args={ownerId:"syn5585645",wikiId:"493662"};const go=["HardCodedMarkdown","WikiPage","ImageDemo","ButtonLink","ImageBySynID","Plot","SynapseTable","MarkdownProvenanceGraph","HtmlRenderingTest"];export{p as ButtonLink,r as HardCodedMarkdown,c as HtmlRenderingTest,s as ImageBySynID,a as ImageDemo,d as MarkdownProvenanceGraph,m as Plot,l as SynapseTable,i as WikiPage,go as __namedExportsOrder,yo as default};
