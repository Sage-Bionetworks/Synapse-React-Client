import{A as o}from"./AccessRequirementSearchBox.f7f4f93b.js";import{d as t}from"./ToastMessage.29ea9537.js";import{j as r}from"./jsx-runtime.a4497586.js";import"./Select-54ac8379.esm.1b620f4e.js";import"./withStyles.e58effce.js";import"./index.917fd15d.js";import"./iframe.ee324841.js";import"./index.845be1a0.js";import"./Button.7ac62e85.js";import"./index.57d09176.js";import"./utils.815e1282.js";import"./Alert.ea5d26f8.js";import"./index.35ce73ec.js";import"./isArray.c41320ad.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.22d8eb07.js";import"./useGetAccessRequirement.20a2228d.js";import"./useInfiniteQuery.61b1e683.js";import"./Skeleton.9af51d39.js";import"./FullWidthAlert.6e6e96b4.js";import"./Typography.15373abf.js";import"./makeStyles.589ac29c.js";import"./Tooltip.a6d04027.js";import"./createSvgIcon.e5aecfe8.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.d008468a.js";import"./isSymbol.7191624c.js";const G={parameters:{storySource:{source:`import React from 'react'
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
