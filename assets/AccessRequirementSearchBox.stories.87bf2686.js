import{A as o}from"./AccessRequirementSearchBox.c230ceab.js";import{d as t}from"./ToastMessage.9c9a0082.js";import{j as r}from"./jsx-runtime.f7cf66fc.js";import"./Select-54ac8379.esm.84c2d679.js";import"./withStyles.ddbf8a64.js";import"./index.1e38edd3.js";import"./iframe.7a93df40.js";import"./index.a7b4e4df.js";import"./Alert.a83e08c9.js";import"./Button.8c8504e0.js";import"./index.57d09176.js";import"./Transition.9d380883.js";import"./index.35ce73ec.js";import"./isArray.a5837af6.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.d61a6d98.js";import"./useGetAccessRequirement.3f636936.js";import"./useInfiniteQuery.9ecf2d2e.js";import"./Skeleton.76391d30.js";import"./FullWidthAlert.73cdbacd.js";import"./Typography.dfe40719.js";import"./makeStyles.c3ae2cc2.js";import"./Tooltip.7bec90df.js";import"./createSvgIcon.fe8b3870.js";import"./useTheme.af842711.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.bff82890.js";import"./isSymbol.c2dfe727.js";const L={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"access-requirement-search-box-demo":{startLoc:{col:68,line:16},endLoc:{col:1,line:18},startBody:{col:68,line:16},endBody:{col:1,line:18}}}}},title:"Synapse/Governance/AccessRequirementSearchBox",component:o,argTypes:{}},n=e=>r(o,{...e}),s=n.bind({});s.args={onChange:e=>{t("Selected id: "+e,"info")}};const E=["AccessRequirementSearchBoxDemo"];export{s as AccessRequirementSearchBoxDemo,E as __namedExportsOrder,L as default};
