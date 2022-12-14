import{A as e}from"./AccessRequirementSearchBox.6c5982f5.js";import{d as t}from"./ToastMessage.fe900393.js";import{j as r}from"./jsx-runtime.edcee20f.js";import"./Select-54ac8379.esm.cc32b323.js";import"./emotion-react.browser.esm.23bad0f9.js";import"./styled.57026967.js";import"./index.e284f29f.js";import"./iframe.8d602a7e.js";import"./EntityTypeUtils.f136fe8e.js";import"./Fade.e73bdacf.js";import"./useTheme.c864c010.js";import"./Tooltip.6287427b.js";import"./SvgIcon.cf85a686.js";import"./TransitionGroupContext.9f30f89b.js";import"./isArray.ba2a5774.js";import"./Button.beed9c8a.js";import"./index.35ce73ec.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.a36fd00f.js";import"./createWithBsPrefix.fb2e744c.js";import"./IconButton.f86e6b85.js";import"./ButtonBase.8a19de44.js";import"./Link.c844031a.js";import"./Typography.8ba12270.js";import"./Button.237100ef.js";import"./SynapseConstants.d6ba6a96.js";import"./Alert.c9c7cf94.js";import"./hook.9626bae0.js";import"./divWithClassName.198d5031.js";import"./useAccessRequirements.c96b7848.js";import"./useMutation.e868fb3d.js";import"./useInfiniteQuery.62663485.js";import"./queryKeys.e0d3085f.js";import"./Skeleton.7309b0e8.js";import"./FullWidthAlert.15c58824.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.d49ff0ce.js";import"./isSymbol.4e401305.js";const P={parameters:{storySource:{source:`import React from 'react'
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
