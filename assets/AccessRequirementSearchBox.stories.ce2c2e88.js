import{A as o}from"./AccessRequirementSearchBox.6bcf08c4.js";import{d as t}from"./ToastMessage.9511113a.js";import{j as r}from"./jsx-runtime.bdebd148.js";import"./Select-54ac8379.esm.8753c42f.js";import"./withStyles.d0c35d1c.js";import"./index.131112ec.js";import"./iframe.92685df1.js";import"./index.8be8b52c.js";import"./Button.2b7fb582.js";import"./index.57d09176.js";import"./utils.d8861539.js";import"./Alert.2a491573.js";import"./index.35ce73ec.js";import"./isArray.b696739b.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.2b88c9a1.js";import"./useGetAccessRequirement.71137bf5.js";import"./useInfiniteQuery.9cb7f5d5.js";import"./Skeleton.8bc2d5f2.js";import"./FullWidthAlert.25897ee9.js";import"./Typography.d5646d3f.js";import"./makeStyles.93952b3f.js";import"./Tooltip.3d6e7019.js";import"./createSvgIcon.27bceae9.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.fdacb119.js";import"./isSymbol.a301e13d.js";const G={parameters:{storySource:{source:`import React from 'react'
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
