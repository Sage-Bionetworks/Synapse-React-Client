import{A as e}from"./AccessRequirementSearchBox.a163b516.js";import{d as t}from"./ToastMessage.67e8dd8b.js";import{j as r}from"./jsx-runtime.2345241f.js";import"./Select-54ac8379.esm.e28782ed.js";import"./emotion-react.browser.esm.782cdb58.js";import"./styled.8a79803b.js";import"./index.5a7af4ba.js";import"./iframe.b6c45fd3.js";import"./index.3aece391.js";import"./SynapseConstants.aef18750.js";import"./Button.dd9fc4ec.js";import"./Tooltip.c4c31d9f.js";import"./SvgIcon.c3dd5893.js";import"./useTheme.7300f82e.js";import"./TransitionGroupContext.ce30fb83.js";import"./FullWidthAlert.f758387e.js";import"./hook.40948bbb.js";import"./createWithBsPrefix.767a2de5.js";import"./divWithClassName.ada2c499.js";import"./index.35ce73ec.js";import"./Typography.5428f494.js";import"./Fade.544d2c09.js";import"./isArray.594b9061.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.c0ad7b85.js";import"./IconButton.479fa89c.js";import"./ButtonBase.37e9a56e.js";import"./Link.10558e7e.js";import"./Button.2a6d5e68.js";import"./useAccessRequirements.175d805e.js";import"./useMutation.1f6b4381.js";import"./useInfiniteQuery.9f720242.js";import"./queryKeys.f96c2872.js";import"./Skeleton.153caf19.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.15511b65.js";import"./toString.f6d778fc.js";import"./isSymbol.f2edf3f1.js";const P={parameters:{storySource:{source:`import React from 'react'
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
