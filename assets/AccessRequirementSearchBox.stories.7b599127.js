import{A as o}from"./AccessRequirementSearchBox.b5ffe621.js";import{d as t}from"./ToastMessage.1a804d30.js";import{j as r}from"./jsx-runtime.05444945.js";import"./Select-54ac8379.esm.f96f27a9.js";import"./slicedToArray.e72f11da.js";import"./toConsumableArray.c4898ee4.js";import"./withStyles.2a0b3149.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./index.849f5f8d.js";import"./iframe.ff4ba921.js";import"./index.a37d8dd7.js";import"./Alert.1016cb8e.js";import"./index.57d09176.js";import"./Button.0b1296fc.js";import"./Transition.4ed8243e.js";import"./index.35ce73ec.js";import"./isArray.fbf85b3b.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.44b5863d.js";import"./useGetAccessRequirement.aff2243e.js";import"./useInfiniteQuery.f58a924e.js";import"./Skeleton.7e3a4321.js";import"./FullWidthAlert.27fd0db2.js";import"./Typography.9965ffbe.js";import"./makeStyles.29b4f0d4.js";import"./Tooltip.e02d1bf4.js";import"./createSvgIcon.49bfc951.js";import"./useTheme.48f15230.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.24a4cbf4.js";import"./isSymbol.bfa8ae0b.js";const H={parameters:{storySource:{source:`import React from 'react'
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
