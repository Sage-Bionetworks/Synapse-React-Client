import{A as o}from"./AccessRequirementSearchBox.5a396981.js";import{d as t}from"./ToastMessage.5f57197e.js";import{j as r}from"./jsx-runtime.50ef6bf8.js";import"./Select-54ac8379.esm.cd4106ec.js";import"./withStyles.99d8f96c.js";import"./index.c6db38ab.js";import"./iframe.ac4a915a.js";import"./index.0305e6df.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.d599da1d.js";import"./index.57d09176.js";import"./utils.7e5b3029.js";import"./Alert.2486ab7d.js";import"./createWithBsPrefix.62795558.js";import"./index.35ce73ec.js";import"./isArray.20493a87.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.2cd0146b.js";import"./useGetAccessRequirement.4bae3e1f.js";import"./useInfiniteQuery.8f25cfcb.js";import"./Skeleton.bfc72f16.js";import"./FullWidthAlert.039f66d3.js";import"./Typography.eb1a210b.js";import"./makeStyles.2e7d9394.js";import"./Tooltip.ffc53860.js";import"./createSvgIcon.691b588b.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.04211ad5.js";import"./isSymbol.43adfbf0.js";const E={parameters:{storySource:{source:`import React from 'react'
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
