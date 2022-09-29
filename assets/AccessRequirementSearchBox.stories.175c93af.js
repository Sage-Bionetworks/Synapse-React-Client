import{A as o}from"./AccessRequirementSearchBox.9d133bac.js";import{d as t}from"./ToastMessage.fbccec25.js";import{j as r}from"./jsx-runtime.697357f5.js";import"./Select-54ac8379.esm.5a43974c.js";import"./slicedToArray.e72f11da.js";import"./toConsumableArray.c4898ee4.js";import"./withStyles.14454601.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./index.8f0405d3.js";import"./iframe.1d19b668.js";import"./index.8b6b728c.js";import"./Alert.bd767cc3.js";import"./index.57d09176.js";import"./Button.742355f2.js";import"./Transition.375dbede.js";import"./index.35ce73ec.js";import"./isArray.c87d30d5.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.3010e2d4.js";import"./useGetAccessRequirement.3a16996b.js";import"./useInfiniteQuery.648d993c.js";import"./Skeleton.14ea1888.js";import"./FullWidthAlert.429d6e5f.js";import"./Typography.d498897e.js";import"./makeStyles.5e65f24d.js";import"./Tooltip.1a172c13.js";import"./createSvgIcon.cf9e16cb.js";import"./useTheme.44d9e479.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.73448b1f.js";import"./isSymbol.ff12d775.js";const H={parameters:{storySource:{source:`import React from 'react'
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
