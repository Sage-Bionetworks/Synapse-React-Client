import{A as o}from"./AccessRequirementSearchBox.136cee10.js";import{d as t}from"./ToastMessage.0f10ae0c.js";import{j as r}from"./jsx-runtime.0547954a.js";import"./Select-54ac8379.esm.46a0827d.js";import"./slicedToArray.e72f11da.js";import"./toConsumableArray.c4898ee4.js";import"./withStyles.5f371c18.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./index.9a22ba50.js";import"./iframe.bc1355ce.js";import"./index.22793847.js";import"./Alert.320f728d.js";import"./index.57d09176.js";import"./Button.faa197e5.js";import"./Transition.c74a9bc3.js";import"./index.35ce73ec.js";import"./isArray.dc0d9748.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.20c60b09.js";import"./useGetAccessRequirement.f7c36ef5.js";import"./useInfiniteQuery.cb887234.js";import"./Skeleton.ef288fce.js";import"./FullWidthAlert.8329478a.js";import"./Typography.5de44d5b.js";import"./makeStyles.68b76b6a.js";import"./Tooltip.d59517ea.js";import"./createSvgIcon.13c982df.js";import"./useTheme.f4071482.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.6d625886.js";import"./isSymbol.56654682.js";const H={parameters:{storySource:{source:`import React from 'react'
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
