import{a as t}from"./CardContainerLogic.9969f463.js";import{j as e}from"./jsx-runtime.00d70968.js";import"./index.a536ed12.js";import"./withStyles.5fe35516.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.b74d1cfd.js";import"./index.57d09176.js";import"./Button.fda23eee.js";import"./Transition.8278edb2.js";import"./index.35ce73ec.js";import"./toString.d84aaeca.js";import"./assert.fddb1cad.js";import"./iframe.f8de4d79.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.e37b9412.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.9ad81144.js";import"./use-deep-compare-effect.esm.0387ba0e.js";import"./uniq.21cfaf51.js";import"./toInteger.0e6612b4.js";import"./_cacheHas.cc87b06a.js";import"./without.067eb9a7.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.51001575.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.debd858a.js";import"./Tooltip.6d92cd5b.js";import"./createSvgIcon.99e72c0f.js";import"./slicedToArray.e72f11da.js";import"./useTheme.aaa309f8.js";import"./makeStyles.45e8b79c.js";import"./InfoOutlined.60e019a4.js";import"./ElementWithTooltip.78af9f5c.js";import"./SynapseTableConstants.07ecdebd.js";import"./index.8ed07549.js";import"./Dropdown.b0dc465f.js";import"./Modal.1fb607f9.js";import"./useWaitForDOMRef.97759fd7.js";import"./useWillUnmount.4a16e5cd.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.44e3343c.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.9e234cde.js";import"./queryUtils.5251d1e3.js";import"./cloneDeep.01d4ff36.js";import"./Checkbox.c68b07e0.js";import"./uniqueId.eba72690.js";import"./Collapse.1f37bc76.js";import"./RadioGroup.d19dd04f.js";import"./moment.a565bb48.js";import"./RangeSlider.df5d4da8.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.b55dfb91.js";import"./react-sizeme.35566800.js";import"./Skeleton.99b24529.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.91642215.js";import"./Typography.868473dc.js";import"./Select-54ac8379.esm.edd779c2.js";import"./CustomSelectWidget.b1e9ceda.js";import"./core.esm.7e77fe07.js";import"./index.4d54b1e5.js";import"./index.66e0b57e.js";import"./index.440cefe9.js";import"./isEmpty.e0c76c4b.js";import"./_baseIsEqual.464c1a19.js";import"./index.browser.36271dcc.js";import"./union.f396c337.js";import"./react-intersection-observer.esm.e445ee86.js";import"./UserCard.0eeb2c8e.js";import"./IconCopy.095bf867.js";import"./SkeletonTable.ec4e7fc2.js";import"./times.b28c51b3.js";import"./ToastMessage.de6992d0.js";import"./FullWidthAlert.6afa82c9.js";import"./Overlay.7bb560f6.js";import"./DateFormatter.a5d74ef1.js";import"./useGetDownloadListStatistics.4a5e49e5.js";import"./QueryCount.32c1bf4b.js";import"./NoData.22383cce.js";import"./useGetAccessRequirement.daa359ed.js";import"./ManagedACTAccessRequirementStatus.13dcc250.js";import"./FileUpload.535eee0c.js";import"./UserSearchBox.d2a579a3.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.3c5ed09e.js";import"./EntityLink.75067f88.js";import"./NoSearchResults.a01d676d.js";import"./SynapseVideo.481872ef.js";import"./IconList.43e19c16.js";import"./UserCardList.c357a617.js";const ot={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"hard-coded-markdown":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"wiki-page":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"image-demo":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"button-link":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"image-by-syn-id":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},plot:{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"synapse-table":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}}}}},title:"Markdown/MarkdownSynapse",component:t,argTypes:{}},o=n=>e(t,{...n}),r=o.bind({});r.args={markdown:"*markdown* given to the **component**"};const i=o.bind({});i.args={ownerId:"syn12666371",wikiId:"585317"};const a=o.bind({});a.args={ownerId:"syn18142975"};const p=o.bind({});p.args={markdown:`Button link demo 


\${buttonlink?text=Align%20Left&align=left} 


\${buttonlink?text=Align%20Right&align=right} 


\${buttonlink?text=Align%20Center&align=center} 


\${buttonlink?text=Highlight&highlight=true} 


Links to synapse: 

\${buttonlink?text=This%20Button%20Links%20to%20Synapse&url=https://synapse.org/}
  `};const m=o.bind({});m.args={markdown:"Note: you must be signed in to see this image\n${image?synapseId=syn36695878}"};const s=o.bind({});s.args={markdown:'${plot?query=select "id"%2C "createdOn" from syn23567477&title=&type=BAR&barmode=GROUP&horizontal=false&showlegend=true}'};const l=o.bind({});l.args={markdown:`# Synapse Table
Modify the markdown control to change the parameters
\${synapsetable?query=SELECT %2A FROM syn26302617&showquery=false&tableonly=false}`};const tt=["HardCodedMarkdown","WikiPage","ImageDemo","ButtonLink","ImageBySynID","Plot","SynapseTable"];export{p as ButtonLink,r as HardCodedMarkdown,m as ImageBySynID,a as ImageDemo,s as Plot,l as SynapseTable,i as WikiPage,tt as __namedExportsOrder,ot as default};
