import{A as o}from"./AccessRequirementSearchBox.86716c8d.js";import{d as t}from"./ToastMessage.1747dfd4.js";import{j as r}from"./jsx-runtime.7534b5a0.js";import"./Select-54ac8379.esm.3b7e103b.js";import"./withStyles.ecbbcd0d.js";import"./index.5a0550e3.js";import"./iframe.cb5f3f40.js";import"./index.6f245744.js";import"./Button.facab635.js";import"./index.57d09176.js";import"./utils.b18b59db.js";import"./Alert.9c82c23c.js";import"./index.35ce73ec.js";import"./isArray.1150e90d.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.9b76f9a1.js";import"./useGetAccessRequirement.b3079609.js";import"./useInfiniteQuery.854b3fbd.js";import"./Skeleton.30b9665e.js";import"./FullWidthAlert.95dc5339.js";import"./Typography.31b00c6c.js";import"./makeStyles.c0018ba8.js";import"./Tooltip.71890e59.js";import"./createSvgIcon.ae6f4177.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.4137f4c9.js";import"./isSymbol.c1d6cf65.js";const G={parameters:{storySource:{source:`import React from 'react'
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
