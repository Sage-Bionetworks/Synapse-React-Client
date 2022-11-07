import{A as o}from"./AccessRequirementSearchBox.4ab92653.js";import{d as t}from"./ToastMessage.34ffacc9.js";import{j as r}from"./jsx-runtime.189701ee.js";import"./Select-54ac8379.esm.d6037ef2.js";import"./styled.6dbd55b6.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./index.1acdd9cd.js";import"./iframe.d1747881.js";import"./index.8c58329a.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.870eaf25.js";import"./utils.7f7b7d48.js";import"./Alert.e0d24906.js";import"./createWithBsPrefix.6d9f981e.js";import"./index.35ce73ec.js";import"./isArray.f833655b.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.2c64a678.js";import"./useGetAccessRequirement.f3ba1d7d.js";import"./useInfiniteQuery.e47eb1f5.js";import"./Skeleton.6e56f69d.js";import"./emotion-react.browser.esm.3ce94781.js";import"./FullWidthAlert.15bf5cc7.js";import"./Typography.98c54a5a.js";import"./Tooltip.23ad89d7.js";import"./createSvgIcon.4942519b.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.d6d54f39.js";import"./isSymbol.9e8ac4ca.js";const E={parameters:{storySource:{source:`import React from 'react'
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
