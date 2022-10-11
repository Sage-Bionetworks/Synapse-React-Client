import{A as o}from"./AccessRequirementSearchBox.8f1fdcff.js";import{d as t}from"./ToastMessage.ef3fd930.js";import{j as r}from"./jsx-runtime.f6e67d69.js";import"./Select-54ac8379.esm.4ecb5386.js";import"./withStyles.e9153c6c.js";import"./index.5aa44f42.js";import"./iframe.0155d3d5.js";import"./index.399b1ebb.js";import"./Alert.161bc8be.js";import"./Button.bb6df31f.js";import"./index.57d09176.js";import"./Transition.45107636.js";import"./index.35ce73ec.js";import"./isArray.bbc3389f.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.b9f91416.js";import"./useGetAccessRequirement.8d39abbd.js";import"./useInfiniteQuery.409ad78a.js";import"./Skeleton.e925cd71.js";import"./FullWidthAlert.a36cfcd9.js";import"./Typography.8482fe8d.js";import"./makeStyles.b3ebb6fc.js";import"./Tooltip.e69703f2.js";import"./createSvgIcon.1bc5e790.js";import"./useTheme.b5d1a103.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.b369d35f.js";import"./isSymbol.817739da.js";const L={parameters:{storySource:{source:`import React from 'react'
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
