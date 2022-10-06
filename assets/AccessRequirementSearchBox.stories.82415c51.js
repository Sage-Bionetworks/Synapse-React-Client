import{A as o}from"./AccessRequirementSearchBox.fc017778.js";import{d as t}from"./ToastMessage.37d9d7b6.js";import{j as r}from"./jsx-runtime.f8072c65.js";import"./Select-54ac8379.esm.56fc177e.js";import"./slicedToArray.e72f11da.js";import"./toConsumableArray.c4898ee4.js";import"./withStyles.630b025d.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./index.1d2a784c.js";import"./iframe.aa82293a.js";import"./index.1df77ce9.js";import"./Alert.53bb8599.js";import"./index.57d09176.js";import"./Button.cb7914f2.js";import"./Transition.5983a677.js";import"./index.35ce73ec.js";import"./isArray.903292fc.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.761f4d42.js";import"./useGetAccessRequirement.2d5420de.js";import"./useInfiniteQuery.767b6e5c.js";import"./Skeleton.050d0fcb.js";import"./FullWidthAlert.5a306575.js";import"./Typography.3dd8fe93.js";import"./makeStyles.9cff04c5.js";import"./Tooltip.5e7211d1.js";import"./createSvgIcon.52201bd3.js";import"./useTheme.bc44ba71.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.6d4b83b5.js";import"./isSymbol.28b01415.js";const H={parameters:{storySource:{source:`import React from 'react'
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
