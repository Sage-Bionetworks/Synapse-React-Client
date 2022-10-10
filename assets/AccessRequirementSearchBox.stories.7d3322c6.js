import{A as o}from"./AccessRequirementSearchBox.09a0b27a.js";import{d as t}from"./ToastMessage.644c1427.js";import{j as r}from"./jsx-runtime.416d8946.js";import"./Select-54ac8379.esm.a10c9ff0.js";import"./slicedToArray.e72f11da.js";import"./toConsumableArray.c4898ee4.js";import"./withStyles.c595751b.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./index.9d682600.js";import"./iframe.51e9009e.js";import"./index.68699958.js";import"./Alert.a75301f2.js";import"./index.57d09176.js";import"./Button.34feb441.js";import"./Transition.b4776308.js";import"./index.35ce73ec.js";import"./isArray.48d04961.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.95ef1484.js";import"./useGetAccessRequirement.d52b3b3c.js";import"./useInfiniteQuery.44a5eea1.js";import"./Skeleton.102fc0c3.js";import"./FullWidthAlert.a1bdb9b5.js";import"./Typography.5433f83a.js";import"./makeStyles.c2ff9465.js";import"./Tooltip.032eb6cc.js";import"./createSvgIcon.55245163.js";import"./useTheme.512d0ce3.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.89dba59c.js";import"./isSymbol.110be719.js";const H={parameters:{storySource:{source:`import React from 'react'
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
