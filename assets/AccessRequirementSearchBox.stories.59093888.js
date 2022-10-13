import{A as o}from"./AccessRequirementSearchBox.8459dcb7.js";import{d as t}from"./ToastMessage.373e274f.js";import{j as r}from"./jsx-runtime.1a5a2715.js";import"./Select-54ac8379.esm.d1781a8c.js";import"./withStyles.7c3d6aba.js";import"./index.6dbf9fa2.js";import"./iframe.cf33b896.js";import"./index.ee300637.js";import"./Button.47fead8e.js";import"./index.57d09176.js";import"./utils.6069a350.js";import"./Alert.9d12ab40.js";import"./index.35ce73ec.js";import"./isArray.627abb94.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.43465c61.js";import"./useGetAccessRequirement.0deb7b53.js";import"./useInfiniteQuery.142046cf.js";import"./Skeleton.1753a711.js";import"./FullWidthAlert.1624915d.js";import"./Typography.51984e68.js";import"./makeStyles.bd855ff6.js";import"./Tooltip.5c94c0fd.js";import"./createSvgIcon.d6b9a03c.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.395c9d56.js";import"./isSymbol.eee16a1e.js";const G={parameters:{storySource:{source:`import React from 'react'
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
