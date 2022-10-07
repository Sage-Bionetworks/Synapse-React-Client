import{A as o}from"./AccessRequirementSearchBox.8d697f17.js";import{d as t}from"./ToastMessage.8bfc5f39.js";import{j as r}from"./jsx-runtime.f5c871f2.js";import"./Select-54ac8379.esm.70eb0da2.js";import"./slicedToArray.e72f11da.js";import"./toConsumableArray.c4898ee4.js";import"./withStyles.b9d3b2a9.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./index.50924579.js";import"./iframe.0956ae8e.js";import"./index.3873d60b.js";import"./Alert.b56cd3e7.js";import"./index.57d09176.js";import"./Button.de05f508.js";import"./Transition.a0ca267e.js";import"./index.35ce73ec.js";import"./isArray.8eaae8ca.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.0b86e17f.js";import"./useGetAccessRequirement.e18fe474.js";import"./useInfiniteQuery.4ef28758.js";import"./Skeleton.4bed26ee.js";import"./FullWidthAlert.76b02069.js";import"./Typography.d381f643.js";import"./makeStyles.c6d0cd33.js";import"./Tooltip.0cafe8cc.js";import"./createSvgIcon.c8dc0ea7.js";import"./useTheme.b6731b0b.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.a603395d.js";import"./isSymbol.6fc733ac.js";const H={parameters:{storySource:{source:`import React from 'react'
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
