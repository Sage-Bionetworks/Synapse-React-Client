import{A as o}from"./AccessRequirementSearchBox.7f883b28.js";import{d as t}from"./ToastMessage.68896504.js";import{j as r}from"./jsx-runtime.1ec48991.js";import"./Select-54ac8379.esm.7298567a.js";import"./styled.b563b14e.js";import"./ButtonBase.385491e5.js";import"./TransitionGroupContext.bea386fe.js";import"./index.e6805b9d.js";import"./iframe.17825d5d.js";import"./index.68bd0253.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.10450b9c.js";import"./utils.cfe4cf21.js";import"./Alert.3ceff35f.js";import"./createWithBsPrefix.4e16079c.js";import"./index.35ce73ec.js";import"./isArray.57b36520.js";import"./getEndpoint.bb7ded34.js";import"./Link.9d6a28d3.js";import"./Typography.d731394a.js";import"./Button.a57d4d2f.js";import"./useGetAccessRequirement.01759ff4.js";import"./useInfiniteQuery.32675929.js";import"./Skeleton.04d77aea.js";import"./FullWidthAlert.4fc4aa23.js";import"./Tooltip.37175240.js";import"./createSvgIcon.bd0679c5.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.18f3bcbd.js";import"./isSymbol.39bb0bca.js";const O={parameters:{storySource:{source:`import React from 'react'
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
