import{A as o}from"./AccessRequirementSearchBox.e7bf9dbd.js";import{d as t}from"./ToastMessage.5f109185.js";import{j as r}from"./jsx-runtime.02fcd003.js";import"./Select-54ac8379.esm.865b8397.js";import"./styled.094a3a2c.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./index.0864d1cf.js";import"./iframe.25b1a9fc.js";import"./index.91a9706e.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.bd4bae0e.js";import"./utils.62f6c1ea.js";import"./Alert.92a838df.js";import"./createWithBsPrefix.9fcf4917.js";import"./index.35ce73ec.js";import"./isArray.404de5ac.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.66ad72a0.js";import"./useGetAccessRequirement.6942e412.js";import"./useInfiniteQuery.fc6fd964.js";import"./Skeleton.1c99f826.js";import"./emotion-react.browser.esm.a24af408.js";import"./FullWidthAlert.b9addea3.js";import"./Typography.79e944f5.js";import"./Tooltip.977ea0b9.js";import"./createSvgIcon.37b7d2f8.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.446adc13.js";import"./isSymbol.b2b689d7.js";const E={parameters:{storySource:{source:`import React from 'react'
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
