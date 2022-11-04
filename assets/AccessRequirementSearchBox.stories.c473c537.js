import{A as o}from"./AccessRequirementSearchBox.d9e4e66d.js";import{d as t}from"./ToastMessage.b76b29fc.js";import{j as r}from"./jsx-runtime.08584073.js";import"./Select-54ac8379.esm.305999be.js";import"./styled.49e31bee.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./index.10a6a474.js";import"./iframe.46cf6f9c.js";import"./index.8d274cce.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.19eb0a0d.js";import"./utils.564f56d5.js";import"./Alert.50172ad9.js";import"./createWithBsPrefix.84280c3f.js";import"./index.35ce73ec.js";import"./isArray.e00a52bc.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.52412c7b.js";import"./useGetAccessRequirement.7772742c.js";import"./useInfiniteQuery.e2feb110.js";import"./Skeleton.caf11574.js";import"./emotion-react.browser.esm.17352205.js";import"./FullWidthAlert.c938c0bd.js";import"./Typography.afe1a60b.js";import"./Tooltip.f9340fc3.js";import"./createSvgIcon.5c64ba32.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.2262e339.js";import"./isSymbol.bad84e3a.js";const E={parameters:{storySource:{source:`import React from 'react'
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
