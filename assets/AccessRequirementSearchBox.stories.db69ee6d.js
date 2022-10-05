import{A as o}from"./AccessRequirementSearchBox.8faa5409.js";import{d as t}from"./ToastMessage.d2af582b.js";import{j as r}from"./jsx-runtime.53ec3a99.js";import"./Select-54ac8379.esm.2e959863.js";import"./slicedToArray.e72f11da.js";import"./toConsumableArray.c4898ee4.js";import"./withStyles.2fbec1dd.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./index.c935dff9.js";import"./iframe.707dd820.js";import"./index.5bc63636.js";import"./Alert.89d8effb.js";import"./index.57d09176.js";import"./Button.aa21b764.js";import"./Transition.feec5299.js";import"./index.35ce73ec.js";import"./isArray.afa3346a.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.0bcbfb3f.js";import"./useGetAccessRequirement.ee7e9ed0.js";import"./useInfiniteQuery.0347999d.js";import"./Skeleton.9def93da.js";import"./FullWidthAlert.a76adc9d.js";import"./Typography.d6d23e6c.js";import"./makeStyles.0544ad0e.js";import"./Tooltip.6a46e0c0.js";import"./createSvgIcon.80ece60c.js";import"./useTheme.f82ec4e5.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.84a1f40d.js";import"./isSymbol.c005a6aa.js";const H={parameters:{storySource:{source:`import React from 'react'
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
