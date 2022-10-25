import{A as o}from"./AccessRequirementSearchBox.8d59fd9a.js";import{d as t}from"./ToastMessage.b3f610fb.js";import{j as r}from"./jsx-runtime.77363692.js";import"./Select-54ac8379.esm.64cb46c5.js";import"./withStyles.42967b9b.js";import"./index.f99e416a.js";import"./iframe.3e104d71.js";import"./index.a732538f.js";import"./Button.a1ee4a46.js";import"./index.57d09176.js";import"./utils.1575e991.js";import"./Alert.23dfc2a1.js";import"./index.35ce73ec.js";import"./isArray.c7b11016.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.06dbb4d5.js";import"./useGetAccessRequirement.c02616c6.js";import"./useInfiniteQuery.04db0737.js";import"./Skeleton.5e1e1a25.js";import"./FullWidthAlert.23cfe207.js";import"./Typography.ce6b431d.js";import"./makeStyles.5320a651.js";import"./Tooltip.be22d41b.js";import"./createSvgIcon.5dedd617.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.0aa98db3.js";import"./isSymbol.e0bcd831.js";const G={parameters:{storySource:{source:`import React from 'react'
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
