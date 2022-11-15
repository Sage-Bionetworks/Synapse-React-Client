import{A as o}from"./AccessRequirementSearchBox.d6c7e552.js";import{d as t}from"./ToastMessage.720e11e8.js";import{j as r}from"./jsx-runtime.34c6f27f.js";import"./Select-54ac8379.esm.b35db36d.js";import"./styled.0edb18ff.js";import"./ButtonBase.14266c5d.js";import"./TransitionGroupContext.3999b8b4.js";import"./index.01abc564.js";import"./iframe.678b52ee.js";import"./index.c107377d.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.e09f83de.js";import"./utils.e76a203c.js";import"./Alert.894f722a.js";import"./createWithBsPrefix.37ad16b9.js";import"./index.35ce73ec.js";import"./isArray.2797ec7c.js";import"./getEndpoint.bb7ded34.js";import"./Link.31ef5031.js";import"./Typography.1460c8bf.js";import"./Button.115b5334.js";import"./useGetAccessRequirement.5e22a027.js";import"./useInfiniteQuery.b706301d.js";import"./Skeleton.88fd9d9d.js";import"./FullWidthAlert.79a1e2fc.js";import"./Tooltip.6150c4ad.js";import"./createSvgIcon.62fb05ce.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.0644964e.js";import"./isSymbol.95cae313.js";const O={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"access-requirement-search-box-demo":{startLoc:{col:68,line:16},endLoc:{col:1,line:18},startBody:{col:68,line:16},endBody:{col:1,line:18}}}}},title:"Synapse/Governance/AccessRequirementSearchBox",component:o,argTypes:{}},n=e=>r(o,{...e}),s=n.bind({});s.args={onChange:e=>{t("Selected id: "+e,"info")}};const z=["AccessRequirementSearchBoxDemo"];export{s as AccessRequirementSearchBoxDemo,z as __namedExportsOrder,O as default};
