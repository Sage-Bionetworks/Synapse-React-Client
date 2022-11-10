import{A as o}from"./AccessRequirementSearchBox.515d2b50.js";import{d as t}from"./ToastMessage.e5302c4a.js";import{j as r}from"./jsx-runtime.2ff8811e.js";import"./Select-54ac8379.esm.aa8b90fd.js";import"./styled.9a92447e.js";import"./ButtonBase.4576d1dd.js";import"./TransitionGroupContext.ecfa02dc.js";import"./index.95124b04.js";import"./iframe.f6116fbf.js";import"./index.3bd83fcc.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.774b93d6.js";import"./utils.2126a84f.js";import"./Alert.d722c515.js";import"./createWithBsPrefix.8ba5f7eb.js";import"./index.35ce73ec.js";import"./isArray.c66fbb5a.js";import"./getEndpoint.bb7ded34.js";import"./Link.1ad1c99a.js";import"./Typography.58720d37.js";import"./Button.52cb13cc.js";import"./useGetAccessRequirement.08874b7b.js";import"./useInfiniteQuery.9f4576d7.js";import"./Skeleton.cb3b50d8.js";import"./FullWidthAlert.b9821286.js";import"./Tooltip.5bd16401.js";import"./createSvgIcon.13613b84.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.65424154.js";import"./isSymbol.15cce469.js";const O={parameters:{storySource:{source:`import React from 'react'
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
