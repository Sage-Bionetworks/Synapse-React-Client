import{a as o}from"./CardContainerLogic.4ac1f764.js";import{j as e}from"./jsx-runtime.41b63a18.js";import"./index.95357afa.js";import"./index.fb0baffa.js";import"./iframe.1b6f62a5.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.d66b1296.js";import"./index.57d09176.js";import"./withStyles.bf9f4c29.js";import"./utils.8566b4fb.js";import"./Alert.2d23c399.js";import"./createWithBsPrefix.4703bb5e.js";import"./index.35ce73ec.js";import"./isArray.9516ce6b.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.d8df91d8.js";import"./sqlFunctions.be6fa141.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.425a36f4.js";import"./useGetInfoFromIds.440675b0.js";import"./use-deep-compare-effect.esm.89e0b2bf.js";import"./uniq.d1401db4.js";import"./_baseSlice.50189bc5.js";import"./toInteger.d13e0983.js";import"./isSymbol.fc7173a4.js";import"./_cacheHas.fa44402d.js";import"./without.b74e3938.js";import"./uniqueId.7743d6ef.js";import"./_Set.cf46f4c7.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./Tooltip.50b065de.js";import"./createSvgIcon.3e6e5789.js";import"./makeStyles.3de8ae0d.js";import"./FacetNav.93a63650.js";import"./queryUtils.d3ddbdc4.js";import"./useInfiniteQuery.afb80f09.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.972a710a.js";import"./_baseClone.80c04804.js";import"./_getTag.5b9f1be5.js";import"./NoSearchResults.f5a12ecf.js";import"./NoData.33ecea8a.js";import"./unCamelCase.07e38083.js";import"./useEntity.f187f17a.js";import"./useMutation.75197862.js";import"./pick.d71ecd11.js";import"./isEqual.c98a7e38.js";import"./ElementWithTooltip.a20fbba5.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.83d367d8.js";import"./InfoOutlined.62b2381c.js";import"./Dropdown.1ea1e7ae.js";import"./usePrevious.b2a56b43.js";import"./contains.35f158bd.js";import"./usePopperMarginModifiers.3543b56f.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.f849d68d.js";import"./RadioGroup.42f82ea0.js";import"./moment.a565bb48.js";import"./RangeSlider.a2b8db98.js";import"./factory.4d558efc.js";import"./react-sizeme.6754aec4.js";import"./Skeleton.2b632001.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.8b1b27b2.js";import"./Typography.dc699c3a.js";import"./Modal.493b8aac.js";import"./inheritsLoose.f9ee6081.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.054fdf82.js";import"./SelectionCriteriaPill.5fe230c2.js";import"./Close.a124524c.js";import"./react-select.esm.d77ac0dd.js";import"./Select-54ac8379.esm.a8e92046.js";import"./CustomSelectWidget.95995941.js";import"./index.browser.d13d238d.js";import"./UserCard.7b85d80c.js";import"./IconCopy.6ff102ac.js";import"./SkeletonTable.5fcf404b.js";import"./times.d1737d14.js";import"./ToastMessage.3d8ba4da.js";import"./FullWidthAlert.5cb2b687.js";import"./Overlay.b83155ef.js";import"./WarningModal.460ec494.js";import"./react-intersection-observer.esm.51a65a7f.js";import"./DateFormatter.ae20191a.js";import"./EntityIcon.d51583e3.js";import"./core.esm.4412e42d.js";import"./isEmpty.7f33a473.js";import"./union.b1c15149.js";import"./isString.eb351700.js";import"./useGetDownloadListStatistics.d1d39b56.js";import"./QueryCount.d74d4572.js";import"./useGetAccessRequirement.0e54bbee.js";import"./ManagedACTAccessRequirementStatus.e6c92b93.js";import"./FileUpload.e43615b9.js";import"./UserSearchBox.084d038d.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.b8080351.js";import"./EntityLink.e671807d.js";import"./SynapseVideo.1efe460d.js";import"./IconList.f6f41d07.js";import"./UserCardList.43b2352c.js";const yo={parameters:{storySource:{source:`import React from 'react'
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
