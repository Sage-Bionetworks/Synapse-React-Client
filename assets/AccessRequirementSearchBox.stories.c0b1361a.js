import{A as o}from"./AccessRequirementSearchBox.cdd2eab7.js";import{d as t}from"./ToastMessage.167572b3.js";import{j as r}from"./jsx-runtime.aa766aaf.js";import"./Select-54ac8379.esm.d21451eb.js";import"./ButtonBase.4c393dc9.js";import"./styled.2fe8edb9.js";import"./TransitionGroupContext.4c6d8009.js";import"./index.2efb6d36.js";import"./iframe.bd885096.js";import"./index.0a2c4939.js";import"./SynapseConstants.290eab74.js";import"./Button.c2cc208f.js";import"./utils.b239c5dc.js";import"./Alert.f1eda723.js";import"./createWithBsPrefix.2cafb9ec.js";import"./index.35ce73ec.js";import"./isArray.24130e12.js";import"./getEndpoint.bb7ded34.js";import"./Link.d09d0f36.js";import"./Typography.57d7ee2f.js";import"./Button.d4a39ac2.js";import"./useGetAccessRequirement.0c595617.js";import"./useInfiniteQuery.9a0fe06d.js";import"./Skeleton.b9cd2726.js";import"./FullWidthAlert.8371c9c1.js";import"./Tooltip.e4334ac7.js";import"./createSvgIcon.d27817df.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.bdc3b93e.js";import"./isSymbol.36b96d1e.js";const O={parameters:{storySource:{source:`import React from 'react'
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
