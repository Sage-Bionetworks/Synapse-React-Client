import{A as o}from"./AccessRequirementSearchBox.36b5a154.js";import{d as t}from"./ToastMessage.dffa6777.js";import{j as r}from"./jsx-runtime.e45f5946.js";import"./Select-54ac8379.esm.1506e5bc.js";import"./emotion-react.browser.esm.1d99b462.js";import"./styled.11fa6590.js";import"./index.2f057391.js";import"./iframe.db0e90de.js";import"./index.84caca20.js";import"./SynapseConstants.290eab74.js";import"./Button.85a360c3.js";import"./utils.e1966123.js";import"./TransitionGroupContext.0404639f.js";import"./useTheme.c90b1c5e.js";import"./Alert.93c2217c.js";import"./hook.5e6c5d16.js";import"./createWithBsPrefix.a2136416.js";import"./divWithClassName.ba47b910.js";import"./index.35ce73ec.js";import"./isArray.8bc8137e.js";import"./getEndpoint.bb7ded34.js";import"./Link.7e8c9dbf.js";import"./Typography.33698c6c.js";import"./Button.67173b22.js";import"./ButtonBase.95f62226.js";import"./useGetAccessRequirement.0efba7a1.js";import"./useInfiniteQuery.8572f9ef.js";import"./Skeleton.d7dd8f63.js";import"./FullWidthAlert.1145dd98.js";import"./Tooltip.2f932cf4.js";import"./createSvgIcon.25fceae1.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.c6c12783.js";import"./isSymbol.564875b4.js";const I={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"access-requirement-search-box-demo":{startLoc:{col:68,line:16},endLoc:{col:1,line:18},startBody:{col:68,line:16},endBody:{col:1,line:18}}}}},title:"Synapse/Governance/AccessRequirementSearchBox",component:o,argTypes:{}},n=e=>r(o,{...e}),s=n.bind({});s.args={onChange:e=>{t("Selected id: "+e,"info")}};const J=["AccessRequirementSearchBoxDemo"];export{s as AccessRequirementSearchBoxDemo,J as __namedExportsOrder,I as default};
