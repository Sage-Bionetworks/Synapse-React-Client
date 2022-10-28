import{A as o}from"./AccessRequirementSearchBox.0396efe1.js";import{d as t}from"./ToastMessage.80ffeafc.js";import{j as r}from"./jsx-runtime.e32e0509.js";import"./Select-54ac8379.esm.581490dd.js";import"./withStyles.43181c03.js";import"./index.5045cbed.js";import"./iframe.83901080.js";import"./index.97694b3a.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.9a335f28.js";import"./index.57d09176.js";import"./utils.93cc3c4b.js";import"./Alert.1890d96c.js";import"./createWithBsPrefix.eb076d55.js";import"./index.35ce73ec.js";import"./isArray.f12d1068.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.6a1c92b0.js";import"./useGetAccessRequirement.cabfd831.js";import"./useInfiniteQuery.103bebeb.js";import"./Skeleton.4b3eac05.js";import"./FullWidthAlert.2f8dcb3c.js";import"./Typography.c79b8528.js";import"./makeStyles.46d23ebd.js";import"./Tooltip.e08987f2.js";import"./createSvgIcon.3a3703dd.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.44a1c424.js";import"./isSymbol.e91009b1.js";const E={parameters:{storySource:{source:`import React from 'react'
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
