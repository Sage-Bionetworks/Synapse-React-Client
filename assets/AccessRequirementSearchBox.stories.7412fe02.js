import{A as o}from"./AccessRequirementSearchBox.9794eb5c.js";import{d as t}from"./ToastMessage.26e3c87f.js";import{j as r}from"./jsx-runtime.1f7e2749.js";import"./Select-54ac8379.esm.42cdf544.js";import"./styled.228dca89.js";import"./ButtonBase.1b6ed208.js";import"./TransitionGroupContext.1be95f81.js";import"./index.59f4cc8a.js";import"./iframe.6a6b78dc.js";import"./index.f68a6cae.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.2ee39cf1.js";import"./utils.03e93c91.js";import"./Alert.6d227703.js";import"./createWithBsPrefix.ef9ee852.js";import"./index.35ce73ec.js";import"./isArray.4b374ec1.js";import"./getEndpoint.bb7ded34.js";import"./Link.78173b1f.js";import"./Typography.07e15eab.js";import"./Button.a8e6e6bc.js";import"./useGetAccessRequirement.15967366.js";import"./useInfiniteQuery.45f793da.js";import"./Skeleton.5856d9ed.js";import"./FullWidthAlert.aa236ca8.js";import"./Tooltip.24f13342.js";import"./createSvgIcon.78845d16.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.1ab068bd.js";import"./isSymbol.71d03595.js";const O={parameters:{storySource:{source:`import React from 'react'
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
