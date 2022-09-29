import{A as o}from"./AccessRequirementSearchBox.31d8d62b.js";import{d as t}from"./ToastMessage.f1ac94ca.js";import{j as r}from"./jsx-runtime.6c466647.js";import"./Select-54ac8379.esm.6642ddc9.js";import"./slicedToArray.e72f11da.js";import"./toConsumableArray.c4898ee4.js";import"./withStyles.7bec7826.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./index.836cff5f.js";import"./iframe.d58db294.js";import"./index.68dc45f9.js";import"./Alert.6302caff.js";import"./index.57d09176.js";import"./Button.6bac135e.js";import"./Transition.fdaeb9d2.js";import"./index.35ce73ec.js";import"./isArray.8f8da701.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.ccae0824.js";import"./useGetAccessRequirement.5608db0c.js";import"./useInfiniteQuery.1c313722.js";import"./Skeleton.78629bcd.js";import"./FullWidthAlert.6101322c.js";import"./Typography.88b87e8c.js";import"./makeStyles.0f5b4992.js";import"./Tooltip.a8448a48.js";import"./createSvgIcon.aebcdc24.js";import"./useTheme.94a4bd67.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.b6a045ed.js";import"./isSymbol.e84dbf07.js";const H={parameters:{storySource:{source:`import React from 'react'
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
