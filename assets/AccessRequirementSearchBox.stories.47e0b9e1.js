import{A as o}from"./AccessRequirementSearchBox.7d7e22de.js";import{d as t}from"./ToastMessage.75433d78.js";import{j as r}from"./jsx-runtime.f2f98a5a.js";import"./Select-54ac8379.esm.7808e908.js";import"./withStyles.c893a568.js";import"./index.9f26ffd6.js";import"./iframe.3db3203a.js";import"./index.3643f9f4.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.498cd291.js";import"./index.57d09176.js";import"./utils.b0185ad4.js";import"./Alert.df9cc8b6.js";import"./createWithBsPrefix.859b1c88.js";import"./index.35ce73ec.js";import"./isArray.7423227f.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.aef32627.js";import"./useGetAccessRequirement.84b06265.js";import"./useInfiniteQuery.d88b8f82.js";import"./Skeleton.756bfafa.js";import"./FullWidthAlert.007c198f.js";import"./Typography.32e9e32f.js";import"./makeStyles.b901d8a5.js";import"./Tooltip.1481a07d.js";import"./createSvgIcon.6b81a395.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.cb398276.js";import"./isSymbol.b0b5d283.js";const E={parameters:{storySource:{source:`import React from 'react'
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
