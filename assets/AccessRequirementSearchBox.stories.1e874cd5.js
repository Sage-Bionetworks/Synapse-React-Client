import{A as o}from"./AccessRequirementSearchBox.d01538a0.js";import{d as t}from"./ToastMessage.608252d2.js";import{j as r}from"./jsx-runtime.b98719ac.js";import"./Select-54ac8379.esm.cc7c718b.js";import"./slicedToArray.e72f11da.js";import"./toConsumableArray.c4898ee4.js";import"./withStyles.79d10ad6.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./index.f0bb0570.js";import"./iframe.1e793943.js";import"./index.aa213b73.js";import"./Alert.cf52bce4.js";import"./index.57d09176.js";import"./Button.ed04e3a1.js";import"./Transition.ac6e0624.js";import"./index.35ce73ec.js";import"./isArray.3c258aa7.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.4537d0f4.js";import"./useGetAccessRequirement.566e1590.js";import"./useInfiniteQuery.791ee0ea.js";import"./Skeleton.f404fa8e.js";import"./FullWidthAlert.974c42f3.js";import"./Typography.7f563934.js";import"./makeStyles.9e8f686a.js";import"./Tooltip.5964f419.js";import"./createSvgIcon.63cd09dc.js";import"./useTheme.cca4eae4.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.ff2face8.js";import"./isSymbol.a85127bf.js";const H={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"access-requirement-search-box-demo":{startLoc:{col:68,line:16},endLoc:{col:1,line:18},startBody:{col:68,line:16},endBody:{col:1,line:18}}}}},title:"Synapse/Governance/AccessRequirementSearchBox",component:o,argTypes:{}},n=e=>r(o,{...e}),s=n.bind({});s.args={onChange:e=>{t("Selected id: "+e,"info")}};const I=["AccessRequirementSearchBoxDemo"];export{s as AccessRequirementSearchBoxDemo,I as __namedExportsOrder,H as default};
