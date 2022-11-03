import{A as o}from"./AccessRequirementSearchBox.ee043423.js";import{d as t}from"./ToastMessage.25625655.js";import{j as r}from"./jsx-runtime.34ce7573.js";import"./Select-54ac8379.esm.0ae6bcaf.js";import"./styled.20fad266.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./index.440cbb05.js";import"./iframe.2f145b9b.js";import"./index.9252e43c.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.ce0bd2bc.js";import"./utils.02697a41.js";import"./Alert.6db3bf6f.js";import"./createWithBsPrefix.b3a1d38c.js";import"./index.35ce73ec.js";import"./isArray.c4020594.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.be1787bd.js";import"./useGetAccessRequirement.36c43b06.js";import"./useInfiniteQuery.c68591e1.js";import"./Skeleton.4a2bac74.js";import"./emotion-react.browser.esm.2f1b8c6f.js";import"./FullWidthAlert.9e017ef2.js";import"./Typography.40039e1c.js";import"./Tooltip.ba09745a.js";import"./createSvgIcon.b38e43ed.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.d34fd1e6.js";import"./isSymbol.a6cfa1b9.js";const E={parameters:{storySource:{source:`import React from 'react'
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
