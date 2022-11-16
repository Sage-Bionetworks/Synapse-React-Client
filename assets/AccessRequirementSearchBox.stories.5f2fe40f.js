import{A as o}from"./AccessRequirementSearchBox.0aefb6d2.js";import{d as t}from"./ToastMessage.25510bc7.js";import{j as r}from"./jsx-runtime.cf19754d.js";import"./Select-54ac8379.esm.679747cc.js";import"./ButtonBase.213ee5c8.js";import"./styled.db2da3d6.js";import"./TransitionGroupContext.49564fef.js";import"./index.b04ce0ac.js";import"./iframe.bb4f3d50.js";import"./index.68bd09f4.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.724ba963.js";import"./utils.621f5968.js";import"./Alert.00c62036.js";import"./createWithBsPrefix.5ad4e507.js";import"./index.35ce73ec.js";import"./isArray.eece51ec.js";import"./getEndpoint.bb7ded34.js";import"./Link.e3bd49f6.js";import"./Typography.5f784a3a.js";import"./Button.a3c516df.js";import"./useGetAccessRequirement.7ae4ffe9.js";import"./useInfiniteQuery.6e921c50.js";import"./Skeleton.9037b65a.js";import"./FullWidthAlert.338c252c.js";import"./Tooltip.0925b53e.js";import"./createSvgIcon.4f04198d.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.964022b9.js";import"./isSymbol.c5104d65.js";const O={parameters:{storySource:{source:`import React from 'react'
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
