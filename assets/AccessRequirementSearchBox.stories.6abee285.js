import{A as o}from"./AccessRequirementSearchBox.78d95998.js";import{d as t}from"./ToastMessage.c03bf450.js";import{j as r}from"./jsx-runtime.0721b30f.js";import"./Select-54ac8379.esm.6a29fbfd.js";import"./emotion-react.browser.esm.4fe99834.js";import"./styled.b8cd841c.js";import"./index.84874f77.js";import"./iframe.d07454b7.js";import"./index.96fee529.js";import"./SynapseConstants.290eab74.js";import"./Button.c6170972.js";import"./utils.61962e2e.js";import"./TransitionGroupContext.536780f6.js";import"./useTheme.210faaa5.js";import"./Alert.e026ca2c.js";import"./hook.0b64fed2.js";import"./createWithBsPrefix.60042f33.js";import"./divWithClassName.ae2eac7f.js";import"./index.35ce73ec.js";import"./Fade.54a45bb0.js";import"./isArray.0e868c61.js";import"./getEndpoint.bb7ded34.js";import"./Link.38c396f1.js";import"./Typography.f634a419.js";import"./Button.9899c0f8.js";import"./ButtonBase.c60e40b2.js";import"./useGetAccessRequirement.306475cd.js";import"./useInfiniteQuery.160050ed.js";import"./Skeleton.bcaf6f06.js";import"./FullWidthAlert.f41552e4.js";import"./Tooltip.95391ddc.js";import"./createSvgIcon.8972a51f.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.22a08d1e.js";import"./isSymbol.2a2fd570.js";const J={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"access-requirement-search-box-demo":{startLoc:{col:68,line:16},endLoc:{col:1,line:18},startBody:{col:68,line:16},endBody:{col:1,line:18}}}}},title:"Synapse/Governance/AccessRequirementSearchBox",component:o,argTypes:{}},n=e=>r(o,{...e}),s=n.bind({});s.args={onChange:e=>{t("Selected id: "+e,"info")}};const K=["AccessRequirementSearchBoxDemo"];export{s as AccessRequirementSearchBoxDemo,K as __namedExportsOrder,J as default};
