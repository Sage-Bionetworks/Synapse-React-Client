import{A as o}from"./AccessRequirementSearchBox.431f0d6f.js";import{d as t}from"./ToastMessage.cdfb50d6.js";import{j as r}from"./jsx-runtime.b29a5274.js";import"./Select-54ac8379.esm.f0abb30f.js";import"./withStyles.2d1152f5.js";import"./index.73e3d9d7.js";import"./iframe.45f65fdb.js";import"./index.dcde5598.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.c77a6de6.js";import"./index.57d09176.js";import"./utils.c867bc57.js";import"./Alert.5f5d4d35.js";import"./createWithBsPrefix.2e8fbe6b.js";import"./index.35ce73ec.js";import"./isArray.0036f9bf.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.5f62e5e7.js";import"./useGetAccessRequirement.172f6b7e.js";import"./useInfiniteQuery.d24d0056.js";import"./Skeleton.c9932f2f.js";import"./FullWidthAlert.3cefffa2.js";import"./Typography.e39b1a57.js";import"./makeStyles.90bec0f4.js";import"./Tooltip.76e779de.js";import"./createSvgIcon.363a4d4a.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.759a0be8.js";import"./isSymbol.9796f8db.js";const E={parameters:{storySource:{source:`import React from 'react'
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
