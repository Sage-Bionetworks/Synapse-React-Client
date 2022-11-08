import{A as o}from"./AccessRequirementSearchBox.ad9ce0cf.js";import{d as t}from"./ToastMessage.356d6e1c.js";import{j as r}from"./jsx-runtime.325e7137.js";import"./Select-54ac8379.esm.7d4435ca.js";import"./styled.8997d4d9.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./index.1c9fa93d.js";import"./iframe.d25110d4.js";import"./index.26ad4be5.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.2661b6a1.js";import"./utils.373161e6.js";import"./Alert.29e6a249.js";import"./createWithBsPrefix.2155bd3d.js";import"./index.35ce73ec.js";import"./isArray.ba495a61.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.ac4cf4e1.js";import"./useGetAccessRequirement.2e163384.js";import"./useInfiniteQuery.afe5b6da.js";import"./Skeleton.4f13b0c1.js";import"./emotion-react.browser.esm.f1e534da.js";import"./FullWidthAlert.3575feb9.js";import"./Typography.46ba432f.js";import"./Tooltip.4e888661.js";import"./createSvgIcon.3ee89089.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.69d847eb.js";import"./isSymbol.2f09fe74.js";const E={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"access-requirement-search-box-demo":{startLoc:{col:68,line:16},endLoc:{col:1,line:18},startBody:{col:68,line:16},endBody:{col:1,line:18}}}}},title:"Synapse/Governance/AccessRequirementSearchBox",component:o,argTypes:{}},n=e=>r(o,{...e}),s=n.bind({});s.args={onChange:e=>{t("Selected id: "+e,"info")}};const O=["AccessRequirementSearchBoxDemo"];export{s as AccessRequirementSearchBoxDemo,O as __namedExportsOrder,E as default};
