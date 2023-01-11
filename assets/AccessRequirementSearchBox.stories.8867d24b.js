import{A as e}from"./AccessRequirementSearchBox.1280460b.js";import{d as t}from"./ToastMessage.0865ace5.js";import{j as r}from"./jsx-runtime.8deabff4.js";import"./Select-54ac8379.esm.6d25abbe.js";import"./emotion-react.browser.esm.3c5e03a0.js";import"./styled.4ed13d54.js";import"./index.57c4b3f6.js";import"./iframe.9a9f3456.js";import"./index.7e720d98.js";import"./SynapseConstants.71946a35.js";import"./Button.7f145214.js";import"./Tooltip.1a090672.js";import"./SvgIcon.68c0612f.js";import"./useTheme.4dbd8795.js";import"./TransitionGroupContext.f0e5bdf3.js";import"./FullWidthAlert.5c7c6876.js";import"./hook.1ef6fcec.js";import"./createWithBsPrefix.10b29307.js";import"./divWithClassName.17daa550.js";import"./index.35ce73ec.js";import"./Typography.d2c075af.js";import"./Fade.5eff05c6.js";import"./isArray.60ef1f80.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.c37effa3.js";import"./IconButton.88d7d90d.js";import"./ButtonBase.f183321e.js";import"./Link.150a4582.js";import"./Button.eb6e2031.js";import"./useAccessRequirements.3fb1eea2.js";import"./useMutation.1145132d.js";import"./useInfiniteQuery.7899d034.js";import"./queryKeys.e0d3085f.js";import"./Skeleton.75c9e7ec.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.d83e1a92.js";import"./isSymbol.0aefb815.js";const N={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"access-requirement-search-box-demo":{startLoc:{col:68,line:16},endLoc:{col:1,line:18},startBody:{col:68,line:16},endBody:{col:1,line:18}}}}},title:"Governance/AccessRequirementSearchBox",component:e,argTypes:{}},n=o=>r(e,{...o}),s=n.bind({});s.args={onChange:o=>{t("Selected id: "+o,"info")}};const P=["AccessRequirementSearchBoxDemo"];export{s as AccessRequirementSearchBoxDemo,P as __namedExportsOrder,N as default};
