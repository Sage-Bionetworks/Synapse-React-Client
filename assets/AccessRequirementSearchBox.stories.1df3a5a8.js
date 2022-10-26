import{A as o}from"./AccessRequirementSearchBox.f3ea55a6.js";import{d as t}from"./ToastMessage.ac6c5fb4.js";import{j as r}from"./jsx-runtime.36c99582.js";import"./Select-54ac8379.esm.f1c2f3ec.js";import"./withStyles.0fa6dc3f.js";import"./index.7dc20356.js";import"./iframe.67c9a843.js";import"./index.7b571c3f.js";import"./Button.4aa3a811.js";import"./index.57d09176.js";import"./utils.0ebf16b5.js";import"./Alert.e200e4c1.js";import"./index.35ce73ec.js";import"./isArray.919b23ad.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.afc4513f.js";import"./useGetAccessRequirement.9d56fa92.js";import"./useInfiniteQuery.84777ede.js";import"./Skeleton.8b8b9138.js";import"./FullWidthAlert.cabbd8c8.js";import"./Typography.fbe70ffe.js";import"./makeStyles.590b227a.js";import"./Tooltip.687fac3a.js";import"./createSvgIcon.68552f98.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.4c721b80.js";import"./isSymbol.aedffc3c.js";const G={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"access-requirement-search-box-demo":{startLoc:{col:68,line:16},endLoc:{col:1,line:18},startBody:{col:68,line:16},endBody:{col:1,line:18}}}}},title:"Synapse/Governance/AccessRequirementSearchBox",component:o,argTypes:{}},n=e=>r(o,{...e}),s=n.bind({});s.args={onChange:e=>{t("Selected id: "+e,"info")}};const L=["AccessRequirementSearchBoxDemo"];export{s as AccessRequirementSearchBoxDemo,L as __namedExportsOrder,G as default};
