import{A as o}from"./AccessRequirementSearchBox.2517cbee.js";import{d as t}from"./ToastMessage.15875dd0.js";import{j as r}from"./jsx-runtime.c28691f9.js";import"./Select-54ac8379.esm.37d3a4b7.js";import"./emotion-react.browser.esm.07119d08.js";import"./styled.0b15883e.js";import"./index.e19c4baa.js";import"./iframe.180ebcad.js";import"./index.76b38c54.js";import"./SynapseConstants.290eab74.js";import"./Button.01687609.js";import"./utils.147770f5.js";import"./TransitionGroupContext.4d4491d8.js";import"./useTheme.c2c5870a.js";import"./Alert.39b51be4.js";import"./hook.668b90b8.js";import"./createWithBsPrefix.e1e1b086.js";import"./divWithClassName.5d82b3d5.js";import"./index.35ce73ec.js";import"./Fade.467f608c.js";import"./isArray.00855dd8.js";import"./getEndpoint.bb7ded34.js";import"./Link.7916e978.js";import"./Typography.979062bc.js";import"./Button.5474ded1.js";import"./ButtonBase.62e27216.js";import"./useGetAccessRequirement.ee9561a6.js";import"./useInfiniteQuery.4ac5428a.js";import"./Skeleton.5e7b1855.js";import"./FullWidthAlert.44d2e621.js";import"./Tooltip.d4e3b915.js";import"./createSvgIcon.40781e98.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.dd846a92.js";import"./isSymbol.3a617ca5.js";const J={parameters:{storySource:{source:`import React from 'react'
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
