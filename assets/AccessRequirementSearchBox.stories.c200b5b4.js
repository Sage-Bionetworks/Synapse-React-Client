import{A as o}from"./AccessRequirementSearchBox.81f0da31.js";import{d as t}from"./ToastMessage.c7c8ad52.js";import{j as r}from"./jsx-runtime.e50ee014.js";import"./Select-54ac8379.esm.e66ee859.js";import"./slicedToArray.e72f11da.js";import"./toConsumableArray.c4898ee4.js";import"./withStyles.8f619333.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./index.f04aa5e6.js";import"./iframe.ed5db637.js";import"./index.b742691b.js";import"./Alert.9942996b.js";import"./index.57d09176.js";import"./Button.3658dda2.js";import"./Transition.bad86374.js";import"./index.35ce73ec.js";import"./isArray.bf4f000b.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.c8899896.js";import"./useGetAccessRequirement.1e37d564.js";import"./useInfiniteQuery.be01094f.js";import"./Skeleton.09528c75.js";import"./FullWidthAlert.dc80d875.js";import"./Typography.710a5cec.js";import"./makeStyles.436c1230.js";import"./Tooltip.87729932.js";import"./createSvgIcon.f8724b3b.js";import"./useTheme.f39e60b9.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.b8a4404e.js";import"./isSymbol.5d0c998d.js";const H={parameters:{storySource:{source:`import React from 'react'
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
