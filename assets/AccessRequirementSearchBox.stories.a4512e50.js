import{A as o}from"./AccessRequirementSearchBox.5f4753fe.js";import{d as t}from"./ToastMessage.2fd043cd.js";import{j as r}from"./jsx-runtime.8900a285.js";import"./Select-54ac8379.esm.ef963bc1.js";import"./withStyles.1744e3f1.js";import"./index.912828a9.js";import"./iframe.c24069c1.js";import"./index.a2edd6ac.js";import"./Button.e50f7fc9.js";import"./index.57d09176.js";import"./utils.d7ed0c75.js";import"./Alert.3046b0d1.js";import"./index.35ce73ec.js";import"./isArray.4e3f2043.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.4e934e01.js";import"./useGetAccessRequirement.21de15b3.js";import"./useInfiniteQuery.a2a2b7db.js";import"./Skeleton.a2940302.js";import"./FullWidthAlert.aad3bca8.js";import"./Typography.f8e8965b.js";import"./makeStyles.f81fc0de.js";import"./Tooltip.7bdb955a.js";import"./createSvgIcon.11696c8f.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.711b61c1.js";import"./isSymbol.74032678.js";const G={parameters:{storySource:{source:`import React from 'react'
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
