import{A as o}from"./AccessRequirementSearchBox.277f0efd.js";import{d as t}from"./ToastMessage.0ac4744b.js";import{j as r}from"./jsx-runtime.e72699d7.js";import"./Select-54ac8379.esm.a705b656.js";import"./emotion-react.browser.esm.6478344e.js";import"./styled.113fc281.js";import"./index.71f9d2b1.js";import"./iframe.e515b461.js";import"./index.34864443.js";import"./SynapseConstants.290eab74.js";import"./Button.69f4aad2.js";import"./Tooltip.626a672e.js";import"./TransitionGroupContext.2e90d9c8.js";import"./useTheme.3c585c97.js";import"./Alert.d9dcb62e.js";import"./hook.dcb03d67.js";import"./createWithBsPrefix.93be1871.js";import"./divWithClassName.15ce1beb.js";import"./index.35ce73ec.js";import"./Fade.2e614c5f.js";import"./isArray.768225e0.js";import"./getEndpoint.bb7ded34.js";import"./IconSvg.91cc0bda.js";import"./IconButton.53297fa9.js";import"./ButtonBase.1e74724a.js";import"./Link.2241f35d.js";import"./Typography.4509eb0e.js";import"./Button.5bebd4e9.js";import"./useGetAccessRequirement.9c48ddf0.js";import"./useInfiniteQuery.2bc38fa4.js";import"./Skeleton.015bfbc5.js";import"./FullWidthAlert.2ca2db91.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.7182a54a.js";import"./isSymbol.24e67468.js";const J={parameters:{storySource:{source:`import React from 'react'
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
