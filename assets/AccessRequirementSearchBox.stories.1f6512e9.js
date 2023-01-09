import{A as e}from"./AccessRequirementSearchBox.da74eebc.js";import{d as t}from"./ToastMessage.43b52073.js";import{j as r}from"./jsx-runtime.8ee42ca4.js";import"./Select-54ac8379.esm.e007142b.js";import"./emotion-react.browser.esm.755544ae.js";import"./styled.cab085b6.js";import"./index.c68764fa.js";import"./iframe.57558d86.js";import"./index.6e226ad1.js";import"./SynapseConstants.4792b5b5.js";import"./Button.32185a3f.js";import"./Tooltip.53b3d1bd.js";import"./SvgIcon.e7d9e8d5.js";import"./useTheme.a650b60c.js";import"./TransitionGroupContext.d40bca5e.js";import"./Alert.4adbe9cb.js";import"./hook.b75ee742.js";import"./createWithBsPrefix.1fcef933.js";import"./divWithClassName.4fa3ddf0.js";import"./index.35ce73ec.js";import"./Fade.8d5d2209.js";import"./isArray.649754a9.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.9744025b.js";import"./IconButton.0dfca4e0.js";import"./ButtonBase.442ee4f8.js";import"./Link.f5b0fcd9.js";import"./Typography.dc67c84b.js";import"./Button.73b6fb95.js";import"./useAccessRequirements.94c7e453.js";import"./useMutation.ac2022a1.js";import"./useInfiniteQuery.c55a2f77.js";import"./queryKeys.e0d3085f.js";import"./Skeleton.3af709e7.js";import"./FullWidthAlert.a54f59d5.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.d7153eca.js";import"./isSymbol.4962e9a9.js";const P={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import AccessRequirementSearchBox from './AccessRequirementSearchBox'
import { displayToast } from '../ToastMessage'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Governance/AccessRequirementSearchBox',
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
`,locationsMap:{"access-requirement-search-box-demo":{startLoc:{col:68,line:16},endLoc:{col:1,line:18},startBody:{col:68,line:16},endBody:{col:1,line:18}}}}},title:"Governance/AccessRequirementSearchBox",component:e,argTypes:{}},n=o=>r(e,{...o}),i=n.bind({});i.args={onChange:o=>{t("Selected id: "+o,"info")}};const Q=["AccessRequirementSearchBoxDemo"];export{i as AccessRequirementSearchBoxDemo,Q as __namedExportsOrder,P as default};
