import{A as o}from"./AccessRequirementSearchBox.a467f07a.js";import{d as t}from"./ToastMessage.f3c1e08b.js";import{j as r}from"./jsx-runtime.ed0bc2e8.js";import"./Select-54ac8379.esm.d5f59070.js";import"./withStyles.5eea39d5.js";import"./index.68bd2905.js";import"./iframe.1c77586e.js";import"./index.444e3572.js";import"./Button.ead7d59a.js";import"./index.57d09176.js";import"./utils.31a80d71.js";import"./Alert.e70a23c6.js";import"./index.35ce73ec.js";import"./isArray.69d02dee.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.1c3fe3f1.js";import"./useGetAccessRequirement.6e90b266.js";import"./useInfiniteQuery.4114925f.js";import"./Skeleton.d97a08a6.js";import"./FullWidthAlert.7478a55e.js";import"./Typography.935cd23d.js";import"./makeStyles.83c340c0.js";import"./Tooltip.9455954b.js";import"./createSvgIcon.b88943f5.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.e6e71b68.js";import"./isSymbol.3ae1367c.js";const G={parameters:{storySource:{source:`import React from 'react'
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
