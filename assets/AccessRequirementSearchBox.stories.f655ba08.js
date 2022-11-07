import{A as o}from"./AccessRequirementSearchBox.7a9ac9d3.js";import{d as t}from"./ToastMessage.5ece0449.js";import{j as r}from"./jsx-runtime.6cb91464.js";import"./Select-54ac8379.esm.e3131d5c.js";import"./styled.9d49d23e.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./index.13becb40.js";import"./iframe.77de7a8b.js";import"./index.253aaada.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.719dc857.js";import"./utils.11d89a6f.js";import"./Alert.f130f9d6.js";import"./createWithBsPrefix.c2eb45fa.js";import"./index.35ce73ec.js";import"./isArray.c85446b1.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.7bbcd48d.js";import"./useGetAccessRequirement.30b0033c.js";import"./useInfiniteQuery.62a8c625.js";import"./Skeleton.2376d7a3.js";import"./emotion-react.browser.esm.63b80b77.js";import"./FullWidthAlert.771b5ce8.js";import"./Typography.c072ef4f.js";import"./Tooltip.9b073f35.js";import"./createSvgIcon.c493b6c9.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.4f03145e.js";import"./isSymbol.116fae96.js";const E={parameters:{storySource:{source:`import React from 'react'
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
