import{A as o}from"./AccessRequirementSearchBox.23a5fae0.js";import{d as t}from"./ToastMessage.0e3c58b8.js";import{j as r}from"./jsx-runtime.470fedf8.js";import"./Select-54ac8379.esm.b34a3580.js";import"./emotion-react.browser.esm.95d336ef.js";import"./styled.ca076b3f.js";import"./index.a7a39b73.js";import"./iframe.2c3c563c.js";import"./index.d78db713.js";import"./SynapseConstants.290eab74.js";import"./Button.32652e66.js";import"./utils.de422cb3.js";import"./TransitionGroupContext.f07704a6.js";import"./useTheme.aca7cff5.js";import"./Alert.aa708f58.js";import"./hook.b9a8fbc8.js";import"./createWithBsPrefix.2bae2e8a.js";import"./divWithClassName.b6065814.js";import"./index.35ce73ec.js";import"./Fade.260ddc4e.js";import"./isArray.35667cb8.js";import"./getEndpoint.bb7ded34.js";import"./Link.46681652.js";import"./Typography.c6dffdf6.js";import"./Button.5119f75c.js";import"./ButtonBase.776e8c8b.js";import"./useGetAccessRequirement.c6d9edea.js";import"./useInfiniteQuery.20432a69.js";import"./Skeleton.d220704f.js";import"./FullWidthAlert.e4048025.js";import"./Tooltip.1e1cee1e.js";import"./createSvgIcon.d70ded48.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.dfabcedb.js";import"./isSymbol.d795e13a.js";const J={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"access-requirement-search-box-demo":{startLoc:{col:68,line:16},endLoc:{col:1,line:18},startBody:{col:68,line:16},endBody:{col:1,line:18}}}}},title:"Synapse/Governance/AccessRequirementSearchBox",component:o,argTypes:{}},n=e=>r(o,{...e}),s=n.bind({});s.args={onChange:e=>{t("Selected id: "+e,"info")}};const K=["AccessRequirementSearchBoxDemo"];export{s as AccessRequirementSearchBoxDemo,K as __namedExportsOrder,J as default};
