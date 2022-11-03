import{A as o}from"./AccessRequirementSearchBox.fc72908f.js";import{d as t}from"./ToastMessage.3d8ba4da.js";import{j as r}from"./jsx-runtime.41b63a18.js";import"./Select-54ac8379.esm.a8e92046.js";import"./withStyles.bf9f4c29.js";import"./index.fb0baffa.js";import"./iframe.1b6f62a5.js";import"./index.95357afa.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.d66b1296.js";import"./index.57d09176.js";import"./utils.8566b4fb.js";import"./Alert.2d23c399.js";import"./createWithBsPrefix.4703bb5e.js";import"./index.35ce73ec.js";import"./isArray.9516ce6b.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.d8df91d8.js";import"./useGetAccessRequirement.0e54bbee.js";import"./useInfiniteQuery.afb80f09.js";import"./Skeleton.2b632001.js";import"./FullWidthAlert.5cb2b687.js";import"./Typography.dc699c3a.js";import"./makeStyles.3de8ae0d.js";import"./Tooltip.50b065de.js";import"./createSvgIcon.3e6e5789.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.7743d6ef.js";import"./isSymbol.fc7173a4.js";const E={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"access-requirement-search-box-demo":{startLoc:{col:68,line:16},endLoc:{col:1,line:18},startBody:{col:68,line:16},endBody:{col:1,line:18}}}}},title:"Synapse/Governance/AccessRequirementSearchBox",component:o,argTypes:{}},n=e=>r(o,{...e}),s=n.bind({});s.args={onChange:e=>{t("Selected id: "+e,"info")}};const O=["AccessRequirementSearchBoxDemo"];export{s as AccessRequirementSearchBoxDemo,O as __namedExportsOrder,E as default};
