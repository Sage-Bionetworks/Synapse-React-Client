import{A as o}from"./AccessRequirementSearchBox.3f022f55.js";import{d as t}from"./ToastMessage.30a6258e.js";import{j as r}from"./jsx-runtime.00d70968.js";import"./react-select.esm.3f16d802.js";import"./Select-54ac8379.esm.edd779c2.js";import"./slicedToArray.e72f11da.js";import"./toConsumableArray.c4898ee4.js";import"./withStyles.5fe35516.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./index.238b5092.js";import"./Alert.b74d1cfd.js";import"./index.57d09176.js";import"./Button.fda23eee.js";import"./Transition.8278edb2.js";import"./index.35ce73ec.js";import"./toString.d84aaeca.js";import"./assert.fa0c7516.js";import"./iframe.8d2e139a.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.e37b9412.js";import"./useGetAccessRequirement.f8dba9bb.js";import"./Skeleton.99b24529.js";import"./FullWidthAlert.e63d41e9.js";import"./Typography.868473dc.js";import"./makeStyles.45e8b79c.js";import"./Tooltip.b1e63f93.js";import"./createSvgIcon.99e72c0f.js";import"./useTheme.aaa309f8.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.eba72690.js";const F={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"access-requirement-search-box-demo":{startLoc:{col:68,line:16},endLoc:{col:1,line:18},startBody:{col:68,line:16},endBody:{col:1,line:18}}}}},title:"Synapse/Governance/AccessRequirementSearchBox",component:o,argTypes:{}},n=e=>r(o,{...e}),s=n.bind({});s.args={onChange:e=>{t("Selected id: "+e,"info")}};const H=["AccessRequirementSearchBoxDemo"];export{s as AccessRequirementSearchBoxDemo,H as __namedExportsOrder,F as default};
