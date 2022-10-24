import{A as o}from"./AccessRequirementSearchBox.f77bfab4.js";import{d as t}from"./ToastMessage.7ffa621b.js";import{j as r}from"./jsx-runtime.4cd7f6c3.js";import"./Select-54ac8379.esm.b71cede4.js";import"./withStyles.3f185fef.js";import"./index.c5ec5593.js";import"./iframe.27dce855.js";import"./index.7cb9050b.js";import"./Button.cfb6901e.js";import"./index.57d09176.js";import"./utils.3d3cd8c3.js";import"./Alert.151390cd.js";import"./index.35ce73ec.js";import"./isArray.cef144cc.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.7b92dd2c.js";import"./useGetAccessRequirement.916ee0ac.js";import"./useInfiniteQuery.434b28c9.js";import"./Skeleton.a445d31b.js";import"./FullWidthAlert.6976790a.js";import"./Typography.ad724512.js";import"./makeStyles.e394e1e5.js";import"./Tooltip.6e492e82.js";import"./createSvgIcon.eca8b7b9.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.e78092cb.js";import"./isSymbol.678ebc7d.js";const G={parameters:{storySource:{source:`import React from 'react'
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
