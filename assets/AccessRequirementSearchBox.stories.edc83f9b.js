import{A as o}from"./AccessRequirementSearchBox.17ee23d7.js";import{d as t}from"./ToastMessage.3b077507.js";import{j as r}from"./jsx-runtime.e755df9d.js";import"./Select-54ac8379.esm.b2296e53.js";import"./styled.134e90bd.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./index.46e2a3d6.js";import"./iframe.2151c0e3.js";import"./index.f37f3b8f.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.ce5d2622.js";import"./utils.61686747.js";import"./Alert.7ac348fd.js";import"./createWithBsPrefix.c5475a12.js";import"./index.35ce73ec.js";import"./isArray.32035835.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.26fd4209.js";import"./useGetAccessRequirement.0c246789.js";import"./useInfiniteQuery.c9dc13c8.js";import"./Skeleton.902d2113.js";import"./emotion-react.browser.esm.888ec03a.js";import"./FullWidthAlert.4c671361.js";import"./Typography.c9ad912d.js";import"./Tooltip.68fb53f0.js";import"./createSvgIcon.4e7dae8f.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.05b48118.js";import"./isSymbol.449c22fe.js";const E={parameters:{storySource:{source:`import React from 'react'
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
