import{A as o}from"./AccessRequirementSearchBox.a581fe7d.js";import{d as t}from"./ToastMessage.276b1811.js";import{j as r}from"./jsx-runtime.f5d212d1.js";import"./Select-54ac8379.esm.b455933c.js";import"./emotion-react.browser.esm.6d1cbddb.js";import"./styled.f405056b.js";import"./index.9c9305ea.js";import"./iframe.89bb5feb.js";import"./index.a70ddfd8.js";import"./SynapseConstants.290eab74.js";import"./Button.8170df20.js";import"./utils.0b8153da.js";import"./TransitionGroupContext.7656eb12.js";import"./useTheme.e9ed9b1c.js";import"./Alert.257c6bb8.js";import"./hook.70591bc2.js";import"./createWithBsPrefix.91f140d5.js";import"./divWithClassName.5b1e6cb1.js";import"./index.35ce73ec.js";import"./isArray.b1617f44.js";import"./getEndpoint.bb7ded34.js";import"./Link.3fccb4a8.js";import"./Typography.513a1f2d.js";import"./Button.25b7a851.js";import"./ButtonBase.5d7dfd7c.js";import"./useGetAccessRequirement.727ec4cc.js";import"./useInfiniteQuery.e08bd0cb.js";import"./Skeleton.f056e7cd.js";import"./FullWidthAlert.c92729a8.js";import"./Tooltip.b3e9245c.js";import"./createSvgIcon.2626c7dc.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.7666cadc.js";import"./isSymbol.4571438c.js";const I={parameters:{storySource:{source:`import React from 'react'
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
