import{A as e}from"./AccessRequirementSearchBox.b0604d89.js";import{d as t}from"./ToastMessage.a7db9b8d.js";import{j as r}from"./jsx-runtime.76b41102.js";import"./Select-54ac8379.esm.04a57595.js";import"./emotion-react.browser.esm.cf245846.js";import"./styled.0442482c.js";import"./index.bc4e6645.js";import"./iframe.4ac8fc26.js";import"./index.0297a0cb.js";import"./SynapseConstants.71946a35.js";import"./Button.83b95483.js";import"./Tooltip.40200d96.js";import"./SvgIcon.7ad855dc.js";import"./useTheme.6368534f.js";import"./TransitionGroupContext.e619b501.js";import"./FullWidthAlert.fa5db810.js";import"./hook.9a8069f4.js";import"./createWithBsPrefix.ec0f4954.js";import"./divWithClassName.ae433c15.js";import"./index.35ce73ec.js";import"./Typography.6181771e.js";import"./Fade.e47b19bb.js";import"./isArray.8642b77d.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.175e5b3e.js";import"./IconButton.6adff82e.js";import"./ButtonBase.bd6b806f.js";import"./Link.dc8bd0fa.js";import"./Button.09259ba0.js";import"./useAccessRequirements.dc76750b.js";import"./useMutation.bf55f3f5.js";import"./useInfiniteQuery.6628dc0b.js";import"./queryKeys.e0d3085f.js";import"./Skeleton.439e65be.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.db618dfa.js";import"./toString.30e0c932.js";import"./isSymbol.945d9b60.js";const P={parameters:{storySource:{source:`import React from 'react'
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
