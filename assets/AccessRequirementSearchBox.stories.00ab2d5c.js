import{A as o}from"./AccessRequirementSearchBox.e3154985.js";import{d as t}from"./ToastMessage.52d73997.js";import{j as r}from"./jsx-runtime.23bcdc09.js";import"./Select-54ac8379.esm.6a208b47.js";import"./emotion-react.browser.esm.599684c1.js";import"./styled.8da6873c.js";import"./index.a2bbbebe.js";import"./iframe.c49fa417.js";import"./index.20c1822f.js";import"./SynapseConstants.290eab74.js";import"./Button.9cfa11f8.js";import"./utils.2eab32fe.js";import"./TransitionGroupContext.b9a824ce.js";import"./useTheme.26e47b20.js";import"./Alert.03ebe4a7.js";import"./hook.81302421.js";import"./createWithBsPrefix.26026502.js";import"./divWithClassName.fcb14682.js";import"./index.35ce73ec.js";import"./Fade.5c08504a.js";import"./isArray.1d31a80d.js";import"./getEndpoint.bb7ded34.js";import"./Link.e49ccf51.js";import"./Typography.17940352.js";import"./Button.d27fd09d.js";import"./ButtonBase.94c8520a.js";import"./useGetAccessRequirement.cee49857.js";import"./useInfiniteQuery.6d6d1422.js";import"./Skeleton.93cf864e.js";import"./FullWidthAlert.465c2909.js";import"./Tooltip.cfbb546f.js";import"./createSvgIcon.e3e4a251.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.5a455c2a.js";import"./isSymbol.017a619a.js";const J={parameters:{storySource:{source:`import React from 'react'
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
