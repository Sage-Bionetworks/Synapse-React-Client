import{A as o}from"./AccessRequirementSearchBox.8c51d5a2.js";import{d as t}from"./ToastMessage.7470eb0d.js";import{j as r}from"./jsx-runtime.e6c7cb0f.js";import"./Select-54ac8379.esm.1e9a4ed4.js";import"./emotion-react.browser.esm.0fa712d1.js";import"./styled.defe1bf4.js";import"./index.2be90583.js";import"./iframe.62902f49.js";import"./index.a4d7c90b.js";import"./SynapseConstants.4792b5b5.js";import"./Button.55945b82.js";import"./Tooltip.b8c59786.js";import"./SvgIcon.277e4012.js";import"./useTheme.78ea417a.js";import"./TransitionGroupContext.9be55353.js";import"./Alert.dd9a8045.js";import"./hook.0a44a4bc.js";import"./createWithBsPrefix.d521861c.js";import"./divWithClassName.f3083196.js";import"./index.35ce73ec.js";import"./Fade.43ac51c5.js";import"./isArray.d7f4d705.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.7c6c26ba.js";import"./IconButton.3458b12d.js";import"./ButtonBase.c32891f3.js";import"./Link.f733bec4.js";import"./Typography.491b6426.js";import"./Button.6ec7c4e8.js";import"./useAccessRequirements.b54ba1ba.js";import"./useInfiniteQuery.c9325a79.js";import"./Skeleton.fe2a8391.js";import"./FullWidthAlert.194d0790.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.3a766a50.js";import"./isSymbol.361bd2a3.js";const K={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"access-requirement-search-box-demo":{startLoc:{col:68,line:16},endLoc:{col:1,line:18},startBody:{col:68,line:16},endBody:{col:1,line:18}}}}},title:"Synapse/Governance/AccessRequirementSearchBox",component:o,argTypes:{}},n=e=>r(o,{...e}),s=n.bind({});s.args={onChange:e=>{t("Selected id: "+e,"info")}};const N=["AccessRequirementSearchBoxDemo"];export{s as AccessRequirementSearchBoxDemo,N as __namedExportsOrder,K as default};
