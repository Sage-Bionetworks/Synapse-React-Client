import{A as o}from"./AccessRequirementSearchBox.cf1141bc.js";import{d as t}from"./ToastMessage.0eedc8b3.js";import{j as r}from"./jsx-runtime.66426239.js";import"./Select-54ac8379.esm.55f4ced4.js";import"./withStyles.c0f84b5f.js";import"./index.06c514da.js";import"./iframe.7709cd8b.js";import"./index.5eb45ec5.js";import"./Button.0925c41b.js";import"./index.57d09176.js";import"./utils.dd2a9ff9.js";import"./Alert.6f0c6d33.js";import"./index.35ce73ec.js";import"./isArray.563d20f4.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.bec2abf5.js";import"./useGetAccessRequirement.4709fedf.js";import"./useInfiniteQuery.3f76db01.js";import"./Skeleton.b36923c9.js";import"./FullWidthAlert.28f85f7a.js";import"./Typography.23a20d7c.js";import"./makeStyles.c7a35cbe.js";import"./Tooltip.20b2ac09.js";import"./createSvgIcon.11e8f9d3.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.2b0d7b31.js";import"./isSymbol.e6b0fab2.js";const G={parameters:{storySource:{source:`import React from 'react'
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
