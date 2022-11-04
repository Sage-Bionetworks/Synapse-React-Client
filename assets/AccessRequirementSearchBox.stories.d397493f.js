import{A as o}from"./AccessRequirementSearchBox.cbc13b9a.js";import{d as t}from"./ToastMessage.1b9e5ec3.js";import{j as r}from"./jsx-runtime.d95d6493.js";import"./Select-54ac8379.esm.467230d6.js";import"./styled.3f404f86.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./index.7a9149c6.js";import"./iframe.7f51ef58.js";import"./index.a967ac4c.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.a2dbd16c.js";import"./utils.39b72e5d.js";import"./Alert.ac443a97.js";import"./createWithBsPrefix.4fb80af1.js";import"./index.35ce73ec.js";import"./isArray.6553b885.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.67322144.js";import"./useGetAccessRequirement.d4717c56.js";import"./useInfiniteQuery.6acea356.js";import"./Skeleton.d72513ec.js";import"./emotion-react.browser.esm.1bce0706.js";import"./FullWidthAlert.c5df0de8.js";import"./Typography.5462d0e3.js";import"./Tooltip.bdb5981c.js";import"./createSvgIcon.54e8e52e.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.82d1329f.js";import"./isSymbol.641f0fe1.js";const E={parameters:{storySource:{source:`import React from 'react'
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
