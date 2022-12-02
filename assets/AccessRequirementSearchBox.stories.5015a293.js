import{A as o}from"./AccessRequirementSearchBox.9ca21e28.js";import{d as t}from"./ToastMessage.10c98715.js";import{j as r}from"./jsx-runtime.0db21b62.js";import"./Select-54ac8379.esm.71de503d.js";import"./emotion-react.browser.esm.e326a50f.js";import"./styled.04f8a540.js";import"./index.9eb164f8.js";import"./iframe.55601028.js";import"./index.90ee2b5e.js";import"./SynapseConstants.290eab74.js";import"./Button.8dd67db9.js";import"./utils.8a121841.js";import"./TransitionGroupContext.59a59a19.js";import"./useTheme.6f96ca98.js";import"./Alert.476644bc.js";import"./hook.d21c687b.js";import"./createWithBsPrefix.cf2ded3d.js";import"./divWithClassName.9349f2fc.js";import"./index.35ce73ec.js";import"./Fade.002da28b.js";import"./isArray.051b97b8.js";import"./getEndpoint.bb7ded34.js";import"./Link.400989ff.js";import"./Typography.fc802d4f.js";import"./Button.c393a679.js";import"./ButtonBase.9b5b9b75.js";import"./useGetAccessRequirement.7d6d76d6.js";import"./useInfiniteQuery.7f7301d1.js";import"./Skeleton.99622f82.js";import"./FullWidthAlert.257257d5.js";import"./Tooltip.137fb27a.js";import"./createSvgIcon.2669ec85.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.9af27e73.js";import"./isSymbol.70fe8399.js";const J={parameters:{storySource:{source:`import React from 'react'
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
