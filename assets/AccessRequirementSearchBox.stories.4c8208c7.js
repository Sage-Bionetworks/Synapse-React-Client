import{A as e}from"./AccessRequirementSearchBox.867c4284.js";import{d as t}from"./ToastMessage.a9162853.js";import{j as r}from"./jsx-runtime.6efef3f0.js";import"./Select-54ac8379.esm.1fa52e56.js";import"./emotion-react.browser.esm.89334e8c.js";import"./styled.3d34e36b.js";import"./index.527b2819.js";import"./iframe.b3705b98.js";import"./index.f6f857f5.js";import"./SynapseConstants.aef18750.js";import"./Button.113b0f45.js";import"./Tooltip.9a185035.js";import"./SvgIcon.3e939805.js";import"./useTheme.2b3579a1.js";import"./TransitionGroupContext.962689fd.js";import"./FullWidthAlert.87654e2f.js";import"./hook.4287fc8d.js";import"./createWithBsPrefix.dc61fcfa.js";import"./divWithClassName.39d1e3e2.js";import"./index.35ce73ec.js";import"./Typography.a863760e.js";import"./Fade.ee3053ca.js";import"./isArray.ce0fc8e6.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.a0ac0502.js";import"./IconButton.a32a330b.js";import"./ButtonBase.42d7166c.js";import"./Link.f540f0ea.js";import"./Button.bcc1fc04.js";import"./useAccessRequirements.eca13162.js";import"./useMutation.905ce15d.js";import"./useInfiniteQuery.6ce8309d.js";import"./queryKeys.f96c2872.js";import"./Skeleton.c73b94b2.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.a881a904.js";import"./toString.931d2742.js";import"./isSymbol.7ee325a2.js";const P={parameters:{storySource:{source:`import React from 'react'
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
