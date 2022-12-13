import{A as e}from"./AccessRequirementSearchBox.96090b96.js";import{d as t}from"./ToastMessage.7ece14e4.js";import{j as r}from"./jsx-runtime.d04151d1.js";import"./Select-54ac8379.esm.ff4e4b7d.js";import"./emotion-react.browser.esm.b7b35e3a.js";import"./styled.1efff5b8.js";import"./index.8319c373.js";import"./iframe.d32e0f35.js";import"./EntityTypeUtils.9c2483b3.js";import"./Fade.f21ee508.js";import"./useTheme.175bd669.js";import"./Tooltip.4974d54a.js";import"./SvgIcon.d3ec47f0.js";import"./TransitionGroupContext.1ef7d36b.js";import"./isArray.88add67b.js";import"./Button.a12385d6.js";import"./index.35ce73ec.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.23552105.js";import"./createWithBsPrefix.f5521544.js";import"./IconButton.f2c2856c.js";import"./ButtonBase.3d334067.js";import"./Link.45362a72.js";import"./Typography.73bd7049.js";import"./Button.09b7bba7.js";import"./SynapseConstants.d6ba6a96.js";import"./Alert.770d73de.js";import"./hook.ba873afd.js";import"./divWithClassName.2e38eee3.js";import"./useAccessRequirements.1d9dafa7.js";import"./useMutation.ce8e7b55.js";import"./useInfiniteQuery.10e21598.js";import"./queryKeys.e0d3085f.js";import"./Skeleton.b0e23dcf.js";import"./FullWidthAlert.8d2b5601.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.55896be5.js";import"./isSymbol.4d2b99f3.js";const P={parameters:{storySource:{source:`import React from 'react'
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
