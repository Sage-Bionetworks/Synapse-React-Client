import{A as o}from"./AccessRequirementSearchBox.cb98395a.js";import{d as t}from"./ToastMessage.486f16ec.js";import{j as r}from"./jsx-runtime.2b71273f.js";import"./Select-54ac8379.esm.e1f0cef1.js";import"./styled.ffa42780.js";import"./ButtonBase.1d993e3f.js";import"./TransitionGroupContext.ec9d4526.js";import"./index.7aa8b9f8.js";import"./iframe.2ab16825.js";import"./index.3d089af5.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.9a34c287.js";import"./utils.4bc122e2.js";import"./Alert.dab3d922.js";import"./createWithBsPrefix.64e0cb3b.js";import"./index.35ce73ec.js";import"./isArray.f3e4211e.js";import"./getEndpoint.bb7ded34.js";import"./Link.fcffcbaa.js";import"./Typography.e75e6cdf.js";import"./Button.f0ab2e0d.js";import"./useGetAccessRequirement.ac090de8.js";import"./useInfiniteQuery.9dc12884.js";import"./Skeleton.aec42867.js";import"./FullWidthAlert.d57a412d.js";import"./Tooltip.7c243246.js";import"./createSvgIcon.8400397d.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.775c431b.js";import"./isSymbol.6a44fdec.js";const O={parameters:{storySource:{source:`import React from 'react'
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
