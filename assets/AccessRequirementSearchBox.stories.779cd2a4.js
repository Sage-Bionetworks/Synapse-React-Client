import{A as o}from"./AccessRequirementSearchBox.23ed2fe6.js";import{d as t}from"./ToastMessage.715b02dd.js";import{j as r}from"./jsx-runtime.f4a5fef7.js";import"./Select-54ac8379.esm.5a35ae0a.js";import"./emotion-react.browser.esm.e2223364.js";import"./styled.02bbe28b.js";import"./index.ee4c3b55.js";import"./iframe.1c2d6841.js";import"./index.78005489.js";import"./SynapseConstants.290eab74.js";import"./Button.6c384231.js";import"./utils.c51ff475.js";import"./TransitionGroupContext.bc250134.js";import"./useTheme.cb95caa9.js";import"./Alert.4753fb70.js";import"./hook.82a0cc8c.js";import"./createWithBsPrefix.54f05b7e.js";import"./divWithClassName.967bfcd9.js";import"./index.35ce73ec.js";import"./Fade.f600cb07.js";import"./isArray.c85c7bf8.js";import"./getEndpoint.bb7ded34.js";import"./Link.880594dd.js";import"./Typography.839bb703.js";import"./Button.4567776a.js";import"./ButtonBase.380fb064.js";import"./useGetAccessRequirement.fb88d496.js";import"./useInfiniteQuery.61e681b6.js";import"./Skeleton.c4f2e78a.js";import"./FullWidthAlert.dfc3d6c6.js";import"./Tooltip.8a367305.js";import"./createSvgIcon.5d1f0251.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.f0e21060.js";import"./isSymbol.f04221fe.js";const J={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import AccessRequirementSearchBox from './AccessRequirementSearchBox'
import { displayToast } from '../ToastMessage'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Synapse/Governance/AccessRequirementSearchBox',
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
`,locationsMap:{"access-requirement-search-box-demo":{startLoc:{col:68,line:16},endLoc:{col:1,line:18},startBody:{col:68,line:16},endBody:{col:1,line:18}}}}},title:"Synapse/Governance/AccessRequirementSearchBox",component:o,argTypes:{}},n=e=>r(o,{...e}),s=n.bind({});s.args={onChange:e=>{t("Selected id: "+e,"info")}};const K=["AccessRequirementSearchBoxDemo"];export{s as AccessRequirementSearchBoxDemo,K as __namedExportsOrder,J as default};
