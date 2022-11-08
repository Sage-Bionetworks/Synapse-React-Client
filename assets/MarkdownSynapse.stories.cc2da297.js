import{a as o}from"./CardContainerLogic.07f08fbb.js";import{j as e}from"./jsx-runtime.02fcd003.js";import"./index.91a9706e.js";import"./index.0864d1cf.js";import"./iframe.25b1a9fc.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.bd4bae0e.js";import"./styled.094a3a2c.js";import"./utils.62f6c1ea.js";import"./Alert.92a838df.js";import"./createWithBsPrefix.9fcf4917.js";import"./index.35ce73ec.js";import"./isArray.404de5ac.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.66ad72a0.js";import"./sqlFunctions.6c29bc93.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.fe898980.js";import"./useGetInfoFromIds.32f9a8a6.js";import"./use-deep-compare-effect.esm.087251af.js";import"./uniq.62ba73ed.js";import"./_baseSlice.50189bc5.js";import"./toInteger.3466557e.js";import"./isSymbol.b2b689d7.js";import"./_cacheHas.2a8fdb0c.js";import"./without.1a07f841.js";import"./uniqueId.446adc13.js";import"./_Set.46f8fc5c.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.a28a2e52.js";import"./queryUtils.a101fcf0.js";import"./useInfiniteQuery.fc6fd964.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.c98c28c0.js";import"./_baseClone.c0aa1259.js";import"./_getTag.58b2ff67.js";import"./NoSearchResults.617c97fc.js";import"./NoData.aa431ffe.js";import"./unCamelCase.07e38083.js";import"./useEntity.c0242e46.js";import"./useMutation.9d704823.js";import"./pick.b08b8dd2.js";import"./isEqual.cb9e6104.js";import"./ElementWithTooltip.c72d69a4.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.c783b477.js";import"./Tooltip.977ea0b9.js";import"./createSvgIcon.37b7d2f8.js";import"./InfoOutlined.9adbadde.js";import"./Dropdown.aec0cc51.js";import"./usePrevious.a424157a.js";import"./contains.593a857e.js";import"./usePopperMarginModifiers.417da628.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.8e723a9b.js";import"./RadioGroup.f6595d68.js";import"./moment.a565bb48.js";import"./RangeSlider.23e4f90d.js";import"./factory.7cc0356e.js";import"./react-sizeme.070dc527.js";import"./Skeleton.1c99f826.js";import"./emotion-react.browser.esm.a24af408.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.aa9f1a18.js";import"./Modal.eec014aa.js";import"./inheritsLoose.737c1083.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.abb80557.js";import"./Typography.79e944f5.js";import"./SelectionCriteriaPill.ca707430.js";import"./Close.f8c8f41e.js";import"./react-select.esm.710ced48.js";import"./Select-54ac8379.esm.865b8397.js";import"./CustomSelectWidget.2129a911.js";import"./index.browser.d22832b1.js";import"./UserCard.f776b74e.js";import"./IconCopy.5b716459.js";import"./SkeletonTable.8183c23e.js";import"./times.36513370.js";import"./ToastMessage.5f109185.js";import"./FullWidthAlert.b9addea3.js";import"./Overlay.712e50d1.js";import"./WarningModal.e7a646eb.js";import"./react-intersection-observer.esm.f439000b.js";import"./DateFormatter.a8d87905.js";import"./EntityIcon.e25991b1.js";import"./core.esm.955a0884.js";import"./isEmpty.40959c6d.js";import"./union.7d6a8421.js";import"./isString.f3f53b54.js";import"./useGetDownloadListStatistics.49a5e31c.js";import"./QueryCount.af68c71d.js";import"./useGetAccessRequirement.6942e412.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.9309f685.js";import"./UserSearchBox.9b9ba1e5.js";import"./UserOrTeamBadge.4c627245.js";import"./EntityLink.76481bb6.js";import"./ButtonBase.fb9c46ac.js";import"./SynapseVideo.6b43f73e.js";import"./IconList.f71b529d.js";import"./UserCardList.edd5ba6e.js";const yo={parameters:{storySource:{source:`import React from 'react'
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
