import{A as o}from"./AccessRequirementSearchBox.467f2e55.js";import{d as t}from"./ToastMessage.14ac3753.js";import{j as r}from"./jsx-runtime.e5135412.js";import"./Select-54ac8379.esm.ecc76f78.js";import"./emotion-react.browser.esm.078eca06.js";import"./styled.a3d17504.js";import"./index.42a076b6.js";import"./iframe.4ad064c2.js";import"./index.71230ff4.js";import"./SynapseConstants.290eab74.js";import"./Button.63ea176a.js";import"./utils.1cb744a4.js";import"./TransitionGroupContext.772c7333.js";import"./useTheme.2346f1e9.js";import"./Alert.4963c7c8.js";import"./hook.85ae367a.js";import"./createWithBsPrefix.315d8008.js";import"./divWithClassName.1423062f.js";import"./index.35ce73ec.js";import"./Fade.d1d2b883.js";import"./isArray.bee4a7aa.js";import"./getEndpoint.bb7ded34.js";import"./Link.1aa3c056.js";import"./Typography.1aa4ae65.js";import"./Button.e272e789.js";import"./ButtonBase.ace65aea.js";import"./useGetAccessRequirement.b8c42ad8.js";import"./useInfiniteQuery.b7e5a6aa.js";import"./Skeleton.6f010adf.js";import"./FullWidthAlert.dbd163b4.js";import"./Tooltip.512cb681.js";import"./createSvgIcon.a94a426c.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.c448d212.js";import"./isSymbol.0f809a04.js";const J={parameters:{storySource:{source:`import React from 'react'
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
