import{A as o}from"./AccessRequirementSearchBox.313c6733.js";import{k as t}from"./ToastMessage.0ffd35ff.js";import{j as r}from"./jsx-runtime.00d70968.js";import"./react-select.esm.ef81d642.js";import"./Select-54ac8379.esm.ab9e3904.js";import"./slicedToArray.e9a7fa03.js";import"./toConsumableArray.8f496188.js";import"./objectWithoutProperties.a0dea5ce.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./withStyles.d6b2de44.js";import"./createClass.67a84016.js";import"./classCallCheck.8304ed06.js";import"./inherits.0fdbf119.js";import"./index.1cc75809.js";import"./FullWidthAlert.a73af62a.js";import"./Typography.9748340b.js";import"./index.57d09176.js";import"./makeStyles.2422b359.js";import"./Tooltip.02f85a09.js";import"./SvgIcon.5d5878ed.js";import"./Button.fda23eee.js";import"./index.35ce73ec.js";import"./assert.2b1e1d8f.js";import"./iframe.469b3d37.js";import"./getEndpoint.bb7ded34.js";import"./useGetAccessRequirement.5ad29910.js";import"./Skeleton.88496afb.js";const w={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"access-requirement-search-box-demo":{startLoc:{col:68,line:16},endLoc:{col:1,line:18},startBody:{col:68,line:16},endBody:{col:1,line:18}}}}},title:"Synapse/Governance/AccessRequirementSearchBox",component:o,argTypes:{}},n=e=>r(o,{...e}),s=n.bind({});s.args={onChange:e=>{t("Selected id: "+e,"info")}};const G=["AccessRequirementSearchBoxDemo"];export{s as AccessRequirementSearchBoxDemo,G as __namedExportsOrder,w as default};
