import{A as o}from"./AccessRequirementSearchBox.8cd4af85.js";import{k as t}from"./ToastMessage.093903bc.js";import{j as r}from"./jsx-runtime.2e925369.js";import"./react-select.esm.61e5bb43.js";import"./objectWithoutProperties.07f8cd75.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./toConsumableArray.8f496188.js";import"./stateManager-845a3300.esm.a9825398.js";import"./classCallCheck.8304ed06.js";import"./createClass.67a84016.js";import"./inherits.0fdbf119.js";import"./withStyles.461112f3.js";import"./index.06f4a415.js";import"./index.35547ae7.js";import"./FullWidthAlert.4dd40e61.js";import"./Typography.5a45efab.js";import"./index.f252d424.js";import"./makeStyles.38be5a7f.js";import"./Tooltip.3e761ad5.js";import"./SvgIcon.6d10a3ac.js";import"./slicedToArray.e9a7fa03.js";import"./Button.c582ea4c.js";import"./assert.7360daab.js";import"./iframe.97ab22c6.js";import"./index.8cde812d.js";import"./getEndpoint.0de7fccf.js";import"./useGetAccessRequirement.0448e0c5.js";import"./Skeleton.3d9d9757.js";var G={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"access-requirement-search-box-demo":{startLoc:{col:68,line:16},endLoc:{col:1,line:18},startBody:{col:68,line:16},endBody:{col:1,line:18}}}}},title:"Synapse/Governance/AccessRequirementSearchBox",component:o,argTypes:{}};const n=e=>r(o,{...e}),s=n.bind({});s.args={onChange:e=>{t("Selected id: "+e,"info")}};const L=["AccessRequirementSearchBoxDemo"];export{s as AccessRequirementSearchBoxDemo,L as __namedExportsOrder,G as default};
//# sourceMappingURL=AccessRequirementSearchBox.stories.75000dc2.js.map
