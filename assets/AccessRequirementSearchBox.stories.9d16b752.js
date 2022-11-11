import{A as o}from"./AccessRequirementSearchBox.a01f7085.js";import{d as t}from"./ToastMessage.a8e621dc.js";import{j as r}from"./jsx-runtime.02a28547.js";import"./Select-54ac8379.esm.0973ae43.js";import"./styled.2f449268.js";import"./ButtonBase.9cc6b40c.js";import"./TransitionGroupContext.70688128.js";import"./index.a309e2be.js";import"./iframe.0b294b31.js";import"./index.4fdef5f4.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.47e26dba.js";import"./utils.34aadcdd.js";import"./Alert.3df3eb36.js";import"./createWithBsPrefix.c66fa874.js";import"./index.35ce73ec.js";import"./isArray.46d1af5d.js";import"./getEndpoint.bb7ded34.js";import"./Link.4b81c1ee.js";import"./Typography.67a640f4.js";import"./Button.1972b2d6.js";import"./useGetAccessRequirement.98d533d9.js";import"./useInfiniteQuery.47c688b2.js";import"./Skeleton.441b86fc.js";import"./FullWidthAlert.4f5282fe.js";import"./Tooltip.edd9e9f0.js";import"./createSvgIcon.d569702c.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.77032a6a.js";import"./isSymbol.f23d6818.js";const O={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"access-requirement-search-box-demo":{startLoc:{col:68,line:16},endLoc:{col:1,line:18},startBody:{col:68,line:16},endBody:{col:1,line:18}}}}},title:"Synapse/Governance/AccessRequirementSearchBox",component:o,argTypes:{}},n=e=>r(o,{...e}),s=n.bind({});s.args={onChange:e=>{t("Selected id: "+e,"info")}};const z=["AccessRequirementSearchBoxDemo"];export{s as AccessRequirementSearchBoxDemo,z as __namedExportsOrder,O as default};
