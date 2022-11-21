import{A as o}from"./AccessRequirementSearchBox.5a59cc91.js";import{d as t}from"./ToastMessage.2604ce43.js";import{j as r}from"./jsx-runtime.ed9254b2.js";import"./Select-54ac8379.esm.8e533a13.js";import"./emotion-react.browser.esm.c3af8cc3.js";import"./styled.83fecbff.js";import"./index.6a4b5ee2.js";import"./iframe.99e068ca.js";import"./index.09dc23e8.js";import"./SynapseConstants.290eab74.js";import"./Button.f70cf9a8.js";import"./utils.ce7a07fb.js";import"./TransitionGroupContext.335c91bc.js";import"./useTheme.fd34ae61.js";import"./Alert.5c7a73ee.js";import"./hook.8985ff56.js";import"./createWithBsPrefix.a83dfdb4.js";import"./divWithClassName.2b7a9e20.js";import"./index.35ce73ec.js";import"./isArray.9c9c9c65.js";import"./getEndpoint.bb7ded34.js";import"./Link.4533b1ea.js";import"./Typography.754ee5d4.js";import"./Button.3c46c29a.js";import"./ButtonBase.7ff40024.js";import"./useGetAccessRequirement.1983a1b6.js";import"./useInfiniteQuery.800a5497.js";import"./Skeleton.5cb63a0f.js";import"./FullWidthAlert.adc5f173.js";import"./Tooltip.f5ebbadc.js";import"./createSvgIcon.90f6b4eb.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.0aa69bea.js";import"./isSymbol.18579460.js";const I={parameters:{storySource:{source:`import React from 'react'
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
