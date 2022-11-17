import{A as o}from"./AccessRequirementSearchBox.f4030a9d.js";import{d as t}from"./ToastMessage.82d4ebc5.js";import{j as r}from"./jsx-runtime.24304d9c.js";import"./Select-54ac8379.esm.59c2c14c.js";import"./ButtonBase.6b005451.js";import"./styled.4d5a18a7.js";import"./TransitionGroupContext.49f32f92.js";import"./index.674f08c5.js";import"./iframe.b3940f38.js";import"./index.dc703903.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.505c8034.js";import"./utils.867613ea.js";import"./Alert.ec6d4a4e.js";import"./createWithBsPrefix.ee70c17d.js";import"./index.35ce73ec.js";import"./isArray.9daed148.js";import"./getEndpoint.bb7ded34.js";import"./Link.3aacec77.js";import"./Typography.7f52bb2e.js";import"./Button.8a732419.js";import"./useGetAccessRequirement.2672c514.js";import"./useInfiniteQuery.f11f30ad.js";import"./Skeleton.9c115467.js";import"./FullWidthAlert.ca6203e3.js";import"./Tooltip.5f9b84c2.js";import"./createSvgIcon.54a87752.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.05165c8c.js";import"./isSymbol.63d43715.js";const O={parameters:{storySource:{source:`import React from 'react'
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
