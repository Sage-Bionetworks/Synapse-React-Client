import{A as o}from"./AccessRequirementSearchBox.feb51557.js";import{d as t}from"./ToastMessage.8ffb9391.js";import{j as r}from"./jsx-runtime.1d2001c8.js";import"./Select-54ac8379.esm.e5fa35ad.js";import"./withStyles.706b11e4.js";import"./index.43d111f8.js";import"./iframe.11c071de.js";import"./index.a3e4acf8.js";import"./Button.850c0905.js";import"./index.57d09176.js";import"./utils.b5696502.js";import"./Alert.cbdcee9e.js";import"./index.35ce73ec.js";import"./isArray.a059945b.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.3fc47b81.js";import"./useGetAccessRequirement.a9c65df6.js";import"./useInfiniteQuery.70f427eb.js";import"./Skeleton.b5215bc5.js";import"./FullWidthAlert.6b98829c.js";import"./Typography.e119af63.js";import"./makeStyles.c53704bf.js";import"./Tooltip.76084c23.js";import"./createSvgIcon.6133e741.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.93061bc8.js";import"./isSymbol.ce5fe5c9.js";const G={parameters:{storySource:{source:`import React from 'react'
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
