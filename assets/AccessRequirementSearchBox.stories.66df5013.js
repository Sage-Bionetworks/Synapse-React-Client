import{A as o}from"./AccessRequirementSearchBox.a49103a6.js";import{d as t}from"./ToastMessage.9b5c3655.js";import{j as r}from"./jsx-runtime.4c3515e4.js";import"./Select-54ac8379.esm.4527fff6.js";import"./withStyles.9c7b3093.js";import"./index.e847bba9.js";import"./iframe.37f2588a.js";import"./index.9501be1c.js";import"./Alert.54d65423.js";import"./Button.28efd16b.js";import"./index.57d09176.js";import"./Transition.840176b2.js";import"./index.35ce73ec.js";import"./isArray.7ff8d0ef.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.d7dd9197.js";import"./useGetAccessRequirement.9b9918ba.js";import"./useInfiniteQuery.b0fd5972.js";import"./Skeleton.dccb1004.js";import"./FullWidthAlert.c9de56f1.js";import"./Typography.48c24744.js";import"./makeStyles.96934dd6.js";import"./Tooltip.92206031.js";import"./createSvgIcon.8e9e6f8f.js";import"./useTheme.5faeeca8.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.129d2094.js";import"./isSymbol.6b184f44.js";const L={parameters:{storySource:{source:`import React from 'react'
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
