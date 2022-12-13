import{b as o}from"./HasAccessV2.06761fe8.js";import{j as e}from"./jsx-runtime.254b3176.js";import"./index.fd010cb7.js";import"./index.0a919fcb.js";import"./iframe.75dade87.js";import"./SynapseConstants.4792b5b5.js";import"./Button.87a6ff9f.js";import"./styled.0b0d8b8c.js";import"./Tooltip.8deb04e4.js";import"./SvgIcon.3abc547b.js";import"./useTheme.c977df4e.js";import"./TransitionGroupContext.8e2c28aa.js";import"./Alert.a3cded27.js";import"./hook.f1fe8c77.js";import"./createWithBsPrefix.df6e431b.js";import"./divWithClassName.7005b84b.js";import"./index.35ce73ec.js";import"./Fade.feae1643.js";import"./isArray.f97a9bbd.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.f20d6379.js";import"./IconButton.903dfe6a.js";import"./ButtonBase.373062e6.js";import"./emotion-react.browser.esm.2f156512.js";import"./Link.a0ec5041.js";import"./Typography.770de0a7.js";import"./Button.1f777938.js";import"./useAccessRequirements.f0d1a9da.js";import"./useMutation.fc3c8459.js";import"./useInfiniteQuery.c7bd3506.js";import"./queryKeys.e0d3085f.js";import"./RestrictionInformation.edfbac5a.js";import"./useGetInfoFromIds.40c1344c.js";import"./use-deep-compare-effect.esm.dd2c5436.js";import"./uniq.3d75b2a1.js";import"./_baseSlice.50189bc5.js";import"./toInteger.584e3fb4.js";import"./isSymbol.26d1d746.js";import"./_cacheHas.a5b1c75d.js";import"./without.b8d04fce.js";import"./uniqueId.45db3035.js";import"./_Set.7ee3ab32.js";import"./_setToArray.a82100c8.js";import"./LoadingScreen.c63dd2ac.js";import"./Modal.ac273403.js";import"./contains.8dcb6ab0.js";import"./inheritsLoose.37221418.js";import"./usePrevious.57c17579.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.1870fb8b.js";import"./UserCard.7ca4f703.js";import"./IconCopy.a538d8eb.js";import"./SkeletonTable.4a89f4f4.js";import"./times.af16b41b.js";import"./Skeleton.01da34f7.js";import"./ToastMessage.32c452c3.js";import"./FullWidthAlert.3a145ad4.js";import"./Overlay.8fd9ffbd.js";import"./usePopperMarginModifiers.620da183.js";import"./WarningModal.4f8c39e8.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.1ce24649.js";import"./DateFormatter.4a01699f.js";import"./dayjs.min.f047e958.js";import"./utc.a6799311.js";import"./EntityIcon.df4d5c3c.js";import"./core.esm.88ab76a6.js";import"./pick.af1437da.js";import"./_baseClone.adabff14.js";import"./isEmpty.07b1f7f9.js";import"./isEqual.f95bc163.js";import"./index.browser.e58f6c8a.js";import"./union.46f63519.js";import"./CustomSelectWidget.f8ec3434.js";import"./Select-54ac8379.esm.8e1eb034.js";import"./isString.8233ba36.js";import"./factory.eaa65980.js";import"./sqlFunctions.f81c8ae1.js";import"./QueryFilter.739dec63.js";import"./useEntity.58fed946.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.efa95965.js";import"./queryUtils.71f740e2.js";import"./cloneDeep.17c1a597.js";import"./NoSearchResults.6cc82647.js";import"./NoData.e1985754.js";import"./unCamelCase.07e38083.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.7369dcad.js";import"./Dropdown.b1456386.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.d3d76aaa.js";import"./RadioGroup.6a0cb761.js";import"./RangeSlider.89e5c569.js";import"./react-sizeme.ee359759.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.f8b1a626.js";import"./Close.49a69e99.js";import"./relativeTime.b59f3c5f.js";import"./useDownloadList.932c8757.js";import"./QueryCount.e2ec8a22.js";import"./react-select.esm.d5e9ceca.js";import"./IconList.89bd817f.js";import"./UserCardList.949bbd08.js";import"./EntityLink.3f03a671.js";import"./UserOrTeamBadge.98286171.js";import"./SynapseVideo.ba257035.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.5e25f139.js";import"./UserSearchBox.3a69336f.js";const Lo={parameters:{storySource:{source:`import React from 'react'
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
