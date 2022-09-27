import{A as o}from"./AccessRequirementSearchBox.405919f7.js";import{d as t}from"./ToastMessage.d368c817.js";import{j as r}from"./jsx-runtime.8cf0c657.js";import"./Select-54ac8379.esm.8c9c6a11.js";import"./slicedToArray.e72f11da.js";import"./toConsumableArray.c4898ee4.js";import"./withStyles.f22e9c75.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./index.0d47cfe5.js";import"./iframe.6f47dcc9.js";import"./index.a6d709ad.js";import"./Alert.70f23d9f.js";import"./index.57d09176.js";import"./Button.89087c87.js";import"./Transition.2fb6e5a0.js";import"./index.35ce73ec.js";import"./isArray.62d496dc.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.af962ab3.js";import"./useGetAccessRequirement.54b044a4.js";import"./useInfiniteQuery.f5ad163c.js";import"./Skeleton.af6ba2d8.js";import"./FullWidthAlert.c513e3cd.js";import"./Typography.0dca8b10.js";import"./makeStyles.14efd907.js";import"./Tooltip.8bb6ec51.js";import"./createSvgIcon.3db62023.js";import"./useTheme.daa899de.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.ba83e708.js";import"./isSymbol.57088814.js";const H={parameters:{storySource:{source:`import React from 'react'
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
