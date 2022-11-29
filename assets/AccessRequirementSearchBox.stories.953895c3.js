import{A as o}from"./AccessRequirementSearchBox.9c43f8da.js";import{d as t}from"./ToastMessage.c90a289b.js";import{j as r}from"./jsx-runtime.9272ed69.js";import"./Select-54ac8379.esm.749d2aa7.js";import"./emotion-react.browser.esm.1c97b976.js";import"./styled.0de421fa.js";import"./index.dc51ea0b.js";import"./iframe.e4b610a3.js";import"./index.f6d21e1b.js";import"./SynapseConstants.290eab74.js";import"./Button.db898533.js";import"./utils.6e1717b5.js";import"./TransitionGroupContext.54f3d5ea.js";import"./useTheme.75529918.js";import"./Alert.2534b0a8.js";import"./hook.0361e512.js";import"./createWithBsPrefix.9ea76fe5.js";import"./divWithClassName.c5203597.js";import"./index.35ce73ec.js";import"./Fade.cc51c470.js";import"./isArray.f757e7ba.js";import"./getEndpoint.bb7ded34.js";import"./Link.8b0bf192.js";import"./Typography.1f221702.js";import"./Button.0c0c729f.js";import"./ButtonBase.3405045f.js";import"./useGetAccessRequirement.8b6f0b13.js";import"./useInfiniteQuery.35cc16ee.js";import"./Skeleton.fb3032fb.js";import"./FullWidthAlert.5512750c.js";import"./Tooltip.d2aa8c40.js";import"./createSvgIcon.1c5ae5be.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.f24c8a17.js";import"./isSymbol.04dc93d5.js";const J={parameters:{storySource:{source:`import React from 'react'
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
