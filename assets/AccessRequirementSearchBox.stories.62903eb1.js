import{A as o}from"./AccessRequirementSearchBox.3845258b.js";import{d as t}from"./ToastMessage.0defc330.js";import{j as r}from"./jsx-runtime.2e925369.js";import"./react-select.esm.28f0ee2f.js";import"./toConsumableArray.b3669986.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./stateManager-845a3300.esm.2aae5abd.js";import"./classCallCheck.8304ed06.js";import"./withStyles.8be28b48.js";import"./inherits.98d6a15d.js";import"./index.06f4a415.js";import"./index.05abe325.js";import"./isObject.f3be1931.js";import"./index.f252d424.js";import"./Button.c582ea4c.js";import"./Transition.d42a873e.js";import"./toString.f9b9a371.js";import"./assert.c27a8558.js";import"./iframe.fc0b8fd7.js";import"./index.8cde812d.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.31249d58.js";import"./useGetAccessRequirement.82d01391.js";import"./Skeleton.8dd0668e.js";import"./FullWidthAlert.50041932.js";import"./Typography.bfdf676e.js";import"./makeStyles.9dfaa099.js";import"./debounce.bb67b392.js";import"./toNumber.71be2bd9.js";import"./Tooltip.6c95fe7b.js";import"./createSvgIcon.d78a924b.js";import"./useTheme.8804f8cd.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.50daefd4.js";var I={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"access-requirement-search-box-demo":{startLoc:{col:68,line:16},endLoc:{col:1,line:18},startBody:{col:68,line:16},endBody:{col:1,line:18}}}}},title:"Synapse/Governance/AccessRequirementSearchBox",component:o,argTypes:{}};const n=e=>r(o,{...e}),s=n.bind({});s.args={onChange:e=>{t("Selected id: "+e,"info")}};const J=["AccessRequirementSearchBoxDemo"];export{s as AccessRequirementSearchBoxDemo,J as __namedExportsOrder,I as default};
//# sourceMappingURL=AccessRequirementSearchBox.stories.62903eb1.js.map
