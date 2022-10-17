import{A as o}from"./AccessRequirementSearchBox.2fec4c6d.js";import{d as t}from"./ToastMessage.96fdad3b.js";import{j as r}from"./jsx-runtime.7bb0e56b.js";import"./Select-54ac8379.esm.fcbe3f9f.js";import"./withStyles.cfb33818.js";import"./index.a95f094b.js";import"./iframe.dbb57267.js";import"./index.cdf5fd1c.js";import"./Button.f83d0e63.js";import"./index.57d09176.js";import"./utils.82646225.js";import"./Alert.fd35fd52.js";import"./index.35ce73ec.js";import"./isArray.40a0d4da.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.fff48821.js";import"./useGetAccessRequirement.48aac28d.js";import"./useInfiniteQuery.4c8a7be7.js";import"./Skeleton.7484c3ca.js";import"./FullWidthAlert.e8b3b992.js";import"./Typography.3da982eb.js";import"./makeStyles.d82b1154.js";import"./Tooltip.463ecf05.js";import"./createSvgIcon.da2780da.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.a068bfca.js";import"./isSymbol.f94b6455.js";const G={parameters:{storySource:{source:`import React from 'react'
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
