import{A as e}from"./AccessRequirementSearchBox.5f1be564.js";import{d as t}from"./ToastMessage.8e99f4ca.js";import{j as r}from"./jsx-runtime.cae1efce.js";import"./Select-54ac8379.esm.e88de38a.js";import"./emotion-react.browser.esm.0f705697.js";import"./styled.893b6037.js";import"./index.3a565a91.js";import"./iframe.61f567f7.js";import"./EntityTypeUtils.02efa7e4.js";import"./Fade.31660acb.js";import"./useTheme.6ac8e7e3.js";import"./Tooltip.017a66bf.js";import"./SvgIcon.d977b0c7.js";import"./TransitionGroupContext.bc025aa2.js";import"./isArray.175db850.js";import"./Button.7727704e.js";import"./index.35ce73ec.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.6bbb8efe.js";import"./createWithBsPrefix.df7fa21f.js";import"./IconButton.68caccba.js";import"./ButtonBase.9b75ed73.js";import"./Link.c5d35787.js";import"./Typography.334f7e13.js";import"./Button.af90093c.js";import"./SynapseConstants.d6ba6a96.js";import"./Alert.e36be6ab.js";import"./hook.9b282447.js";import"./divWithClassName.5b633697.js";import"./useAccessRequirements.7ffa9aac.js";import"./useMutation.0b342796.js";import"./useInfiniteQuery.24bd729c.js";import"./queryKeys.e0d3085f.js";import"./Skeleton.5c3ed137.js";import"./FullWidthAlert.9d4713f3.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.fbe1b45a.js";import"./isSymbol.87b57363.js";const P={parameters:{storySource:{source:`import React from 'react'
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
