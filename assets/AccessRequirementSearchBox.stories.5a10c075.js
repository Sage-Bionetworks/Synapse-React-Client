import{A as o}from"./AccessRequirementSearchBox.db45bb5e.js";import{d as t}from"./ToastMessage.c1cdbab7.js";import{j as r}from"./jsx-runtime.6fc4771b.js";import"./Select-54ac8379.esm.1e94b6b0.js";import"./withStyles.f9df3835.js";import"./index.4e1486f8.js";import"./iframe.14db13df.js";import"./index.bff2d9c7.js";import"./Button.297619c8.js";import"./index.57d09176.js";import"./utils.6fc55841.js";import"./Alert.bb2e2328.js";import"./index.35ce73ec.js";import"./isArray.3cde12a0.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.e84ee4e0.js";import"./useGetAccessRequirement.8aedbc3a.js";import"./useInfiniteQuery.ad2a716c.js";import"./Skeleton.2663a88c.js";import"./FullWidthAlert.7459bb3c.js";import"./Typography.1c5796c6.js";import"./makeStyles.f8fe9b08.js";import"./Tooltip.45d64ebd.js";import"./createSvgIcon.3ee235fb.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.aecb96d3.js";import"./isSymbol.6068a581.js";const G={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"access-requirement-search-box-demo":{startLoc:{col:68,line:16},endLoc:{col:1,line:18},startBody:{col:68,line:16},endBody:{col:1,line:18}}}}},title:"Synapse/Governance/AccessRequirementSearchBox",component:o,argTypes:{}},n=e=>r(o,{...e}),s=n.bind({});s.args={onChange:e=>{t("Selected id: "+e,"info")}};const L=["AccessRequirementSearchBoxDemo"];export{s as AccessRequirementSearchBoxDemo,L as __namedExportsOrder,G as default};
