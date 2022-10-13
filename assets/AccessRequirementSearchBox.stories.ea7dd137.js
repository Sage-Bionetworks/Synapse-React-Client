import{A as o}from"./AccessRequirementSearchBox.098f9d97.js";import{d as t}from"./ToastMessage.576eb4d8.js";import{j as r}from"./jsx-runtime.4ed473f6.js";import"./Select-54ac8379.esm.783ef3ce.js";import"./withStyles.78cfa842.js";import"./index.02b86482.js";import"./iframe.b5feb82b.js";import"./index.f0d19726.js";import"./Button.c5f20cc4.js";import"./index.57d09176.js";import"./utils.75253d0f.js";import"./Alert.a88bb07f.js";import"./index.35ce73ec.js";import"./isArray.1c017e06.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.d67caae4.js";import"./useGetAccessRequirement.939fa1ec.js";import"./useInfiniteQuery.4e1afba3.js";import"./Skeleton.1c1dc171.js";import"./FullWidthAlert.2db361a7.js";import"./Typography.742205fe.js";import"./makeStyles.dc0e46d4.js";import"./Tooltip.eb6aee31.js";import"./createSvgIcon.691ab6d6.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.021a8dc5.js";import"./isSymbol.24e18969.js";const G={parameters:{storySource:{source:`import React from 'react'
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
