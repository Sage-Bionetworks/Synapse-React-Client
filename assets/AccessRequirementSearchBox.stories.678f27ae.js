import{A as o}from"./AccessRequirementSearchBox.36a7ade2.js";import{d as t}from"./ToastMessage.a51dddf9.js";import{j as r}from"./jsx-runtime.4eaffca0.js";import"./Select-54ac8379.esm.3acfea25.js";import"./withStyles.21c7e80a.js";import"./index.48154df0.js";import"./iframe.f6ed0eb4.js";import"./index.e08ca228.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.9f15dabf.js";import"./index.57d09176.js";import"./utils.2281a9d6.js";import"./Alert.27b9a701.js";import"./createWithBsPrefix.735cbed5.js";import"./index.35ce73ec.js";import"./isArray.33858a1d.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.4d40d0c3.js";import"./useGetAccessRequirement.adc2edf4.js";import"./useInfiniteQuery.0db4af83.js";import"./Skeleton.3c162426.js";import"./FullWidthAlert.e49b83f6.js";import"./Typography.95636964.js";import"./makeStyles.c1994d74.js";import"./Tooltip.baf92203.js";import"./createSvgIcon.d152a531.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.93f128ba.js";import"./isSymbol.fff1a0c2.js";const E={parameters:{storySource:{source:`import React from 'react'
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
