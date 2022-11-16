import{A as o}from"./AccessRequirementSearchBox.05ad8898.js";import{d as t}from"./ToastMessage.c7bcf1c5.js";import{j as r}from"./jsx-runtime.ef6dd6ca.js";import"./Select-54ac8379.esm.5ff88fb9.js";import"./ButtonBase.acc32807.js";import"./styled.e27331e3.js";import"./TransitionGroupContext.7ee16c7e.js";import"./index.0c4c5f34.js";import"./iframe.60aac2d9.js";import"./index.dae95658.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.a73b55da.js";import"./utils.e96b9b4f.js";import"./Alert.ca959f09.js";import"./createWithBsPrefix.fd753f10.js";import"./index.35ce73ec.js";import"./isArray.aa335c2b.js";import"./getEndpoint.bb7ded34.js";import"./Link.3eeff9dd.js";import"./Typography.4e908f90.js";import"./Button.325fe68b.js";import"./useGetAccessRequirement.c14e61d7.js";import"./useInfiniteQuery.4c4e2780.js";import"./Skeleton.537bc7c9.js";import"./FullWidthAlert.d500669b.js";import"./Tooltip.3430fa1d.js";import"./createSvgIcon.f73758be.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.d637a5d8.js";import"./isSymbol.3aa79a3a.js";const O={parameters:{storySource:{source:`import React from 'react'
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
