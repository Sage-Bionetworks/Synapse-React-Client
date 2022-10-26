import{A as o}from"./AccessRequirementSearchBox.05e3b9f1.js";import{d as t}from"./ToastMessage.a4b76c0b.js";import{j as r}from"./jsx-runtime.eafcb716.js";import"./Select-54ac8379.esm.349182a5.js";import"./withStyles.58225468.js";import"./index.c8a02fae.js";import"./iframe.5b9ef2ae.js";import"./index.1b5679ea.js";import"./Button.2a9ceb49.js";import"./index.57d09176.js";import"./utils.57f84b27.js";import"./Alert.3a69b0d7.js";import"./index.35ce73ec.js";import"./isArray.58b2754e.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.b014c401.js";import"./useGetAccessRequirement.d431fc61.js";import"./useInfiniteQuery.0ce0255d.js";import"./Skeleton.7d351d4d.js";import"./FullWidthAlert.a684bfe0.js";import"./Typography.049c6864.js";import"./makeStyles.ba00c68d.js";import"./Tooltip.96a18513.js";import"./createSvgIcon.01cb2ea7.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.6b2e4177.js";import"./isSymbol.4226a630.js";const G={parameters:{storySource:{source:`import React from 'react'
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
