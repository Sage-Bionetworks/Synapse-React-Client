import{A as e}from"./AccessRequirementSearchBox.7c2f6a3b.js";import{d as t}from"./ToastMessage.3861395a.js";import{j as r}from"./jsx-runtime.b9dbe3f2.js";import"./Select-54ac8379.esm.708df6a0.js";import"./emotion-react.browser.esm.c079a2eb.js";import"./styled.b8523d56.js";import"./index.1d295946.js";import"./iframe.daa7e99b.js";import"./index.5da0c2fe.js";import"./SynapseConstants.aef18750.js";import"./Button.5e8fef04.js";import"./Tooltip.48a3285f.js";import"./SvgIcon.07fafc9f.js";import"./useTheme.0510b97a.js";import"./TransitionGroupContext.550f3593.js";import"./FullWidthAlert.4c795642.js";import"./hook.8a461b2d.js";import"./createWithBsPrefix.e49426e0.js";import"./divWithClassName.39a68f1e.js";import"./index.35ce73ec.js";import"./Typography.67fe2a50.js";import"./Fade.79c18b91.js";import"./isArray.cd664950.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.e161b9ac.js";import"./IconButton.92911f6e.js";import"./ButtonBase.a93e0872.js";import"./Link.da3e8d7d.js";import"./Button.7c5736c7.js";import"./useAccessRequirements.04427f1b.js";import"./useMutation.17976629.js";import"./useInfiniteQuery.d3f40dc1.js";import"./queryKeys.f96c2872.js";import"./Skeleton.e124e8e4.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.dbc9074b.js";import"./toString.e4b44ed1.js";import"./isSymbol.0dd8f9e4.js";const P={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import AccessRequirementSearchBox from './AccessRequirementSearchBox'
import { displayToast } from '../ToastMessage'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Governance/AccessRequirementSearchBox',
  component: AccessRequirementSearchBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof AccessRequirementSearchBox>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AccessRequirementSearchBox> = args => (
  <AccessRequirementSearchBox {...args} />
)

export const AccessRequirementSearchBoxDemo = Template.bind({})
AccessRequirementSearchBoxDemo.args = {
  onChange: id => {
    displayToast('Selected id: ' + id, 'info')
  },
}
`,locationsMap:{"access-requirement-search-box-demo":{startLoc:{col:68,line:16},endLoc:{col:1,line:18},startBody:{col:68,line:16},endBody:{col:1,line:18}}}}},title:"Governance/AccessRequirementSearchBox",component:e,argTypes:{}},n=o=>r(e,{...o}),i=n.bind({});i.args={onChange:o=>{t("Selected id: "+o,"info")}};const Q=["AccessRequirementSearchBoxDemo"];export{i as AccessRequirementSearchBoxDemo,Q as __namedExportsOrder,P as default};
