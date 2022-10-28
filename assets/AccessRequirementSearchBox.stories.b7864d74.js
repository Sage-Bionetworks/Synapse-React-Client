import{A as o}from"./AccessRequirementSearchBox.95863bee.js";import{d as t}from"./ToastMessage.97b225d1.js";import{j as r}from"./jsx-runtime.1d4416c9.js";import"./Select-54ac8379.esm.c7895ad9.js";import"./withStyles.d9b674b1.js";import"./index.b4915227.js";import"./iframe.6e2e208e.js";import"./index.733ef2d4.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.52817769.js";import"./index.57d09176.js";import"./utils.12e9eddb.js";import"./Alert.a029b8a7.js";import"./createWithBsPrefix.e9487138.js";import"./index.35ce73ec.js";import"./isArray.cf5064fd.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.1ce682e0.js";import"./useGetAccessRequirement.83dcd0d3.js";import"./useInfiniteQuery.f21582a5.js";import"./Skeleton.5fb82d71.js";import"./FullWidthAlert.fd7cf951.js";import"./Typography.8752acbc.js";import"./makeStyles.0711e4e8.js";import"./Tooltip.514cbe94.js";import"./createSvgIcon.1518894e.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.b31d8e69.js";import"./isSymbol.48f5f8d1.js";const E={parameters:{storySource:{source:`import React from 'react'
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
