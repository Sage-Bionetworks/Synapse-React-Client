import{A as o}from"./AccessRequirementSearchBox.5961b787.js";import{d as t}from"./ToastMessage.b42768ca.js";import{j as r}from"./jsx-runtime.a232804d.js";import"./Select-54ac8379.esm.9dfe37c4.js";import"./withStyles.1db4abc8.js";import"./index.ba62157d.js";import"./iframe.10584503.js";import"./index.df4d7189.js";import"./Button.6d51f091.js";import"./index.57d09176.js";import"./utils.428c4b7a.js";import"./Alert.05377b39.js";import"./index.35ce73ec.js";import"./isArray.a5a56f48.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.885aee5a.js";import"./useGetAccessRequirement.cd2c60ff.js";import"./useInfiniteQuery.b7b3231b.js";import"./Skeleton.e3b72fa9.js";import"./FullWidthAlert.5abd6e7a.js";import"./Typography.9247f57a.js";import"./makeStyles.403aaa55.js";import"./Tooltip.d38d9e30.js";import"./createSvgIcon.2aaf66cc.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.42db352a.js";import"./isSymbol.af0f15b0.js";const G={parameters:{storySource:{source:`import React from 'react'
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
