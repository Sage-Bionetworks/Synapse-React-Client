import{A as e}from"./AccessRequirementSearchBox.2df1a3b9.js";import{d as t}from"./ToastMessage.0ad637d7.js";import{j as r}from"./jsx-runtime.30b0b063.js";import"./Select-54ac8379.esm.dc31b5d3.js";import"./emotion-react.browser.esm.f592d4ba.js";import"./styled.4350a8f3.js";import"./index.a3b83451.js";import"./iframe.7f20f630.js";import"./index.004e53d6.js";import"./SynapseConstants.aef18750.js";import"./Button.4f0daaa4.js";import"./Tooltip.f326ea8a.js";import"./SvgIcon.a1d78dff.js";import"./useTheme.bbb702a0.js";import"./TransitionGroupContext.4dd5d6a9.js";import"./FullWidthAlert.12957b45.js";import"./hook.82358120.js";import"./createWithBsPrefix.67525ed1.js";import"./divWithClassName.fc6b9e1a.js";import"./index.35ce73ec.js";import"./Typography.e0f3806f.js";import"./Fade.13693e7f.js";import"./isArray.1ceec0fc.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.9b38face.js";import"./IconButton.32d1d9ea.js";import"./ButtonBase.32a6d369.js";import"./Link.671fdc30.js";import"./Button.9f139960.js";import"./useAccessRequirements.c825da38.js";import"./useMutation.8683269e.js";import"./useInfiniteQuery.26f32ba1.js";import"./queryKeys.f96c2872.js";import"./Skeleton.12921ce3.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.11b542f1.js";import"./toString.0784e7f5.js";import"./isSymbol.a68e106b.js";const P={parameters:{storySource:{source:`import React from 'react'
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
