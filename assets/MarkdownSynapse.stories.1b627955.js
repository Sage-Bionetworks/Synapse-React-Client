import{a as t}from"./CardContainerLogic.7374141a.js";import{j as e}from"./jsx-runtime.8cf0c657.js";import"./index.a6d709ad.js";import"./index.0d47cfe5.js";import"./iframe.6f47dcc9.js";import"./withStyles.f22e9c75.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.70f23d9f.js";import"./index.57d09176.js";import"./Button.89087c87.js";import"./Transition.2fb6e5a0.js";import"./index.35ce73ec.js";import"./isArray.62d496dc.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.af962ab3.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.2ec70336.js";import"./use-deep-compare-effect.esm.c7792492.js";import"./uniq.69f59b21.js";import"./_baseSlice.50189bc5.js";import"./toInteger.b1cd1d84.js";import"./isSymbol.57088814.js";import"./_cacheHas.6e0abfc2.js";import"./without.04aa9dda.js";import"./uniqueId.ba83e708.js";import"./_Set.21998671.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.36aacc1e.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.894064e3.js";import"./Tooltip.8bb6ec51.js";import"./createSvgIcon.3db62023.js";import"./slicedToArray.e72f11da.js";import"./useTheme.daa899de.js";import"./makeStyles.14efd907.js";import"./InfoOutlined.7ef1e7fd.js";import"./ElementWithTooltip.6ccf1e07.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.2b40167c.js";import"./Modal.498d8359.js";import"./useWaitForDOMRef.501162ab.js";import"./useWillUnmount.836b1f97.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.1ab8820d.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.802b895d.js";import"./queryUtils.c7efffb7.js";import"./useInfiniteQuery.f5ad163c.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.089eacc4.js";import"./_baseClone.deb1d808.js";import"./_getTag.41478f78.js";import"./useEntity.e12bf5bb.js";import"./useMutation.89904a2c.js";import"./pick.2b5bb2d3.js";import"./Checkbox.5848b978.js";import"./Collapse.38604230.js";import"./RadioGroup.d3441520.js";import"./moment.a565bb48.js";import"./RangeSlider.56073dd1.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.a176279c.js";import"./react-sizeme.32a64388.js";import"./Skeleton.af6ba2d8.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.1309c9be.js";import"./Typography.0dca8b10.js";import"./react-select.esm.15c096c0.js";import"./Select-54ac8379.esm.8c9c6a11.js";import"./CustomSelectWidget.e650c3af.js";import"./core.esm.72bfe204.js";import"./index.aba22f7d.js";import"./index.66e0b57e.js";import"./index.440cefe9.js";import"./isEmpty.407d8302.js";import"./_baseIsEqual.51e1caab.js";import"./index.browser.944a734c.js";import"./union.cdf543e7.js";import"./react-intersection-observer.esm.e345675c.js";import"./UserCard.06fc45b4.js";import"./IconCopy.27efae90.js";import"./SkeletonTable.42e3c3ac.js";import"./times.8daad405.js";import"./ToastMessage.d368c817.js";import"./FullWidthAlert.c513e3cd.js";import"./Overlay.58c30ef0.js";import"./DateFormatter.8ed06513.js";import"./useGetDownloadListStatistics.40c5a3e1.js";import"./QueryCount.bf9e6c1f.js";import"./NoData.36c72e72.js";import"./useGetAccessRequirement.54b044a4.js";import"./ManagedACTAccessRequirementStatus.71cdf68d.js";import"./FileUpload.8e4081b6.js";import"./UserSearchBox.bea4187c.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.40572215.js";import"./EntityLink.2869f44a.js";import"./NoSearchResults.1bf290a3.js";import"./SynapseVideo.b8cf5f86.js";import"./IconList.6c7ccfe5.js";import"./UserCardList.34b63afd.js";const lt={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"hard-coded-markdown":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"wiki-page":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"image-demo":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"button-link":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"image-by-syn-id":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},plot:{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"synapse-table":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}}}}},title:"Markdown/MarkdownSynapse",component:t,argTypes:{}},o=n=>e(t,{...n}),r=o.bind({});r.args={markdown:"*markdown* given to the **component**"};const i=o.bind({});i.args={ownerId:"syn12666371",wikiId:"585317"};const p=o.bind({});p.args={ownerId:"syn18142975"};const a=o.bind({});a.args={markdown:`Button link demo 


\${buttonlink?text=Align%20Left&align=left} 


\${buttonlink?text=Align%20Right&align=right} 


\${buttonlink?text=Align%20Center&align=center} 


\${buttonlink?text=Highlight&highlight=true} 


Links to synapse: 

\${buttonlink?text=This%20Button%20Links%20to%20Synapse&url=https://synapse.org/}
  `};const m=o.bind({});m.args={markdown:"Note: you must be signed in to see this image\n${image?synapseId=syn36695878}"};const s=o.bind({});s.args={markdown:'${plot?query=select "id"%2C "createdOn" from syn23567477&title=&type=BAR&barmode=GROUP&horizontal=false&showlegend=true}'};const l=o.bind({});l.args={markdown:`# Synapse Table
Modify the markdown control to change the parameters
\${synapsetable?query=SELECT %2A FROM syn26302617&showquery=false&tableonly=false}`};const dt=["HardCodedMarkdown","WikiPage","ImageDemo","ButtonLink","ImageBySynID","Plot","SynapseTable"];export{a as ButtonLink,r as HardCodedMarkdown,m as ImageBySynID,p as ImageDemo,s as Plot,l as SynapseTable,i as WikiPage,dt as __namedExportsOrder,lt as default};
